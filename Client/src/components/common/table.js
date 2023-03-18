import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { TableWrapper } from "../_styles_";

export const Table = ({ columnDefs, rowData, defaultColDef }) => {
  return (
    <>
      <TableWrapper className="ag-theme-alpine">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
        />
      </TableWrapper>
    </>
  );
};
