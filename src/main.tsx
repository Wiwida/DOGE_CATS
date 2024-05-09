import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import '../global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <App />
      </MantineProvider>    
    </BrowserRouter>
  </React.StrictMode>,
)
