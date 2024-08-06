import React from 'react'
import { RouterProvider, createRoutesView } from 'atomic-router-react'
import { router, routes } from '@shared/config/routing'
import HomePage from '@pages/home'

const RoutesView = createRoutesView({
  routes: [
    { route: routes.home, view: HomePage }
  ],
  otherwise() {
    return <div>Page not found!</div>
  },
})

const App = () => (
  <RouterProvider router={router}>
    <RoutesView />
  </RouterProvider>
)

export default App
