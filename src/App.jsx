import SideBar from "./components/sidebar";
import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { siteMapJSON } from "./siteMapJSON";
import { FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";

const TopBar = styled.nav`
  display: flex;
  width: 100%;
  height: 44px;
  background-color: #f3ce56;
`;
const ToggleIcon = styled.div`
  display: inline;
  margin: 0.4em;
  color: rgba(57, 57, 160, 0.76);
`;
const AppTitle = styled.div`
  display: inline;
  margin: 0.4em;
  font-size: 1.5em;
`;

const Appmain = styled.div`
  text-align: center;
  margin-top: 42px;
  height: 500px;
`;

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <TopBar>
        <ToggleIcon onClick={() => setVisible(!visible)}>
          { visible ? <FiX size={32}/> : <FiMenu size={32} />}
        </ToggleIcon>
        <AppTitle>Simple side menu demo</AppTitle>
      </TopBar>

      <Router>
        <SideBar
          visible={visible}
          menuData={siteMapJSON}
          toggle={() => setVisible(!visible)}
        />
        <Appmain>
          <Switch>
            {siteMapJSON.map(({ path, exact, component }, key) => (
              <Route
                key={key}
                exact={exact}
                path={path}
                component={component}
              />
            ))}
          </Switch>
        </Appmain>
      </Router>
    </>
  );
}

export default App;
