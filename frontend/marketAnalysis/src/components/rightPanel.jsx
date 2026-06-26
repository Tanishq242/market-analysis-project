import React, { useState } from 'react'
import '../css/rightPanel.css'
import UploadSection from './uploadSection'
import ResponseSection from './responseSection'
import FilterSection from './filterSection'
import TableSection from './tableSection'

const rightPanel = () => {
    const [responseData, setResponseData] = useState(null);
    const [responseTable, setResponseTable] = useState(null);
    const [filter, setFilter] = useState(null);

    return (
        <div id="right-panel">
            <UploadSection setResponseData={setResponseData} setReponseTable={setResponseTable} setFilter={setFilter}/>
            <ResponseSection responseData={responseData}/>
            <FilterSection filter={filter} setResponseData={setResponseData}/>
            <TableSection tableData={responseTable}/>
        </div>
    )
}

export default rightPanel