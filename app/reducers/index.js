import { combineReducers } from 'redux';
import BestSellers from './BestSellers';
import BannerTopSales from './BannerTopSales';
import Menu from './Menu';

export const makeState = state => ({
  bestSellers: state.BestSellers,
  banners: state.BannerTopSales,
  menu: state.Menu,
});

export default combineReducers({
  BestSellers,
  BannerTopSales,
  Menu,
});
