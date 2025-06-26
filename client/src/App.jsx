import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainPage from "./pages/MainPage"
import './App.css'
import AddNote from "./pages/AddNote"
import EditNote from "./pages/EditNote"

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,

    },
    {
      path: 'add-note',
      element: <AddNote />
    },
    {
      path: '/edit-note/:noteId',
      element: <EditNote />
    }
  ])
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  )
}

export default App
