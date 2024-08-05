# Arosenius scrape

## chatgpt query

Today we're going to scrape some data from the Ivar Arosenius archive, aroseniusarkivet.dh.gu.se.

The relevant app routes are:

```
app.get(urlRoot + "/documents", getDocuments);
app.get(urlRoot + "/document/:id", getDocument);
```

which we can contact at 
https://aroseniusarchive.dh.gu.se/api/documents
and
https://aroseniusarchive.dh.gu.se/api/document/4317
respectively.

An example response to api/documents is:

```
{"total":2185,"documents":[{"insert_id":4392,"id":4392,"title":"Privat samling","title_en":"","subtitle":null,"deleted":0,"published":1,"description":"","museum_int_id":["privat_diabilder_1907_0066"],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"1907","item_date_string":"1907","technique_material":"","acquisition":null,"content":null,"inscription":"  ","material":null,"creator":"","signature":"","literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"privat_diabilder_1907_0066","imagesize":{"width":1952,"height":2175,"type":"jpg"},"page":{"number":1,"order":1,"side":"front"},"googleVisionColors":[{"color":{"red":161,"green":149,"blue":160},"score":1}]}],"image":"privat_diabilder_1907_0066","type":["Konstverk"],"tags":["GKMs diabildssamling","Ämgel","Vin","Flaska","Glas","Djävul","Eld","Rök","Golv","Fluga"],"genre":["Målning"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":3934,"id":3934,"title":"Lillan vid berget","title_en":"","subtitle":null,"deleted":0,"published":1,"description":"","museum_int_id":[""],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"Cirka 1908","item_date_string":"1908","size":{"inner":{"width":10.1,"height":9.2}},"technique_material":"Gouache","acquisition":null,"content":null,"inscription":"","material":null,"creator":null,"signature":"","literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"privat_DSCF2624","imagesize":{"width":2484,"height":2198},"page":{"number":null,"order":null,"side":null},"googleVisionColors":[{"color":{"red":48,"green":59,"blue":61},"score":1}]}],"image":"privat_DSCF2624","type":["Konstverk"],"persons":["Eva \"Lillan\" Arosenius Constantine"],"genre":["Målning","Porträtt"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":4778,"id":4778,"title":"Guldkalfven","title_en":null,"subtitle":null,"deleted":0,"published":1,"description":null,"museum_int_id":[""],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"1906","item_date_string":"1906","size":{"inner":{"height":16,"width":25}},"technique_material":"Akvarell","acquisition":null,"content":null,"inscription":null,"material":null,"creator":null,"signature":null,"literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"11079299_fullsize","imagesize":{"width":3000,"height":1900,"type":"jpg"},"page":{"number":1,"order":1,"side":"front"}},{"image":"11079341_fullsize","imagesize":{"width":3000,"height":2423,"type":"jpg"},"page":{"number":2,"order":2,"side":"front"}}],"image":"11079299_fullsize","type":["Konstverk"],"tags":["Kalv","Pengar","Guld","Hatt","Antisemitism"],"genre":["Målning"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":4943,"id":4943,"title":"Kalifens guldfågel","title_en":null,"subtitle":null,"deleted":0,"published":1,"description":null,"museum_int_id":[""],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"1908","item_date_string":"1908","technique_material":null,"acquisition":null,"content":null,"inscription":null,"material":null,"creator":null,"signature":null,"literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"kalifenextra1","imagesize":{"width":1386,"height":1536,"type":"jpg"},"page":{"number":1,"order":1,"side":"front"}}],"image":"kalifenextra1","type":["Konstverk"],"tags":["Kalifens guldfågel"],"genre":["målning"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":3985,"id":3985,"title":"Ett troll har gossens hjärta tatt","title_en":"","subtitle":null,"deleted":0,"published":1,"description":"Ett kvinnligt troll springer iväg med ett hjärta hon tagit från en ung man. Ingår i serien Bilderbok för vuxna, med totalt 23 bilder.","museum_int_id":[""],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"1908","item_date_string":"1908","size":{},"technique_material":"Akvarell på papper","acquisition":null,"content":null,"inscription":"","material":null,"creator":"Ivar Arosenius","signature":"","literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"privat_DSCF3049","imagesize":{"width":4898,"height":3211,"type":"jpg"},"page":{"number":null,"order":null,"side":null}}],"image":"privat_DSCF3049","type":["Konstverk"],"tags":["Hjärta","Troll","Kärlek"],"genre":["Målning","Serier"],"series":["Bilderbok för vuxna"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":3387,"id":3387,"title":"Sagan om fiskdrottningen (del 1 av 4)","title_en":null,"subtitle":null,"deleted":0,"published":1,"description":"Handlingar i original och avskrifter rörande Arosenius akvareller som kommit bort mellan utställningarna i Helsingfors och Oslo 1927.","museum_int_id":["GUB0112645","","web0093"],"collection":{"museum":"Göteborgs universitetsbibliotek"},"museumLink":null,"item_date_str":null,"item_date_string":null,"technique_material":"Papper","acquisition":null,"content":null,"inscription":null,"material":null,"creator":"Ivar Arosenius","signature":null,"literature":null,"reproductions":null,"bundle":"GUB0112645","page":{"order":93,"side":"RightPage"},"images":[{"image":"GUB0112645-0093","imagesize":{"width":1689,"height":1432,"type":"jpg"},"page":{"number":1,"order":1,"side":"front","id":"web0093"},"googleVisionColors":[{"color":{"red":75,"green":86,"blue":77},"score":1}]},{"image":"GUB0112645-0094","imagesize":{"width":1689,"height":1432,"type":"jpg"},"page":{"number":1,"order":2,"side":"back","id":"web0094"},"googleVisionColors":[{"color":{"red":246,"green":247,"blue":236},"score":1}]}],"image":"GUB0112645-0093","type":["Konstverk"],"tags":["Bro","Man","Vatten"],"genre":["Målning","Saga"],"series":["Sagan om fiskdrottningen (reproduktion)"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":3171,"id":3171,"title":"Gubbe och gumma","title_en":"","subtitle":"","deleted":0,"published":1,"description":"En man i hatt står med utsträckta armar framför en kvinna i klänning.","museum_int_id":["NMH 165/1975","48176"],"collection":{"museum":"Nationalmuseum"},"museumLink":"http://collection.nationalmuseum.se/eMP/eMuseumPlus?service=ExternalInterface&module=collection&objectId=48176&viewType=detailView","item_date_str":null,"item_date_string":null,"size":{"outer":{"width":42,"height":55},"inner":{"width":8,"height":12.5}},"technique_material":"Akvarell på papper","acquisition":"Gåva 1975 av fru Astrid Torstensson","content":null,"inscription":null,"material":"Pensel och svart bläck på papper","creator":"Ivar Arosenius","signature":"","literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"nationalmuseum-H0165-1975-recto","imagesize":{"width":4167,"height":6379},"page":{"number":1,"order":1,"side":"front"},"googleVisionColors":[{"color":{"red":60,"green":53,"blue":46},"score":1}]},{"image":"nationalmuseum-H0165-1975-verso","imagesize":{"width":4170,"height":6370},"page":{"number":1,"order":2,"side":"back"},"googleVisionColors":[{"color":{"red":224,"green":216,"blue":194},"score":1}]}],"image":"nationalmuseum-H0165-1975-recto","type":["Konstverk"],"tags":["Hatt","Klänning","Man","Kvinna"],"genre":["Målning"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":4258,"id":4258,"title":"Privat samling","title_en":"","subtitle":null,"deleted":0,"published":1,"description":"Fotografiet har tagits av Nordiska Akvarellmuseet.","museum_int_id":["privat_arosenius_dubblettbilder167"],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"1905","item_date_string":"1905","size":{"inner":{"width":21,"height":17}},"technique_material":"Akvarell","acquisition":null,"content":null,"inscription":"  ","material":null,"creator":"","signature":"","literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"IA_BröllopsgästerAT","imagesize":{"width":3356,"height":2718,"type":"jpg"},"page":{"number":1,"order":1,"side":"front"},"googleVisionColors":[{"color":{"red":177,"green":205,"blue":170},"score":1}]}],"image":"IA_BröllopsgästerAT","type":["Konstverk"],"tags":["Vagn","Häst","Piska","Bröllop"],"genre":["Målning"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":4236,"id":4236,"title":"Privat samling","title_en":"","subtitle":null,"deleted":0,"published":1,"description":"","museum_int_id":["privat_diabilder_1903_010"],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"1903","item_date_string":"1903","technique_material":"","acquisition":null,"content":null,"inscription":"  ","material":null,"creator":"","signature":"","literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"privat_diabilder_1903_010","imagesize":{"width":2897,"height":1731,"type":"jpg"},"page":{"number":1,"order":1,"side":"front"},"googleVisionColors":[{"color":{"red":85,"green":80,"blue":103},"score":1}]}],"image":"privat_diabilder_1903_010","type":["Konstverk"],"tags":["GKMs diabildssamling","Galler","Skrik","Grimaser"],"genre":["Målning"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":4313,"id":4313,"title":"En kärlekssaga i sex tablåer (del 3 av 6)","title_en":"","subtitle":"Ljufva stunder","deleted":0,"published":1,"description":"","museum_int_id":["privat_arosenius_dubblettbilder017"],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"1907","item_date_string":"1907","technique_material":"","acquisition":null,"content":null,"inscription":"  ","material":null,"creator":"","signature":"","literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"privat_arosenius_dubblettbilder017","imagesize":{"width":3054,"height":1846,"type":"jpg"},"page":{"number":1,"order":1,"side":"front"},"googleVisionColors":[{"color":{"red":131,"green":117,"blue":101},"score":1}]}],"image":"privat_arosenius_dubblettbilder017","type":["Konstverk"],"tags":["GKMs diabildssamling","Måne","Jungfru","Riddare","Träd"],"genre":["Målning","Saga","Serier"],"series":["En kärlekssaga i sex tablåer"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":4191,"id":4191,"title":"Mansporträtt","title_en":"","subtitle":null,"deleted":0,"published":1,"description":"","museum_int_id":["privat_arosenius_dubblettbilder238"],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"1901","item_date_string":"1901","size":{"inner":{"width":11.5,"height":18}},"technique_material":"Tusch och akvarell","acquisition":null,"content":null,"inscription":"  ","material":null,"creator":"","signature":"","literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"11165820_fullsize","imagesize":{"width":1876,"height":3000,"type":"jpg"},"page":{"number":1,"order":1,"side":"front"},"googleVisionColors":[{"color":{"red":214,"green":205,"blue":198},"score":1}]}],"image":"11165820_fullsize","type":["Konstverk"],"tags":["GKMs diabildssamling","Mustasch","Valand","Frack"],"places":["Valand"],"genre":["Målning","Porträtt"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}},{"insert_id":4497,"id":4497,"title":"Privat samling","title_en":"","subtitle":null,"deleted":0,"published":1,"description":"","museum_int_id":["arosenius_dubblettbilder111"],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"","item_date_string":null,"technique_material":"","acquisition":null,"content":null,"inscription":"  ","material":null,"creator":"","signature":"","literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"privat_arosenius_dubblettbilder111","imagesize":{"width":2055,"height":2597,"type":"jpg"},"page":{"number":1,"order":1,"side":"front"},"googleVisionColors":[{"color":{"red":107,"green":86,"blue":95},"score":1}]}],"image":"privat_arosenius_dubblettbilder111","type":["Konstverk"],"tags":["GKMs diabildssamling","Blomma","Profil"],"genre":["Målning"
```


