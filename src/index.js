import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SecondPages from './pages/secondPages';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/secondPages",
    element: <SecondPages />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);