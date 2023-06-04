import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {QueryClient, QueryClientProvider} from 'react-query'
import './css/main.scss'
import {ContextProvider} from './context'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
      <ContextProvider>
          <QueryClientProvider client={queryClient}>
              <App />
          </QueryClientProvider>
      </ContextProvider>
  </React.StrictMode>
)
