import SideBar from './sidebar-menu';
import { useState } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { siteMapJSON } from './siteMapJSON';
import { GiHamburgerMenu } from 'react-icons/gi';

import './App.scss';

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <Router>
        <div className="naviTop">
          <GiHamburgerMenu onClick={() => setVisible(!visible)}>Toggle Sidebar</GiHamburgerMenu>
        </div>
        <SideBar visible={visible} menuData={siteMapJSON} toggle={() => setVisible(!visible)} />
        <Switch>
          {siteMapJSON.map(({ path, exact, component }, key) =>
            <Route exact={exact} path={path} component={component} key={key} />
          )}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
