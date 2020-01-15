import React, { FC } from 'react';
import { Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import logo from './logo.svg';

const App: FC = () => {
  // Optionally create computed properties from CoreApi modules
  // or expose an additional method for:
  // - navigation items
  // f.e.: [{ label: 'Module name', to: '/path-to-module' }, ...]
  // - routes
  // f.e.: [{ component: ModuleRouteComponent, path: '/path-to-module' }, ...]

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
