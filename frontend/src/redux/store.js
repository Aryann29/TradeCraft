import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import stocksReducer from './features/stocks/stocksSlice';
import newsReducer from './features/news/newsSlice';
import userPortfolioReducer from './features/userPortfolio/userPortfolioSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stocks: stocksReducer,
    news: newsReducer,
    userPortfolio: userPortfolioReducer,
  },
});