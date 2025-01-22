import React from 'react';
import './modal.scss';

const Modal = ({ id, selectedRow, setSelectedRow, rows, setRows }) => {
    const handleSave = () => {
        if (!selectedRow || !selectedRow.productName) {
            alert('Please fill in all required fields.');
            return;
        }
    
        const updatedRows = rows.map((row) =>
            row.id === selectedRow.id ? selectedRow : row
        );
        setRows(updatedRows);
        localStorage.setItem('reports', JSON.stringify(updatedRows));
        setSelectedRow(null);
    };

    return (
        <div className="modal fade" id={id} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog bg-white">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Data</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body px-3">
                        <form className="row">
                            <div className="col-6 mb-3">
                                <label htmlFor="productName" className="col-form-label">Product Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    value={selectedRow?.productName || ''}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, productName: e.target.value })
                                    } />
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="dateOfCreation" className="col-form-label">
                                    Date of Creation:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dateOfCreation"
                                    value={selectedRow?.dateOfCreation || ''}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, dateOfCreation: e.target.value })
                                    } />
                            </div>

                            <div className="col-6 mb-3">
                                <label htmlFor="price" className="col-form-label">Price:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    value={selectedRow?.price || ''}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, price: e.target.value })
                                    } />
                            </div>
                            <div className="col-6 mb-3">
                                <label htmlFor="customerId" className="col-form-label">Customer ID:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="customerId"
                                    value={selectedRow?.customerId || ''}
                                    onChange={(e) =>
                                        setSelectedRow({ ...selectedRow, customerId: e.target.value })
                                    } />
                            </div>
                            <div className="col-12 mb-3">
                                <label htmlFor="notes" className="col-form-label">Notes:</label>
                                <textarea class="form-control" id="notes"
                                    value={selectedRow?.notes || ''}
                                    onChange={(e) => setSelectedRow
                                        ({ ...selectedRow, notes: e.target.value })}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn save" onClick={handleSave}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
