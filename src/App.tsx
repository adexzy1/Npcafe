import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTotals } from './Redux/CartSlice';
import Loading from './components/loading/Loading';
import { RootState } from './Redux/store';
import { useAppDispatch } from './hooks/useDispatch';
import { getProducts } from './Redux/ProductSlice';
import AppRoutes from './Routes/Routes';
import useAuthStatetChanged from './hooks/useAuthStateChanged';

function App() {
  // Redux hooks
  const dispatch = useAppDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);

  // get Products
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // get the number of total cart items
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  // custom hook
  const { isLoading } = useAuthStatetChanged();

  return (
    <div className="app">
      {isLoading && <Loading />}

      {!isLoading && (
        <>
          <ToastContainer
            theme="dark"
            autoClose={1000}
            hideProgressBar={true}
            pauseOnHover={true}
            position="top-right"
          />

          <AppRoutes />
        </>
      )}
    </div>
  );
}

export default App;
