import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

import './index.scss';

const Nav = styled.nav`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1; 
  left: -200px;
  background-color: rgba(42, 159, 212, 0.65); 
  color: aliceblue; 
  overflow-x: 0 ; 
  margin-top: 0px;
  transition: .5s;
`;

const Sidebar = (props) => {
  const { visible, toggle, menuData } = props;
  const history = useHistory();

  return (
      <Nav 
        role="navigation" 
        style={ visible ?  { left: '0' } : { left: '-200px' } }
        onClick={() => toggle()}
      >
        <div id="sidebar-toggle"
        >
          <div id="sidebar-menu" >
            {menuData.map((item, index) =>
              <div key={index} onClick={() => history.push(item.path)} className="sidebar-row">
                <label className="sidebar-icon">{item.icon}</label>
                <label className="sidebar-title">{item.title}</label>
              </div>
            )}
          </div>
        </div>
        </Nav>
  );
};

export default Sidebar;
