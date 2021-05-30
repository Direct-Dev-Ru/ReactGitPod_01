/* eslint-disable operator-linebreak */
/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './routesList';

function intersect(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  const intersection = new Set([...setA].filter((x) => setB.has(x)));
  return Array.from(intersection);
}

const calculateActualRoutes = (isAuth, user) => {
  return routes.filter((route) => {
    if (isAuth) {
      const rolesRequired = route?.roles ?? [];
      const rolesPresented = user?.roles ?? [];
      if (!user) {
        return rolesRequired.includes('*');
      }
      const intersectOfRoles = intersect(rolesRequired, rolesPresented) ?? [];

      return intersectOfRoles.length > 0;
    }
    return route.protected === false;
  });
};

const getRoutesMap = (isAuth, user) => {
  const actualRoutes = calculateActualRoutes(isAuth, user);
  const routesMap = [];
  actualRoutes.forEach((route) => {
    // eslint-disable-next-line no-prototype-builtins
    if (route.hasOwnProperty('name')) {
      routesMap[route.name] = route.url;
    }
  });
  return routesMap;
};

const getRouteByName = (name) => {
  const route =
    routes.find((r) => r.name === name) || routes.find((r) => r.name === '404');
  return route;
};

const getActualNamedRoutes = (isAuth, user) => {
  const actualRoutes = calculateActualRoutes(isAuth, user);
  const actualNamedRoutes = [];

  actualRoutes.forEach((route) => {
    // eslint-disable-next-line no-prototype-builtins
    if (route.hasOwnProperty('name')) {
      actualNamedRoutes.push({
        name: route.name,
        to: route.url,
        display: route.displayName,
      });
    }
  });
  return actualNamedRoutes;
};

const RouterComponents = ({ isAuth, user }) => {
  const actualRoutes = calculateActualRoutes(isAuth, user);
  // console.log(actualRoutes);
  return (
    <>
      <Switch>
        {actualRoutes.map((route) => (
          <Route
            path={route.url}
            component={route.component}
            exact={route.exact}
            key={route.url}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export { RouterComponents, getRoutesMap, getActualNamedRoutes, getRouteByName };
