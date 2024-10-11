# Stock Ticker Application

## Objective
Develop a stock ticker application using the Next.js framework, similar to the one found on portal.tradebrains.in. This application features a stock search, detailed stock pages with SEO-friendly META tags, and a graph visualizing stock price data.

## Requirements
- **Base Framework:** Next.js
- **Data Source:** Stock data sourced through provided APIs.

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
   - Utilizes Next.js data fetching methods (`getServerSideProps` or `getStaticProps`) to pre-render stock details.
   - Includes error handling for API calls (e.g., invalid stock symbols).

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
- Uses Next.js `Link` or `useRouter` for client-side navigation to stock details.

### 2. Stock Details Page
- Dynamic route setup using `[symbol].js` in the `pages/stock` directory.
- Fetches stock details and price data based on the stock symbol from the API.
- Implements SEO using the `Head` component to set up `title` and `keywords`.

### 3. Stock Graph
- Utilizes Recharts component provided by ShadCN UI.
- Fetches price data from the Stock Prices API and maps it to the graph.

### 4. Data Fetching
- `getServerSideProps` is used for server-side rendering of stock details, ensuring fresh data on each request.
- Error handling includes checks for valid stock symbols and user-friendly error messages.

## Technical Specifications
- **Frontend:** Next.js (React)
- **Graph Library:** Recharts or Chart.js (choose one)
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
