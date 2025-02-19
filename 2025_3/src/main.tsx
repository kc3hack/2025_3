import { CssBaseline } from "@mui/material";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { UserDataProvider } from './api/context/userData';
import { FacilityProvider } from './api/context/facility.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <UserDataProvider>
      <FacilityProvider>
      <App />
      </FacilityProvider>
    </UserDataProvider>
  </StrictMode>,
);
