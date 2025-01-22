export const reportsRows = [
    {
        id: 1, productName: 'Lavender', dateOfCreation: '22-08-2024',
        price: '$5', customerId: '101', notes: 'Popular for relaxation'
    },
    {
        id: 2, productName: 'Rose', dateOfCreation: '23-08-2024',
        price: '$12', customerId: '102', notes: 'Best seller'
    },
    {
        id: 3, productName: 'Tulip', dateOfCreation: '24-08-2024',
        price: '$8', customerId: '103', notes: 'Seasonal product'
    },
    {
        id: 4, productName: 'Daisy', dateOfCreation: '25-08-2024',
        price: '$7', customerId: '104', notes: 'New arrival'
    },
    {
        id: 5, productName: 'Orchid', dateOfCreation: '26-08-2024',
        price: '$15', customerId: '105', notes: 'Limited stock'
    },
    {
        id: 6, productName: 'Sunflower', dateOfCreation: '27-08-2024',
        price: '$6', customerId: '106', notes: 'Bright and cheerful'
    },
    {
        id: 7, productName: 'Carnation', dateOfCreation: '28-08-2024',
        price: '$9', customerId: '107', notes: 'Great for gifts'
    },
    {
        id: 8, productName: 'Lilac', dateOfCreation: '29-08-2024',
        price: '$11', customerId: '108', notes: 'Sweet fragrance'
    },
    {
        id: 9, productName: 'Peony', dateOfCreation: '30-08-2024',
        price: '$14', customerId: '109', notes: 'Elegant choice'
    },
    {
        id: 10, productName: 'Jasmine', dateOfCreation: '31-08-2024',
        price: '$10', customerId: '110', notes: 'Classic and timeless'
    },
    {
        id: 11, productName: 'Chrysanthemum', dateOfCreation: '01-09-2024',
        price: '$8', customerId: '111', notes: 'Symbol of optimism'
    },
    {
        id: 12, productName: 'Hydrangea', dateOfCreation: '02-09-2024',
        price: '$13', customerId: '112', notes: 'Perfect for bouquets'
    },
    {
        id: 13, productName: 'Marigold', dateOfCreation: '03-09-2024',
        price: '$4', customerId: '113', notes: 'Affordable and vibrant'
    },
    {
        id: 14, productName: 'Lotus', dateOfCreation: '04-09-2024',
        price: '$18', customerId: '114', notes: 'Sacred and serene'
    },
    {
        id: 15, productName: 'Hibiscus', dateOfCreation: '05-09-2024',
        price: '$7', customerId: '115', notes: 'Tropical vibes'
    },
];

export const reportsColumns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'productName', headerName: 'Product Name', flex: 1 },
    { field: 'dateOfCreation', headerName: 'Date of Creation', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'customerId', headerName: 'Customer ID', flex: 1 },
    { field: 'notes', headerName: 'Notes', flex: 1 },
];

export const usersColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

export const usersRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];