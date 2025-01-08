import './navbar.scss'
import notifications from '../../assets/icons/notifications.png';
import user2 from '../../assets/icons/user2.png';
import React, { useRef, useEffect, useContext } from 'react';
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';

const Navbar = () => {
    const elementRef = useRef();
    const { setNavbarHeight } = useContext(NavbarHeightContext);

    useEffect(() => {
        const updateHeight = () => {
            if (elementRef.current) {
                setNavbarHeight(elementRef.current.offsetHeight);
            }
        };

        updateHeight();

        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [setNavbarHeight]);
    return (

        <nav class="navbar p-3" ref={elementRef}>
            <div class="container-fluid">
                <a class="navbar-brand fs-4" href='#'>Items</a>
                <div className='col-3 mt-1 left d-flex gap-4 justify-content-end align-items-center'>
                    <div className='notifications'>
                        <span></span>
                        <img src={notifications} alt="Notifications Icon" width="22px" />
                    </div>
                    <div className='user bg-dark-subtle'>
                        <img src={user2} alt="User Icon" width="22px" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
