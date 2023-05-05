import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Generic/reset.css'
import './Styles/Elements/base.css'
import './Styles/Settings/colors.css'
import './Styles/Fonts/fonts.css'
import App from './App';

// const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: <Login/>,
//   },
//   {
//     path: '/Home',
//     element: <Home/>
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

