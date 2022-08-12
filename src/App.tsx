import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import Loading from './components/loading/Loading';
import { useAppDispatch } from './hooks/useDispatch';
import { getProducts } from './Redux/ProductSlice';
import AppRoutes from './Routes/Routes';
import useAuthStatetChanged from './hooks/useAuthStateChanged';

function App() {
  // custom hook
  const { isLoading } = useAuthStatetChanged();

  // Redux hooks
  const dispatch = useAppDispatch();

  // get Products
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
