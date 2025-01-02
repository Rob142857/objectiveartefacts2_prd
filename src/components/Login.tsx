// filepath: /src/components/Login.tsx
import React from 'react';
import { useMsal } from '@azure/msal-react';

const Login: React.FC = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup().catch(e => {
      console.error(e);
    });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;