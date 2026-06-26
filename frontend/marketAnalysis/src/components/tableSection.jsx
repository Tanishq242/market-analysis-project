import { useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import {
  themeQuartz,
  colorSchemeDarkBlue,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "../css/tableSection.css";

export default function TableSection({ tableData = [] }) {
  const gridRef = useRef(null);
  const [search, setSearch] = useState("");

  const myTheme = themeQuartz
    .withPart(colorSchemeDarkBlue)
    .withParams({
      accentColor: "#3b82f6",
      backgroundColor: "#111827",
      foregroundColor: "#e5e7eb",

      headerBackgroundColor: "#0f172a",
      headerTextColor: "#ffffff",

      borderColor: "#243244",

      fontSize: 13,
      spacing: 8,

      rowHoverColor: "#1f2937",
      selectedRowBackgroundColor: "#1d4ed8",
    });

  // Generate columns dynamically
  const columnDefs = useMemo(() => {
    if (!tableData || tableData.length === 0) return [];

    return Object.keys(tableData[0]).map((key) => ({
      field: key,
      headerName: key
        .replace(/_/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      sortable: true,
      filter: true,
      resizable: true,
    }));
  }, [tableData]);

  const defaultColDef = {
    flex: 1,
    minWidth: 120,
    sortable: true,
    filter: true,
    resizable: true,
  };

  const exportCSV = () => {
    gridRef.current?.api.exportDataAsCsv();
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>📊 Market Data</h2>

        <div className="table-actions">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);

              gridRef.current?.api.setGridOption(
                "quickFilterText",
                e.target.value
              );
            }}
          />

          <button onClick={exportCSV}>
            Export CSV
          </button>
        </div>
      </div>

      <div style={{ height: 600 }}>
        <AgGridReact
          ref={gridRef}
          theme={myTheme}
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}