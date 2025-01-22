import { Pagination } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useState } from 'react'
import './table.scss'

const Table = ({ rows, columns }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 3

    const paginateItems = (items) => {
        const startIndex = (currentPage - 1) * itemsPerPage
        return items.slice(startIndex, startIndex + itemsPerPage)
    }
    const totalPages = Math.ceil(rows.length / itemsPerPage)

    return (
        <div className='table'>
           <DataGrid
                   rows={paginateItems(rows)}
                   columns={columns}
                   pageSize={itemsPerPage}
                   getRowId={(row) => row.id}
                   disablePagination
                   checkboxSelection
                   disableRowSelectionOnClick
                   
                 />
           
                 <div className=" my-2 d-flex justify-content-center">
                   <Pagination
                     count={totalPages}
                     page={currentPage}
                     onChange={(event, value) => setCurrentPage(value)}
                     shape="rounded"
                   />
                 </div>

        </div>

    )
}

export default Table