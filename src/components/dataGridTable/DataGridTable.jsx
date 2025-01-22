import React, { useState, useEffect } from 'react';
import './dataGridTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Pagination from '@mui/material/Pagination';
import { reportsColumns, reportsRows } from '../../dataGridTable';


const DataGridTable = ({ setSelectedRow, rows, setRows }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const savedRows = JSON.parse(localStorage.getItem('reports'));

    if (savedRows && savedRows.length > 0) {
      setRows(savedRows);
    } else {
      const initialRows = [...reportsRows];
      localStorage.setItem('reports', JSON.stringify(initialRows));
      setRows(initialRows);
    }
  }, []);

  const paginateItems = (items) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(rows.length / itemsPerPage);
  
  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);

    const reindexedRows = updatedRows.map((row, index) => ({
      ...row,
      id: index + 1,
    }));

    localStorage.setItem('reports', JSON.stringify(reindexedRows));
    setRows(reindexedRows);
  };

  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    flex: 1,
    renderCell: (params) => (
      <div className="actionBtn d-flex align-items-center gap-3 h-100">
        <EditOutlinedIcon
          className="text-primary edit btn btn-link p-0"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setSelectedRow(params.row)} />
        <DeleteOutlineOutlinedIcon
          className="text-danger delete"
          onClick={() => handleDelete(params.id)} />
      </div>
    ),
  };

  return (
    <div className="dataGridTable">
      <DataGrid
        rows={paginateItems(rows)}
        columns={reportsColumns.concat(actionColumn)}
        pageSize={itemsPerPage}
        getRowId={(row) => row.id}
        disablePagination
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ border: '0', fontSize: '0.9rem' }}
      />

      <div className="mt-3 d-flex justify-content-center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          shape="rounded"
          className="mb-3"
        />
      </div>
    </div>
  );
};

export default DataGridTable;
