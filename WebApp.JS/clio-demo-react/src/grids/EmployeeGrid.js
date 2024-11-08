import React from "react";

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import {useState, useRef, useEffect } from 'react';

import { config }    from "../Config";
import { employeeCols }    from "./ColumnDefs";

const EmployeeGrid = () => {

   const [deals, setDeals] = useState();

   const fetchDeals = () => {
        fetch(config.baseAddress + 'employee/')
        .then(rsp => rsp.json()) 
        .then(deals => setDeals(deals)) 
  };
  useEffect(() => fetchDeals(), []);

  const gridRef = useRef();
  const rowHeight=30;
  
  return (
    <div className="ag-theme-quartz" style={{ margin: 0, width: '100', height: 600 }}>
        <AgGridReact 
            ref={gridRef}
            rowData={deals} 
            columnDefs={employeeCols}
            animateRows={true} 
            rowHeight={rowHeight}
        />
    </div>
  );
};
export default EmployeeGrid;