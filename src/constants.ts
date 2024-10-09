const host = "https://portal.tradebrains.in";
const searchAPI = (query: string) => {
  return host + `/api/assignment/search?keyword=${query}&length=10`;
};
const stockTickerAPI = host + `/api/assignment/index/NIFTY/movers/`;

const stockDetailsAPI = (stock: string) => {
  return (
    host + `/api/assignment/stock/${stock}/prices?days=1&type=INTRADAY&limit=1`
  );
};

const services = [
  { key: 1, name: "Portfolio Analysis" },
  { key: 2, name: "Screener" },
  { key: 3, name: "New" },
  { key: 4, name: "Stock Research Report" },
  { key: 5, name: "Watchlist" },
  { key: 6, name: "Compare Stocks" },
];

const actions = [
  { key: 1, name: "All Stocks" },
  { key: 2, name: "Trending Stocks" },
  { key: 3, name: "Market News" },
  { key: 4, name: "Heat Map" },
  { key: 5, name: "Corporate Actions" },
  { key: 6, name: "Superstar Portfolio" },
  { key: 7, name: "Buckets" },
  { key: 8, name: "IPOs" },
  { key: 9, name: "More" },
];

const stockItems = [
  { key: 1, name: "Reliance Industries" },
  { key: 2, name: "TATA Motors" },
  { key: 3, name: "TATA Consultancy" },
  { key: 4, name: "HDFC Bank" },
  { key: 5, name: "Bajaj Finance" },
  { key: 6, name: "Maruti Suzuki" },
];

const description = `Reliance is India's largest private sector company on all major financial parameters. In 2004, Reliance Industries (RIL) 
   became the first Indian private sector organisation to
   be listed in the Fortune Global 500 list. The Company operates world-class manufacturing
   facilities across the country at Allahabad, Barabanki, Dahej, Hazira, Hoshiarpur, Jamnagar
   , Nagothane, Nagpur, Naroda, Patalganga, Silvassa and Vadodara.`;

const growthMetrics = [
  { key: 1, name: "Revenue Growth", returns: "+2.59%" },
  { key: 2, name: "Net Profit Growth", returns: "+7.26%" },
  { key: 3, name: "Operating Profit Growth", returns: "+15.85%" },
  { key: 4, name: "Dividend Growth", returns: "+11.11%" },
  { key: 5, name: "Stock Returns CAGR", returns: "+20.66%" },
];

const companyInfo = [
  { key: 1, field: "Company Incorporation", value: "1973" },
  { key: 2, field: "Chairman", value: "Mukesh D Ambani" },
  { key: 3, field: "Head Quarters", value: "Mumbai" },
  { key: 4, field: "Website", value: "http://www.ril.com" },
  { key: 5, field: "Previous Name", value: "NA" },
];

export {
  services,
  actions,
  stockItems,
  description,
  growthMetrics,
  companyInfo,
  searchAPI,
  stockTickerAPI,
  stockDetailsAPI,
};
