import React, { FC } from 'react';
import { Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import logo from './logo.svg';

const App: FC = () => {
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