and example response to api/document/4317 is:

```
{"data":{"insert_id":4317,"id":4317,"title":"Privat samling","title_en":"","subtitle":null,"deleted":0,"published":1,"description":"","museum_int_id":["privat_arosenius_dubblettbilder086"],"collection":{"museum":"Privat samling"},"museumLink":null,"item_date_str":"1907","item_date_string":"1907","technique_material":"","acquisition":null,"content":null,"inscription":"  ","material":null,"creator":"","signature":"","literature":null,"reproductions":null,"bundle":null,"page":{"order":null,"side":null},"images":[{"image":"privat_arosenius_dubblettbilder086","imagesize":{"width":2112,"height":2644,"type":"jpg"},"page":{"number":1,"order":1,"side":"front"},"googleVisionColors":[{"color":{"red":89,"green":79,"blue":90},"score":1}]}],"image":"privat_arosenius_dubblettbilder086","type":["Konstverk"],"tags":["GKMs diabildssamling","Avlusning","Kamm","Klänning","Förkläde"],"genre":["Målning"],"sender":{"name":null,"birth_year":null,"death_year":null},"recipient":{"name":null,"birth_year":null,"death_year":null}}}
```


The image links appear to all be behind, for example, api/images/1000x/privat_arosenius_dubblettbilder086.jpg. The api route is described as

