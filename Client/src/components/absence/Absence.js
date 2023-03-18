import React from "react";
import { columnDefs, defaultColDef } from "../helper/absences.helper";
import { Table } from "../common/table";
import { Heading2 } from "../_styles_";
const Absence = ({ data }) => {
  return (
    <>
      <Heading2>Total Absences: {data.length} </Heading2>
      <Table
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={data}
      />
    </>
  );
};

export default Absence;
