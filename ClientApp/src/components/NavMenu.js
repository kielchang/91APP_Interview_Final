import React, { useState } from "react";
import { Container, Menu, Responsive, Segment, Sidebar, Visibility, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { LoginMenu } from "./api-authorization/LoginMenu";

const MenuItems = () => (
  <>
    <Menu.Item as={Link} to="/">
      Home
    </Menu.Item>
    <Menu.Item as={Link} to="/OrderList">
      Order List
    </Menu.Item>
    <Menu.Item as={Link} to="/ShippedOrderList">
      ShippedOrder List
    </Menu.Item>
  </>
);

const DesktopContainer = ({ children }) => {
  const [fixed, setFixedMenu] = useState(false);

  const hideFixedMenu = () => setFixedMenu(false);
  const showFixedMenu = () => setFixedMenu(true);

  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility once={false} onBottomPassed={showFixedMenu} onBottomPassedReverse={hideFixedMenu}>
        <Segment inverted textAlign="center" vertical>
          <Menu fixed={fixed ? "top" : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
            <Container>
              <MenuItems />
              <Menu.Menu position="right">
                <LoginMenu />
              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  );
};

const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true);

  return (
    <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Sidebar as={Menu} animation="push" inverted onHide={handleSidebarHide} vertical visible={sidebarOpened}>
        <MenuItems />
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment inverted textAlign="center" vertical>
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Menu position="right">
                <LoginMenu />
              </Menu.Menu>
            </Menu>
          </Container>
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
};

export const NavMenu = ({ children }) => {
  return (
    <>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </>
  );
};
