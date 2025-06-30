import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogInPage from './pages/LogInPage'
import { HomePage } from './pages/HomePage'


function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: "/log-in",
      element: <LogInPage />
    }
  ])
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  )
}

export default App
