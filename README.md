# Game Hub - React Practice Project

This repository showcases a frontend client project developed with React 18, primarily intended for learning and practice. The project draws inspiration from [RAWG](https://rawg.io/apidocs), a comprehensive video game database service. Utilizing RAWG's API, this application functions as a game hub platform, emulating RAWG's core features.

In this application, all data fetching is handled directly by React, bypassing a traditional backend setup. While this approach isn't typically best practice, the focus of this project is on frontend capabilities, not backend integration.

Key functionalities include:

- **Game Search**: Users can search for video games using various filters.
- **Data Fetching**: The application fetches game data based on genre, platform, and allows for custom sorting options.
- **Detailed Game Insights**: For each game, the platform displays detailed information including the publisher, screenshots, and demo videos.
- **Theme Customization**: Users can toggle between dark and light modes with a simple click on the theme switcher.

This project serves as an effective demonstration of integrating external APIs (like RAWG's) into a React-based client, offering an engaging and interactive experience for video game enthusiasts.

## Getting Started

1. **Obtain an API Key**: First, acquire an API key from [RAWG](https://rawg.io/apidocs).

2. **Set Up Environment Variables**: Next, create a `.env` file in the project's root directory (the same level as the `src` folder). Inside this file, include the following line:

   ```bash
   VITE_RAWG_API_KEY=<your API key>
   ```

   Replace `<your API key>` with the API key you obtained from RAWG.

3. **Launch the Application**: Finally, execute the following command in your terminal:

   ```bash
   npm run dev
   ```

   This will start the application on your local server.

## Screenshots

### Dark Mode

![]()