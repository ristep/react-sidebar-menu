import React from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

const Nav = styled.nav`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  left: -200px;
  background-color: rgba(42, 159, 212, 0.65);
  color: aliceblue;
  overflow-x: 0;
  margin-top: 0px;
  transition: 0.3s;
  ${(props) =>
    props.visible
      ? css`
          left: 0;
        `
      : css`
          left: -200px;
        `};
`;

const SidebarMenu = styled.div``;

const SidebarRow = styled.div`
  width: 92%;
  padding: 0.5em;
  text-align: left;
  height: auto;
  vertical-align: middle;
  &:hover {
    background-color: #36a7e7;
    color: white;
    border-radius: 0.2em;
    box-shadow: 1px 2px 5px 1px rgba(0, 19, 0, 0.75);
  }
`;

const SidebarIcon = styled.label`
  padding: 0.5em;
  color: rgba(57, 57, 160, 0.76);
`;

const SidebarTitle = styled.label`
  padding: 0.5em;
`;

const Sidebar = (props) => {
  const { visible, toggle, menuData, autohide } = props;
  const history = useHistory();

  return (
    <Nav role="navigation" visible={visible} onClick={() => autohide && toggle() }>
      <SidebarMenu>
        {menuData.map((item, index) => (
          <SidebarRow key={index} onClick={() => history.push(item.path)}>
            <SidebarIcon className="sidebar-icon">{item.icon}</SidebarIcon>
            <SidebarTitle className="sidebar-title">{item.title}</SidebarTitle>
          </SidebarRow>
        ))}
      </SidebarMenu>
    </Nav>
  );
};

export default Sidebar;
