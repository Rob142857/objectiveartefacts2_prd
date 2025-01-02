// filepath: /src/main.tsx
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import App from './App';
import { msalConfig } from './authConfig';
import Store from './pages/Store';

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <MsalProvider instance={msalInstance}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  </MsalProvider>,
  document.getElementById('root')
);