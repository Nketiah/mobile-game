import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"
import { MantineProvider } from '@mantine/core'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider
       theme={{
        //  colors:{
        //     brand: ["#f5e7fd","#ebcffc","#e1b7fa","#d6a0f8","#cc88f7","#c270f5","#b858f3","#ae40f2","#a428f0","#a020f0"]
        //  },
        //  primaryColor: 'brand',
       }}
      
       withGlobalStyles 
       withNormalizeCSS 
       withCSSVariables>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
