import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SessionContextProvider} from "@supabase/auth-helpers-react";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient("https://kbllebjbizmlejtzzyou.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtibGxlYmpiaXptbGVqdHp6eW91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4MTE0MDgsImV4cCI6MjA0MDM4NzQwOH0.dI1uAJhacLJ_mDXwxm70z2ckJoR4N6elmhwLwaMCSBk")

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
