import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/routes/App.jsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from './components/routes/Bag.jsx';
import Home from './components/routes/Home.jsx';
import {Provider} from "react-redux";
import lavishStore from './store/index.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={lavishStore}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
