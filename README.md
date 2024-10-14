# NewsHub

NewsHub is a React-based web application that provides users with the latest news articles from various categories. It utilizes the News API to fetch real-time news data and presents it in a user-friendly interface.

## Features

- Browse news articles from different categories:
  - General
  - Business
  - Entertainment
  - Health
  - Science
  - Sports
  - Technology
- Responsive design for optimal viewing on various devices
- Pagination for easy navigation through news articles
- Article details including title, description, image, author, and publication date
- Search functionality (UI implemented, backend integration pending)

## Technologies Used

- React.js
- React Router for navigation
- Bootstrap for styling
- News API for fetching news data

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/newsapp.git
   cd newsapp
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your News API key:
   ```
   REACT_APP_NEWS_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

- Use the navigation bar to switch between different news categories.
- Click on "Read More" to view the full article on the source website.
- Use the Previous and Next buttons to navigate through pages of news articles.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- News data provided by [News API](https://newsapi.org/)
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
