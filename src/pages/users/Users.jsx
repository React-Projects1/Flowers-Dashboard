import React, { useContext } from 'react'
import './users.scss'
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import {usersColumns, usersRows} from '../../dataGridTable'
import Table from '../../components/table/Table';


const Users = () => {
  const { navbarHeight = 0 } = useContext(NavbarHeightContext);

  return (
    <div>
      <div className='wrapper'>
        <div className='sidebarContainer'>
          <Sidebar />
        </div>
        <div className='navbarContainer'>
          <Navbar />
        </div>
        <div className='content py-3' style={{ marginTop: `${navbarHeight + 12}px` }}>
          <Table rows={usersRows} columns={usersColumns}/>
        </div>
      </div>
    </div>
  )
}

export default Users
