# Stock Ticker Application

## Objective
Develop a stock ticker application using the Next.js framework, similar to the one found on portal.tradebrains.in. This application features a stock search, detailed stock pages with SEO-friendly META tags, and a graph visualizing stock price data.

### Note
1. Some UI buttons, placeholder text, and icons have been included for aesthetic purposes. Although they lack functionality, they enhance the overall appearance of this project."
2. If the UI seems distorted, click on the dark mode toggle button on the top right corner. 

## Requirements
- **Base Framework:** Next.js
- **Data Source:** Display stock data sourced through provided APIs.

## Features
1. **Stock Search Functionality:**
   - Integrates with a search API to allow users to look up stocks.
   - Displays results dynamically as the user types (autocomplete feature).
   - Navigates to a stock details page upon selection.

2. **Stock Details Page:**
   - Dynamic routing for each stock (e.g., `/stock/[symbol]`).
   - Displays relevant stock information and price data.
   - SEO-friendly META tags configured using Next.js `Head` component:
     - **Title:** Stock’s name and symbol.
     - **Keywords:** Relevant stock keywords for improved SEO.

3. **Rendering the Stock Graph:**
   - Visualizes stock price data using a graphing library (e.g., Chart.js, Recharts).
   - Fetches price data via the Stock Prices API and displays it on the graph.

4. **Data Fetching and Integration:**
   - Includes error handling for API calls (e.g., invalid stock symbols).
5. **Localstorage support**
   - Implement a feature that allows users to save their favorite stocks to local storage for convenient and quick access.
6. **Skeleton Loader**
   - Implemented a skeleton loader by creating a higher-order component (HOC) that wraps around slower-loading components. This HOC displays a placeholder while the actual content is being fetched, improving the user experience by providing visual feedback during loading times.
7. **Favourite Stocks Page**
   -  This page allows users to view their saved favorite stocks in a dedicated section.
   -  Created a custom hook that encapsulates the logic for interacting with local storage. This hook manages the state of favorite stocks  and ensures that data persists even after the page reloads.
8. **Rolling Ticker**
   -  Implement a dynamic rolling ticker bar at the top of the page using the ticker component, similar to the functionality featured on portal.tradebrains.in.
   -  This ticker will continuously display real-time stock information, providing users with quick and convenient access to the latest updates
## APIs
1. **Search API:**
   - `GET /api/assignment/search?keyword=RELIANCE&length=10`
   - Host: `portal.tradebrains.in`
   
2. **Stock Ticker API:**
   - `GET /api/assignment/index/NIFTY/movers/`
   - Host: `portal.tradebrains.in`

3. **Stock Prices API:**
   - `GET /api/assignment/stock/SILVERLINE/prices?days=1&type=INTRADAY&limit=1`
   - Host: `portal.tradebrains.in`

## Implementation Walkthrough

### 1. Stock Search Component
- A search input field that fetches stock data as the user types.
- Displays a list of suggestions based on user input.
- Uses Next.js `useRouter` for client-side navigation to stock details.

### 2. Stock Details Page
- Dynamic route setup using `[symbol].js` in the `pages/stock` directory.
- Fetches stock details and price data based on the stock symbol from the API.
- Implements SEO using the `Head` component to set up `title` and `keywords`.

### 3. Stock Graph
- Utilizes Recharts component provided by ShadCN UI.
- Fetches price data from the Stock Prices API and maps it to the graph.

### 4. Data Fetching
- Error handling includes checks for valid stock symbols and user-friendly error messages.
- Added state returned by the custom hook as dependency in useEffect to ensure the component receives fresh data.

## Technical Specifications
- **Frontend:** Next.js (React)
- **Graph Library:** Recharts by ShadCN
- **Styling:** ShadCN, Tailwind CSS.

## Additional Notes
- The application is mobile and desktop responsive.
- Created reusable components to make the code modular and maintainable.

## Installation
1. Clone the repository and setup project
   ```bash
   git clone https://github.com/your-repo-url.git
   cd your-repo-name
   npm install
   npm run dev
2. Open your browser and navigate to http://localhost:3000
