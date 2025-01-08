import React, { useState } from 'react';
import { Nav, Offcanvas, Button, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import dashboard from '../../assets/icons/dashboard.png';
import report from '../../assets/icons/report.png';
import item from '../../assets/icons/item.png';
import user from '../../assets/icons/user.png';
import order from '../../assets/icons/order.png';
import account from '../../assets/icons/account.png';
import logout from '../../assets/icons/logout.png';
import './sidebar.scss'

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const routs = {
    dashboard: '/',
    items: '/items'
  }

  const toggleSidebar = () => setShow(!show);

  return (
    <div>
      <Button className="d-lg-none d-flex align-items-center ps-4 btnToggle" onClick={toggleSidebar}>
        <FaBars />
      </Button>

      <Offcanvas show={show} onHide={toggleSidebar} placement="start" className="d-lg-none">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <div className="d-flex flex-column h-100 sidebar">
            <div className="logo-section p-3 mb-4">
              <h4 className='mb-0'>Rosette</h4>
            </div>

            <div className="links-section flex-grow-1">
              <Nav defaultActiveKey="/" className="links-section-nav flex-column gap-5 fs-3">

                <Nav.Link as={NavLink} to={routs.dashboard} >
                  <img src={dashboard} alt="Dashboard Icon" width="24px" className="me-3 " />
                  <p className="mb-0">Dashboard</p>
                </Nav.Link>

                <Nav.Link href="#features">
                  <img src={report} alt="Dashboard Icon" width='24px' className="me-3" />
                  <p className="mb-0">Reports</p>
                </Nav.Link>

                <Nav.Link as={NavLink} to={routs.items}>
                  <img src={item} alt="Items Icon" width='24px' className="me-3" />
                  <p className="mb-0">Items</p>
                </Nav.Link>

                <Nav.Link href="#pricing">
                  <img src={user} alt="Users Icon" width='24px' className="me-3" />
                  <p className="mb-0">Users</p>
                </Nav.Link>

                <Nav.Link href="#pricing">
                  <img src={order} alt="Orders Icon" width='24px' className="me-3" />
                  <p className="mb-0">Orders</p>
                </Nav.Link>

                <Nav.Link href="#pricing">
                  <img src={account} alt="Account Icon" width='24px' className="me-3" />
                  <p className="mb-0">My Account</p>
                </Nav.Link>

              </Nav>
            </div>

            <div className="logout-section p-3 position-absolute bottom-0">
              <Nav defaultActiveKey="/" className="flex-column gap-4">
                <Nav.Link href="#home" >
                  <img src={logout} alt="Logout Icon" width="24px" className="me-2" />
                  <p className="mb-0">Logout</p>
                </Nav.Link>
              </Nav>
            </div>

          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="d-none d-lg-block sidebar" style={{
        width: '230px',
        position: 'fixed',
        top: '0',
        left: '0',
        height: '100vh'
      }}>

        <div className="logo-section p-2">
          <h4 className='mb-0 mt-1'>Rosette</h4>
        </div>

        <div className="links-section flex-grow-1 p-3">
          <Nav defaultActiveKey="/" className="flex-column gap-4  mt-4">

            <Nav.Link as={NavLink} to={routs.dashboard} >
              <img src={dashboard} alt="Dashboard Icon" width="24px" className="me-3" />
              <p className="mb-0">Dashboard</p>
            </Nav.Link>

            <Nav.Link href="#features">
              <img src={report} alt="Dashboard Icon" width='24px' className="me-3" />
              <p className="mb-0">Reports</p>
            </Nav.Link>

            <Nav.Link as={NavLink} to={routs.items}>
              <img src={item} alt="Items Icon" width='24px' className="me-3" />
              <p className="mb-0">Items</p>
            </Nav.Link>

            <Nav.Link href="#pricing">
              <img src={user} alt="Users Icon" width='24px' className="me-3" />
              <p className="mb-0">Users</p>
            </Nav.Link>

            <Nav.Link href="#pricing">
              <img src={order} alt="Orders Icon" width='24px' className="me-3" />
              <p className="mb-0">Orders</p>
            </Nav.Link>

            <Nav.Link href="#pricing">
              <img src={account} alt="Account Icon" width='24px' className="me-3" />
              <p className="mb-0">My Account</p>
            </Nav.Link>

          </Nav>
        </div>

        <div className="logout-section p-3 position-absolute bottom-0">
          <Nav defaultActiveKey="/" className="flex-column gap-4">
            <Nav.Link href="#home" >
              <img src={logout} alt="Logout Icon" width="24px" className="me-2" />
              <p className="mb-0">Logout</p>
            </Nav.Link>
          </Nav>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;
