import { CssBaseline } from "@mui/material";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { UserDataProvider } from './api/context/userData.tsx';
import { FacilityProvider } from './api/context/facility.tsx';
import { LandmarkProvider } from "./api/context/landmark.tsx";
import { ToolProvider } from "./api/context/tools.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <UserDataProvider>
      <FacilityProvider>
        <LandmarkProvider>
          <ToolProvider>
            <App />
          </ToolProvider>
        </LandmarkProvider>
      </FacilityProvider>
    </UserDataProvider>
  </StrictMode>,
);