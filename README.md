# URL Shortener

A simple and lightweight URL shortener service built with Node.js and Express.js. This application provides a RESTful API to shorten URLs and redirect users to the original URLs.

## Features

- 🔗 Shorten long URLs into simple numeric IDs
- 🚀 Fast redirects to original URLs
- 📊 New Relic monitoring integration
- ☁️ Heroku-ready deployment configuration
- 💾 In-memory storage (suitable for development and small-scale usage)

## Requirements

### System Requirements
- **Node.js**: Version 0.10.x (as specified in `package.json`)
- **npm**: Node package manager (comes with Node.js)

### Dependencies
- `express`: ^4.11.2 - Web framework
- `body-parser`: ^1.11.0 - Request body parsing middleware
- `newrelic`: ^1.16.1 - Application monitoring (optional)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd url-shortener-reaktor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure New Relic (Optional)**
   - Update the license key in `newrelic.js` with your New Relic license key
   - Or remove the New Relic require statement from `server.js` if not needed

## Usage

### Starting the Server

```bash
node server.js
```

The server will start on port 5000 by default, or use the `PORT` environment variable if set.

```
URL-shortener is running at port:5000
```

### Environment Variables

- `PORT`: Server port (default: 5000)
- `NEW_RELIC_LICENSE_KEY`: New Relic license key (optional)

### Running with Custom Port

```bash
PORT=3000 node server.js
```

## API Documentation

The API uses `application/x-www-form-urlencoded` content type for POST requests.

### Shorten a URL

**Endpoint:** `POST /shorten`

**Parameters:**
- `link` (required): The URL to shorten

**Request Example:**
```bash
curl -X POST http://localhost:5000/shorten \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "link=https://www.example.com/very/long/url/that/needs/shortening"
```

**Response:**
- **Success (200)**: Returns the ID of the shortened URL as plain text
- **Example Response:** `0`

### Access Shortened URL

**Endpoint:** `GET /{id}`

**Parameters:**
- `id`: The numeric ID returned from the shorten endpoint

**Response:**
- **Success (301)**: Redirects to the original URL
- **Not Found (404)**: If the ID doesn't exist

**Example:**
```bash
# This will redirect to the original URL
curl -L http://localhost:5000/0
```

### Health Check

**Endpoint:** `GET /`

**Response:**
- **Success (200)**: Server is running

## Examples

### Complete Workflow

1. **Shorten a URL:**
   ```bash
   curl -X POST http://localhost:5000/shorten \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "link=https://github.com"
   ```
   Response: `0`

2. **Access the shortened URL:**
   ```bash
   curl -L http://localhost:5000/0
   ```
   This will redirect you to `https://github.com`

### Using with JavaScript/Frontend

```javascript
// Shorten a URL
const shortenUrl = async (url) => {
  const response = await fetch('/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `link=${encodeURIComponent(url)}`
  });
  
  const id = await response.text();
  return `${window.location.origin}/${id}`;
};

// Usage
shortenUrl('https://www.example.com').then(shortUrl => {
  console.log('Shortened URL:', shortUrl);
});
```

## Deployment

### Heroku Deployment

This application is configured for Heroku deployment with the included `procfile`.

1. **Install Heroku CLI**
2. **Login to Heroku:**
   ```bash
   heroku login
   ```

3. **Create a Heroku app:**
   ```bash
   heroku create your-app-name
   ```

4. **Deploy:**
   ```bash
   git push heroku main
   ```

5. **Open your app:**
   ```bash
   heroku open
   ```

### Other Platforms

For other platforms, ensure:
- Node.js 0.10.x is available
- Set the `PORT` environment variable
- Run `npm install` to install dependencies
- Start with `node server.js`

## Development

### Project Structure

```
url-shortener-reaktor/
├── server.js          # Main application file
├── newrelic.js        # New Relic configuration
├── package.json       # Project dependencies and metadata
├── procfile          # Heroku process file
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

### Adding Features

The application uses an in-memory array to store URLs. For production use, consider:
- Adding a database (MongoDB, PostgreSQL, etc.)
- Implementing custom short codes instead of numeric IDs
- Adding URL validation
- Implementing rate limiting
- Adding analytics and click tracking

## Limitations

- **In-memory storage**: URLs are lost when the server restarts
- **No persistence**: Not suitable for production without database integration
- **No validation**: URLs are not validated before shortening
- **Sequential IDs**: IDs are predictable and start from 0

## Live Demo

The application can be seen live at: https://url-shortener-reaktor.herokuapp.com/

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

ISC License

## Support

For issues and questions, please create an issue in the repository.
