import React from "react";

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import {useState, useRef, useEffect } from 'react';

import { config }    from "../Config";
import { dealColsLong }    from "./ColumnDefs";

const DealFullGrid = (props) => {

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
  const rowHeight=60;
  
  return (
    <div className="ag-theme-quartz" style={{ margin: 0, width: '100', height: 250 }}>
        <AgGridReact 
            ref={gridRef}
            rowData={deals} 
            columnDefs={dealColsLong}
            animateRows={true} 
            rowHeight={rowHeight}
        />
    </div>//
  );
};
export { DealFullGrid };