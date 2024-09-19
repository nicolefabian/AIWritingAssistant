import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import logo from "./images/ailogo.png";
import {PrivyProvider} from '@privy-io/react-auth';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cm13ii5sk02hhl00ct206zvno"
      config={{
        // Display email and wallet as login methods
        loginMethods: ['email', 'wallet', 'google', 'github', 'twitter'],
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: logo,
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);