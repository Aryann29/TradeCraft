import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const sampleNews = [
  { title: "Reliance Industries announces new green energy initiative", source: "Economic Times" },
  { title: "TCS wins major contract with European bank", source: "Business Standard" },
  { title: "HDFC Bank merger with HDFC Ltd nears completion", source: "Mint" },
  { title: "Infosys revises FY24 revenue guidance", source: "LiveMint" },
  { title: "ICICI Bank launches new digital banking platform", source: "Financial Express" },
];

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async () => {
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return sampleNews;
  }
);

const initialState = {
  news: [],
  status: 'idle',
  error: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;