import React from 'react';
// import ReactDOM from 'react-dom/client'; // react v18 버전용
import ReactDOM from 'react-dom';  // react v17 버전용
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme ({
  typography: {
    fontFamily: '"Noto Sans KR", serif',
  }
});

// react v 18 버전 용
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
//         <App />
//   </React.StrictMode>
// );

// react v 17 버전용
ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