```
imgr
	.serve(config.image_path)
	.namespace("/images")
	.urlRewrite("/:path/:size/:file.:ext")
	.using(app);
```


Let me now describe our goals.
- All data downloaded to a single directory
- images in the largest resolution possible with the filename `id name.extension`, for example, "4317 Privat samling.jpg"
- metadata (api/document endpoint) with the filename `id name.json`

The api/document endpoint is likely unnecessary as we can iterate through api/documents directly. api/documents is defined as

```
// Search for documents
function getDocuments(req, res) {
	if (req.query.ids) {
		// Get specific documents.
		loadDocuments(req.query.ids.split(";")).then(docs =>
			res.json({
				documents: docs
			})
		);
	} else {
		// Perform search.
		search(req.query).then(names => {
			// Out of the full range of ids, determine what section to retrieve as complete records.
			const size = req.query.showAll ? 10000 : parseInt(req.query.count) || 100;
			const from =
				!req.query.showAll && req.query.page > 0
					? (req.query.page - 1) * size
					: 0;
			loadDocuments(names.slice(from, from + size)).then(docs =>
				res.json({
					total: names.length,
					documents: docs.map(doc => {
						if (req.query.simple) doc.images = undefined;
						return doc;
					})
				})
			);
		});
	}
}
```



It appears pagination works via a query like api/documents?count=50&page=2.

The base URL is https://aroseniusarkivet.dh.gu.se/api/. We'll develop this in NodeJS. Start.

## response

Let's start by creating a NodeJS script to scrape data from the Ivar Arosenius archive. We'll break the task into the following steps:

1. Fetch the list of documents from the `api/documents` endpoint.
2. For each document, download the metadata and images.
3. Save the metadata as JSON files and images in the largest resolution possible with the specified naming convention.

First, let's set up our NodeJS project:

1. **Initialize the NodeJS project**:
   ```bash
   mkdir arosenius_scraper
   cd arosenius_scraper
   npm init -y
   ```

2. **Install necessary packages**:
   We'll use `axios` for making HTTP requests and `fs` for file system operations.
   ```bash
   npm install axios fs
   ```

3. **Create the scraper script** (`index.js`):

```javascript
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
```

This script does the following:
1. Sets up the base URL and endpoints for the API.
2. Creates a download directory if it doesn't exist.
3. Fetches the list of documents.
4. Downloads the metadata and images for each document and saves them with the appropriate naming convention.

Run the script with:
```bash
node index.js
```

This script will download the metadata and images for the documents from the Ivar Arosenius archive and save them in the `downloads` directory. Adjustments can be made based on specific requirements or any changes in the API structure.
