import store from '../Redux/store';
import { useDispatch } from 'react-redux';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
