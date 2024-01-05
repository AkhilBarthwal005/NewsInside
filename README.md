# NewsInsider

Welcome to NewsInsider, a React-based web application for fetching and displaying news articles from various categories. The app utilizes the News API to provide real-time news updates.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/news-insider.git
   cd news-insider

2. **Install dependencies:**
    ```bash
      npm install
    ```
3. **Setup News API Key:**

   - Create a .env file in the root directory:
     
     ```
      REACT_APP_NEWS_API=your-api-key
     ```
   - To use this application on your local machine, you need to create a .env file in the root directory and generate a new API key from News API. Use this API key for generating the        latest news.

4. **Start the development server:**

    ```
     npm start
    ```
    - Visit http://localhost:3000 in your browser to access NewsInsider. The navigation bar provides links to different news categories.
   
## Features
- Responsive design
- Infinite scroll for continuous news feed
- Real-time updates from the News API
  
## Screenshots

 ![Home Page For Desktop](https://github.com/AkhilBarthwal005/NewsInsider/blob/master/public/pc.png)


## Technologies Used
- React
- React Router
- News API
- react-top-loading-bar
- react-infinite-scroll-component
  
## Contributing
- Feel free to contribute to this project. Follow these steps:
1. Fork the repository
2. Create a new branch (git checkout -b feature/new-feature)
3. Make changes and commit (git commit -m 'Add new feature')
4. Push to the branch (git push origin feature/new-feature)
5. Create a pull request
