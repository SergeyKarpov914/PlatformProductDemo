import React from "react";

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import {useState, useRef, useMemo, useEffect} from 'react';

import { config }    from "../Config";
import { orderCols }    from "./ColumnDefs";

const OrderGrid = (props) => {
 
  const [orders, setOrders] = useState();

  const fetchOrders = () => {
    fetch(config.baseAddress + 'order')
    .then(rsp => rsp.json()) 
    .then(orders => setOrders(orders)) 
  };
  useEffect(() => fetchOrders(), []);
  
  const onSelectionChanged = (e) => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    if (selectedRows.length > 0) {
      props.setSelectedRow(selectedRows[0]);
      
      console.log(selectedRows[0]);
    }
  }

  const onCellClicked = (e) => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    if (selectedRows.length > 0) {
      props.setSelectedRow(selectedRows[0]);

      console.log(selectedRows[0]);
    }
  }


  const gridRef = useRef();
  const defaultColDef = useMemo( ()=> ({sortable: true, filter: true}));
  const paginationPageSizeSelector = [10, 20, 50, 100];
  const rowHeight=30;

  return (
      <div className="ag-theme-quartz" style={{ margin: 10, width: '100', height: 420 }}>
              <AgGridReact 
              ref={gridRef}
              rowData={orders} columnDefs={orderCols}
              defaultColDef={defaultColDef}
              animateRows={true} 
              rowSelection='single'
              //onSelectionChanged={onSelectionChanged}
              onCellClicked={onCellClicked}
              rowHeight={rowHeight}
              pagination={true} 
              paginationPageSize={10}
              paginationPageSizeSelector={paginationPageSizeSelector}                
            />
      </div>
  );
};
export { OrderGrid };
