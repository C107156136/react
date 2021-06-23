import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import Product from 'src/pages/Product';
import Dashboard from 'src/pages/Dashboard';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Register2 from 'src/pages/Register2';
import Register3 from 'src/pages/Register3';
import Settings from 'src/pages/Settings';
import Salesorder from 'src/pages/Salesorder';
import Orderdetail from 'src/pages/Orderdetail';
import Customer from 'src/pages/Customer';
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'product', element: <Product /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'salesorder', element: <Salesorder /> },
      { path: 'orderdetail', element: <Orderdetail /> },
      { path: 'customer', element: <Customer /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'register2', element: <Register2 /> },
      { path: 'register3', element: <Register3 /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
