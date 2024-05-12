import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import '../global.scss';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider>
        <Notifications />
          <App />
        </MantineProvider>    
      </BrowserRouter>      
    </Provider>
  </React.StrictMode>,
)
