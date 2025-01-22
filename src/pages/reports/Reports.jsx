import React, { useContext, useState } from 'react';
import './reports.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import DataGridTable from '../../components/dataGridTable/DataGridTable';
import Modal from '../../components/modals/reports/Modal';
import { reportsRows } from '../../dataGridTable';

const Reports = () => {
    const { navbarHeight = 0 } = useContext(NavbarHeightContext);
    const [selectedRow, setSelectedRow] = useState(null);
    const [rows, setRows] = useState(reportsRows);

    return (
        <div className='reports'>
            <div className='wrapper'>
                <div className='sidebarContainer'>
                    <Sidebar />
                </div>
                <div className='navbarContainer'>
                    <Navbar />
                </div>
                <div className='content py-3' style={{ marginTop: `${navbarHeight + 12}px` }}>
                    <DataGridTable setSelectedRow={setSelectedRow} rows={rows} setRows={setRows} />
                </div>
                <Modal
                    id="exampleModal"
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                    rows={rows}
                    setRows={setRows}
                />
            </div>
        </div>
    );
};

export default Reports;
