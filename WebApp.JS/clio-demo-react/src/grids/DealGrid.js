import React from "react";

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import {useState, useRef, useEffect } from 'react';

import { config }    from "../Config";
import { dealColsShort }    from "./ColumnDefs";

const DealGrid = (props) => {

   const [deals, setDeals] = useState();

   const fetchDeals = () => {
    if (props.selectedRow !== undefined) {
        fetch(config.baseAddress + 'deal/' + props.selectedRow.orderID)
        .then(rsp => rsp.json()) 
        .then(deals => setDeals(deals)) 
    }  
  };
  useEffect(() => fetchDeals(), [props.selectedRow]);

  const gridRef = useRef();
  const rowHeight=30;
  
  return (
    <div className="ag-theme-quartz" style={{ margin: 0, width: '100', height: 200 }}>
        <AgGridReact 
            ref={gridRef}
            rowData={deals} 
            columnDefs={dealColsShort}
            animateRows={true} 
            rowHeight={rowHeight}
        />
    </div>//
  );
};
export { DealGrid };