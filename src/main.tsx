import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './services/routes'
import { Provider } from 'react-redux'
import { store } from './services/store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>
)
