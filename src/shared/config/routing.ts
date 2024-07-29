import { createHistoryRouter, createRoute, createRouterControls } from 'atomic-router'
import { createBrowserHistory } from 'history'
import { appStarted } from './init'
import { sample } from 'effector'

export const routes = {
	home: createRoute()
	// sections: {
  //  overview: createRoute(),
  //  users: createRoute<{ accountId: string }>(), 
	// },
}

export const controls = createRouterControls()
export const router = createHistoryRouter({
	routes: [
		{
			path: '/',
			route: routes.home  // можно создать динамический роут, в "routes" вложеннее сделать и массивом route: [routes.home, section.users]
		},
	],
	controls,
})

sample({
	clock: appStarted,
	fn: () => createBrowserHistory(),
	target: router.setHistory,
})

// метод watch только для логов