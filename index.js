const axios = require('axios');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://aroseniusarkivet.dh.gu.se/api/';
const DOCUMENTS_ENDPOINT = 'documents';
const IMAGE_BASE_URL = 'https://aroseniusarkivet.dh.gu.se/api/images/';

const DOWNLOAD_DIR = './downloads';

// Create the downloads directory if it doesn't exist
if (!fs.existsSync(DOWNLOAD_DIR)){
    fs.mkdirSync(DOWNLOAD_DIR);
}

// Function to download metadata
const downloadMetadata = async (document) => {
    const metadataPath = path.join(DOWNLOAD_DIR, `${document.id} ${document.title}.json`);
    fs.writeFileSync(metadataPath, JSON.stringify(document, null, 2));
    console.log(`Downloaded metadata for ${document.title}`);
};

// Function to download images
const downloadImage = async (imagePath, documentId, documentTitle) => {
    const imageUrl = `${IMAGE_BASE_URL}1000x/${imagePath}.jpg`;
    const imagePathOnDisk = path.join(DOWNLOAD_DIR, `${documentId} ${documentTitle}.jpg`);

    const response = await axios({
        url: imageUrl,
        method: 'GET',
        responseType: 'stream'
    });

    response.data.pipe(fs.createWriteStream(imagePathOnDisk));

    return new Promise((resolve, reject) => {
        response.data.on('end', () => {
            console.log(`Downloaded image for ${documentTitle}`);
            resolve();
        });

        response.data.on('error', (err) => {
            console.error(`Error downloading image for ${documentTitle}: ${err}`);
            reject(err);
        });
    });
};

// Main function to scrape the data
const scrapeData = async () => {
    try {
        // Fetch the list of documents
        const response = await axios.get(`${BASE_URL}${DOCUMENTS_ENDPOINT}`);
        const documents = response.data.documents;

        // Iterate over the documents
        for (const document of documents) {
            // Download metadata
            await downloadMetadata(document);

            // Download images
            if (document.images && document.images.length > 0) {
                for (const image of document.images) {
                    await downloadImage(image.image, document.id, document.title);
                }
            }
        }
    } catch (error) {
        console.error(`Error scraping data: ${error}`);
    }
};

// Start the scraping process
scrapeData();
