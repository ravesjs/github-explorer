import React from 'react'
import { RouterProvider, createRoutesView } from 'atomic-router-react'
import { router, routes } from '@/shared/config/routing'
//import Thing from '@/entities/thing' пример импорта по fsd


const RoutesView = createRoutesView({
  routes: [
    {route: routes.home, view: HomePage, layout: Layout},
    {route: routes.favorites, view: FavoritesPage, layout: Layout},
  ],
  otherwise() {
    return <div>Page not found!</div>;
  },
})

const App = () => (
  <RouterProvider router={router}>
    <RoutesView />
  </RouterProvider>
)

export default App