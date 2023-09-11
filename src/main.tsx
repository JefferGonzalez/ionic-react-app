import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './context/ThemeProvider'
import './main.css'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
