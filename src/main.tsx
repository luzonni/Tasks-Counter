import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesApp from './Routes'
import ResetComponent from './reset'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetComponent/>
    <RoutesApp />
  </StrictMode>,
)
