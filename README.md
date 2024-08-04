# URL Metadata API

## Introduction

The NestJS URL Metadata API is an open-source API that retrieves and returns metadata for a given URL. It uses a Base64 encoded URL as input and provides detailed metadata, including titles, descriptions, canonical URLs, favicons, Open Graph data, and more. The API also caches results for efficient performance and supports rate limiting to manage usage.

This api is using https://www.npmjs.com/package/url-metadata to fetch data

## Features

- **URL Metadata Retrieval:** Fetches detailed metadata for any given URL.
- **Base64 URL Encoding:** The API accepts URLs in Base64 encoded format.
- **Caching:** Responses are cached for 1 hour to improve performance and reduce redundant requests.
- **Rate Limiting:** Limits each IP to 10 requests per hour to prevent abuse and manage resources efficiently.

## API Endpoint

### GET Request

- **URL:** `GET domain.com/aHR0cHM6Ly95YWhvby5jb20=`
- **Description:** Sends a GET request to retrieve metadata for the Base64 encoded URL.

#### URL Parameters

- **Base64 Encoded URL:** The URL for which metadata is to be retrieved should be Base64 encoded and appended to the API endpoint.

## Installation
### Clone the Repository:
```bash
git clone https://github.com/dev3mike/url-metadata-api.git
cd url-metadata-api
```

### Install Dependencies:
```bash
npm install
```

### Run the Server:
```bash
npm run start:dev
```

### Access the API:
The API will be running on http://localhost:3000.
Use the specified endpoint to retrieve URL metadata.

### Usage
Use any HTTP client or browser to send a GET request to the API endpoint with the Base64 encoded URL as the path.
Ensure the URL is correctly Base64 encoded.

### Caching and Rate Limiting
Caching: The API caches the metadata response for each URL for 1 hour. This reduces repeated processing of the same URL and improves response time for frequently requested URLs.
Rate Limiting: Each IP address is limited to 10 requests per hour. This helps manage server load and prevents abuse of the API.

### License
This project is licensed under the MIT License.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements you'd like to see.

### Contact
For any questions or support, please contact hej@masoudb.com.

### Example Request
GET /aHR0cHM6Ly95YWhvby5jb20=

This example corresponds to the Base64 encoded URL for https://yahoo.com.

#### Example Response:
```json
{
    "requestUrl": "https://yahoo.com",
    "url": "https://www.yahoo.com/",
    "canonical": "https://www.yahoo.com/",
    "lang": "en-US",
    "charset": "",
    "title": "Yahoo | Mail, Weather, Search, Politics, News, Finance, Sports & Videos",
    "image": "",
    "favicons": [
        {
            "rel": "shortcut icon",
            "href": "https://s.yimg.com/rz/l/favicon.ico"
        }
    ],
    "author": "",
    "description": "Latest news coverage, email, free stock quotes, live scores and video are just the beginning. Discover more every day at Yahoo!",
    "keywords": "yahoo, yahoo home page, yahoo homepage, yahoo search, yahoo mail, yahoo messenger, yahoo games, news, finance, sport, entertainment",
    "source": "",
    "price": "",
    "priceCurrency": "",
    "availability": "",
    "robots": "",
    "jsonld": [
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.yahoo.com/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://search.yahoo.com/search?p={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        }
    ],
    "og:url": "https://www.yahoo.com/",
    "og:locale": "",
    "og:locale:alternate": "",
    "og:title": "Yahoo | Mail, Weather, Search, Politics, News, Finance, Sports & Videos",
    "og:type": "website",
    "og:description": "Latest news coverage, email, free stock quotes, live scores and video are just the beginning. Discover more every day at Yahoo!",
    "og:determiner": "",
    "og:site_name": "",
    "og:image": "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
    "og:image:secure_url": "",
    "og:image:type": "",
    "og:image:width": "",
    "og:image:height": "",
    "twitter:title": "",
    "twitter:description": "",
    "twitter:image": "",
    "twitter:image:alt": "",
    "twitter:card": "",
    "twitter:site": "",
    "twitter:site:id": "",
    "twitter:url": "",
    "twitter:account_id": "",
    "twitter:creator": "",
    "twitter:creator:id": "",
    "twitter:player": "",
    "twitter:player:width": "",
    "twitter:player:height": "",
    "twitter:player:stream": "",
    "twitter:app:name:iphone": "",
    "twitter:app:id:iphone": "",
    "twitter:app:url:iphone": "",
    "twitter:app:name:ipad": "",
    "twitter:app:id:ipad": "",
    "twitter:app:url:ipad": "",
    "twitter:app:name:googleplay": "",
    "twitter:app:id:googleplay": "",
    "twitter:app:url:googleplay": "",
    "headings": [
        {
            "level": "h3",
            "text": "News"
        },
        {
            "level": "h3",
            "text": "Life"
        },
        {
            "level": "h3",
            "text": "Entertainment"
        },
        {
            "level": "h3",
            "text": "Finance"
        },
        {
            "level": "h3",
            "text": "Sports"
        },
        {
            "level": "h3",
            "text": "New on Yahoo"
        },
        {
            "level": "h3",
            "text": "US English   Select edition"
        },
        {
            "level": "h1",
            "text": "Yahoo Home"
        },
        {
            "level": "h2",
            "text": "Skip navigation links"
        },
        {
            "level": "h2",
            "text": "top stories"
        }
        // Other headings and image tags...
    ],
    "imgTags": [
        {
            "src": "https://s.yimg.com/uu/api/res/1.2/m2JAAeaJ8GwDCxfxKisOCQ--~B/Zmk9c3RyaW07aD0yNzI7cT05NTt3PTU2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-08/5b644c10-5291-11ef-b7fd-698bee14b8c7.cf.jpg",
            "alt": ""
        },
        {
            "src": "https://s.yimg.com/uu/api/res/1.2/5yKHQ.1uC9fVhowroV2bhQ--~B/Zmk9c3RyaW07aD0xODA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2024-08/2c1e9590-5283-11ef-bbbf-32bc0d798124.cf.jpg",
            "alt": ""
        }
        // Other image tags...
    ],
    "responseBody": "",
    "content-type": "text/html; charset=utf-8",
    "x-dns-prefetch-control": "on",
    "X-UA-Compatible": "chrome=1",
    "fb:app_id": "458584288257241",
    "fb:pages": "7040724713, 37510781596, 128015890542670, 73756409831, 1273983622628492, 183227235893, 107952415910993, 828031943896361, 338028696036, 228108177528276, 126435880711, 8603738371, 357311694375173, 168824166370, 116789651713844, 116789651713844, 284428852938, 116789651713844, 169590426398017, 150897358265131, 115060728528067, 358130347547704, 167601473274275, 166721106679241, 1573791532894850, 141301389258994, 138207559575213, 112996545439734, 345185573000, 131747896861126, 345185573000, 81262596234, 107143776010250, 137657892926963, 118757131504803",
    "conf:cjs:locale": "en-US",
    "oath:guce:consent-host": "guce.yahoo.com"
}
```

