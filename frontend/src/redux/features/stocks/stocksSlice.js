import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const sampleStocks = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2500, change: 1.5 },
  { symbol: "TCS", name: "Tata Consultancy Services", price: 3200, change: -0.8 },
  { symbol: "HDFCBANK", name: "HDFC Bank", price: 1600, change: 0.5 },
  { symbol: "INFY", name: "Infosys", price: 1400, change: 2.1 },
  { symbol: "ICICIBANK", name: "ICICI Bank", price: 900, change: -0.3 },
  { symbol: "SBIN", name: "State Bank of India", price: 500, change: 1.2 },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", price: 700, change: -0.6 },
  { symbol: "ITC", name: "ITC Limited", price: 300, change: 0.9 },
  { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", price: 1800, change: -0.4 },
  { symbol: "LT", name: "Larsen & Toubro", price: 2100, change: 1.7 },
];

export const fetchStocks = createAsyncThunk(
  'stocks/fetchStocks',
  async () => {
   
    await new Promise(resolve => setTimeout(resolve, 1000));
    return sampleStocks;
  }
);

const initialState = {
  stocks: [],
  status: 'idle',
  error: null,
};

export const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStocks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStocks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stocks = action.payload;
      })
      .addCase(fetchStocks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default stocksSlice.reducer;