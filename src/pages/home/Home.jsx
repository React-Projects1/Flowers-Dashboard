import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
    return (
        <div className='home'>
            <div className="wrapper">
                <div className="sidebarContainer">
                    <Sidebar />
                </div>
                <div className="navbarContainer">
                    <Navbar />
                </div>
                <div className="content ps-4">
                    Home Page 
                </div>
            </div>
        </div>
    )
}

export default Home
