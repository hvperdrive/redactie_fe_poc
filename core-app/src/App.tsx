import React, { FC, useEffect, useState } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { core } from './core.class';

import logo from './logo.svg';

declare global {
  interface Window {
    CORE: any;
  }
}

const App: FC = () => {
  // INIT CORE
  window.CORE = core;

  const [modulesLoaded, setModulesLoaded] = useState(false);

  // Get modules config from server
  const modulesConfig = [{
    jsPath: `${process.env.PUBLIC_URL}/module.js`,
    machineName: 'external-module',
    navigationLabel: 'external-module',
  },
  {
    jsPath: `${process.env.PUBLIC_URL}/module-2.js`,
    machineName: 'external-module-2',
    navigationLabel: 'external-module-2',
  }];

  useEffect(() => {
    core.loadModules(modulesConfig).then(() => {
      setModulesLoaded(true);
    });

  }, [modulesLoaded, modulesConfig])


  // Optionally create computed properties from CoreApi modules
  // or expose an additional method for:
  // - navigation items
  // f.e.: [{ label: 'Module name', to: '/path-to-module' }, ...]
  // - routes
  // f.e.: [{ component: ModuleRouteComponent, path: '/path-to-module' }, ...]

  const renderRoutes = () => {
    return modulesConfig.map((moduleConfig, index) => {

      const component = core.getModuleAPI(moduleConfig.machineName).mainRouteComponent;
      const path = `/${moduleConfig.machineName}`;

      if (component) {
        return <Route key={index} component={component} path={path} />
      }

      return null;
    })
  }

  const renderNavigationItems = () => {
    return modulesConfig.map((moduleConfig, index) => {

      const label = moduleConfig.navigationLabel;
      const path = `/${moduleConfig.machineName}`;

      if (path) {
        return <Link key={index} to={path}>{label}</Link>
      }

      return null;
    })
  }

  return (
    <Router>
      <div className="redactie-poc">
        <div className="redactie-poc__sidebar">
          <header>
            <Link to="/">
              <img src={logo} alt="logo" />
              <span>Redactie (poc)</span>
            </Link>
          </header>
          <nav>
            {/* Render navigation items */}
            {/* Using react-router-dom's <Link /> component):
              navigationItems.map(({ label, to }) => <Link to={to}>{label}</Link>)
            */}
            { modulesLoaded && renderNavigationItems() }
          </nav>
        </div>
        <div className="redactie-poc__main">
          <h1>Welkom!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui sequi commodi libero veniam.
            Exercitationem, officia quam soluta nemo dignissimos ab obcaecati consectetur autem itaque
            iusto aut. Ducimus dolores ipsa culpa.
          </p>
          <Switch>
            {/* Render routes */}
            {/* Render navigation items */}
            {/* Using react-router-dom's <Route /> component):
              routes.map(({ component, path }) => <Route component={component} path={path} />);
            */}
            { modulesLoaded && renderRoutes() }
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
