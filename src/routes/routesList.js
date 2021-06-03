import TodoPage from '@pages/Todo/TodoPage';
import Home from '@pages/Home/Home';
import SignIn from '@pages/SignIn/SignIn';
import Page404 from '@pages/Errors/E404';

const routes = [
  {
    name: 'home',
    displayName: 'Главная',
    url: '/',
    component: Home,
    protected: false,
    roles: ['*'],
    exact: true,
  },
  {
    name: 'login',
    displayName: 'Войти',
    url: '/login',
    component: SignIn,
    protected: false,
    roles: ['*'],
    exact: true,
  },
  {
    name: 'todo',
    displayName: 'Задача',
    url: '/todos/:id',
    component: null,
    protected: true,
    roles: ['executor', 'controller', 'admin'],
    exact: true,
  },
  {
    name: 'todos',
    displayName: 'Список задач',
    url: '/todos',
    component: TodoPage,
    protected: true,
    roles1: ['executor', 'controller', 'admin'],
    roles: ['*'],
    exact: true,
  },
  {
    name: '404',
    displayName: 'Page Not Found',
    url: '/404',
    component: Page404,
    protected: false,
    roles: ['*'],
    exact: true,
  },
  // {
  //   url: '**',
  //   component: Page404,
  //   protected: false,
  //   roles: ['*'],
  // },
];

export default routes;
