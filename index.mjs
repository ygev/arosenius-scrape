import axios from 'axios';
import fs from 'fs';
import path from 'path';
import pLimit from 'p-limit';

const BASE_URL = 'https://aroseniusarkivet.dh.gu.se/api/';
const DOCUMENTS_ENDPOINT = 'documents';
const IMAGE_BASE_URL = 'https://aroseniusarkivet.dh.gu.se/api/images/';

const DOWNLOAD_DIR = './downloads';
const MAX_CONCURRENCY = 3;

// Create the downloads directory if it doesn't exist
if (!fs.existsSync(DOWNLOAD_DIR)){
    fs.mkdirSync(DOWNLOAD_DIR);
}

// Helper function to delay execution
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Function to download metadata
const downloadMetadata = async (document) => {
    const metadataPath = path.join(DOWNLOAD_DIR, `${document.id} ${document.title}.json`);
    fs.writeFileSync(metadataPath, JSON.stringify(document, null, 2));
    console.log(`Downloaded metadata for document ID ${document.id}, title: ${document.title}`);
};

// Function to download images
const downloadImage = async (imagePath, documentId, documentTitle, attempt = 1) => {
    const imageUrl = `${IMAGE_BASE_URL}1000x/${imagePath}.jpg`;
    const imagePathOnDisk = path.join(DOWNLOAD_DIR, `${documentId} ${documentTitle}.jpg`);

    try {
        console.log(`Downloading image from ${imageUrl}`);
        const response = await axios({
            url: imageUrl,
            method: 'GET',
            responseType: 'stream'
        });

        response.data.pipe(fs.createWriteStream(imagePathOnDisk));

        return new Promise((resolve, reject) => {
            response.data.on('end', () => {
                console.log(`Successfully downloaded image for document ID ${documentId}, title: ${documentTitle}`);
                resolve();
            });

            response.data.on('error', (err) => {
                console.error(`Error downloading image for document ID ${documentId}, title: ${documentTitle}: ${err}`);
                reject(err);
            });
        });
    } catch (error) {
        console.error(`Error fetching image for document ID ${documentId}, title: ${documentTitle}: ${error}`);
        if (attempt <= 2) {
            console.log(`Retry ${attempt} for downloading image of document ID ${documentId}, title: ${documentTitle}...`);
            await delay(1000 * attempt); // Exponential backoff
            return downloadImage(imagePath, documentId, documentTitle, attempt + 1);
        } else {
            console.error(`Failed to download image for document ID ${documentId}, title: ${documentTitle} after 3 attempts.`);
        }
    }
};

// Function to fetch documents with pagination
const fetchDocuments = async (page) => {
    console.log(`Fetching documents from page ${page}...`);
    const response = await axios.get(`${BASE_URL}${DOCUMENTS_ENDPOINT}?page=${page}`);
    console.log(`Fetched ${response.data.documents.length} documents from page ${page}`);
    return response.data.documents;
};

// Main function to scrape the data with pagination and parallel processing
const scrapeData = async () => {
    try {
        let page = 1;
        let documents = [];

        // Fetch all pages
        while (true) {
            const docs = await fetchDocuments(page);
            if (docs.length === 0) break;
            documents = documents.concat(docs);
            page++;
        }

        console.log(`Total documents fetched: ${documents.length}`);

        const limit = pLimit(MAX_CONCURRENCY);

        // Iterate over the documents in parallel with limited concurrency
        await Promise.all(documents.map(document =>
            limit(async () => {
                // Download metadata
                await downloadMetadata(document);

                // Download images
                if (document.images && document.images.length > 0) {
                    await Promise.all(document.images.map(image =>
                        downloadImage(image.image, document.id, document.title)
                    ));
                }
            })
        ));

        console.log('Scraping process completed successfully.');
    } catch (error) {
        console.error(`Error scraping data: ${error}`);
    }
};

// Start the scraping process
scrapeData();
