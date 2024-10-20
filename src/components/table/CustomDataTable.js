import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const CustomDataTable = ({ columns, data, customStyles, title }) => {
  const [selectedColumns, setSelectedColumns] = useState(columns.map(col => col.selector)); // Initialize with all columns selected
  const [pageNumber, setPageNumber] = useState(1); // Initialize page number
  const [rowsPerPage, setRowsPerPage] = useState(10); // Default rows per page

  // Filter columns based on selection
  const filteredColumns = columns.filter(col => selectedColumns.includes(col.selector));

  // Handle column selection change
  const handleColumnChange = (event) => {
    const { value, checked } = event.target;

    // Prevent unchecking all columns
    if (checked) {
      setSelectedColumns(prev => [...prev, value]);
    } else {
      // Ensure at least one column remains checked
      if (selectedColumns.length > 1) {
        setSelectedColumns(prev => prev.filter(col => col !== value));
      }
    }
  };

  // Handle page number input change
  const handlePageChange = (event) => {
    const newPage = Number(event.target.value);
    const totalPages = Math.ceil(data.length / rowsPerPage);
    
    // Set page number only if it's within bounds
    if (newPage > 0 && newPage <= totalPages) {
      setPageNumber(newPage);
    } else {
      // Reset to the last page if out of bounds
      setPageNumber(totalPages);
    }
  };

  // Handle jump to page action
  const goToPage = () => {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    
    // Ensure the page number is within bounds
    if (pageNumber < 1) {
      setPageNumber(1);
    } else if (pageNumber > totalPages) {
      setPageNumber(totalPages);
    }
    // Log the page number
    console.log(`Going to page: ${pageNumber}`);
  };

  // Calculate the data to display based on current page and rows per page
  const displayedData = data.slice((pageNumber - 1) * rowsPerPage, pageNumber * rowsPerPage);

  return (
    <div>
      {/* Column Selection */}
      <div style={{ marginBottom: '20px' }}>
        <h4>Select Columns:</h4>
        {columns.map(col => (
          <label key={col.selector}>
            <input
              type="checkbox"
              checked={selectedColumns.includes(col.selector)}
              value={col.selector}
              onChange={handleColumnChange}
            />
            {col.name}
          </label>
        ))}
      </div>

      {/* Jump to Page */}
      <div style={{ marginBottom: '20px' }}>
        <h4>Jump to Page:</h4>
        <input
          type="number"
          value={pageNumber}
          onChange={handlePageChange}
          min={1}
          placeholder="Page number"
        />
        <button onClick={goToPage}>Go</button>
      </div>

      <DataTable
        title={title}
        columns={filteredColumns}
        data={displayedData} // Use the sliced data for display
        customStyles={customStyles}
        pagination
        paginationPerPage={rowsPerPage}
        paginationRowsPerPageOptions={[5, 10, 20]}
        noDataComponent="Sorry, no matching records found"
        highlightOnHover
        pointerOnHover
      />
    </div>
  );
};

export default CustomDataTable;