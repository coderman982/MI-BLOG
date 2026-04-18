import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
        <App />
    </AppProvider>
  </BrowserRouter>,
)
//src/main.jsx: This is the "kickoff" file. It imports React and your App component, 
// then tells React to render everything inside that #root div in index.html. It's like the ignition key for your app.
//In short: HTML provides the page, main.jsx launches React, and App.jsx is your app's content. Vite bundles them all together for fast development