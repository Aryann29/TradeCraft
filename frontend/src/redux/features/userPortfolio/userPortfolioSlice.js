import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const sampleUserPortfolio = {
  user: {
    id: 1,
    username: 'johndoe',
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  totalValue: 250000,
  todayChange: 3500,
  todayChangePercentage: 1.4,
  holdings: [
    { symbol: "RELIANCE", quantity: 50, averageBuyPrice: 2400, currentPrice: 2500 },
    { symbol: "TCS", quantity: 30, averageBuyPrice: 3100, currentPrice: 3200 },
    { symbol: "HDFCBANK", quantity: 100, averageBuyPrice: 1550, currentPrice: 1600 },
    { symbol: "INFY", quantity: 75, averageBuyPrice: 1350, currentPrice: 1400 },
  ],
  watchlist: [
    { symbol: "SBIN", name: "State Bank of India", price: 500, change: 1.2 },
    { symbol: "BHARTIARTL", name: "Bharti Airtel", price: 700, change: -0.6 },
    { symbol: "ITC", name: "ITC Limited", price: 300, change: 0.9 },
    { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", price: 1800, change: -0.4 },
    { symbol: "LT", name: "Larsen & Toubro", price: 2100, change: 1.7 },
  ]
};

export const fetchUserPortfolio = createAsyncThunk(
  'userPortfolio/fetchUserPortfolio',
  async () => {
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    return sampleUserPortfolio;
  }
);

const initialState = {
  data: null,
  status: 'idle',
  error: null,
};

export const userPortfolioSlice = createSlice({
  name: 'userPortfolio',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      if (state.data) {
        state.data.watchlist.push(action.payload);
      }
    },
    removeFromWatchlist: (state, action) => {
      if (state.data) {
        state.data.watchlist = state.data.watchlist.filter(stock => stock.symbol !== action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPortfolio.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserPortfolio.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserPortfolio.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToWatchlist, removeFromWatchlist } = userPortfolioSlice.actions;

export default userPortfolioSlice.reducer;