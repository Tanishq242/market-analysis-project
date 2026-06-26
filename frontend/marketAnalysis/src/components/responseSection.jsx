import React, { useState } from 'react'
import JsonViewer from './jsonViewer'
import '../css/responseSection.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GridOnIcon from '@mui/icons-material/GridOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StorageIcon from '@mui/icons-material/Storage';


const responseSection = ({ responseData }) => {
    const rows = responseData?.rows ?? 0;
    const columns = responseData?.columns ?? 0;

    return (
        <div id='response-section-container'>
            <div id='dataset-overview'>
                <div style={{marginBottom: 20}}>Dataset Overview</div>
                <div id='dataset-overview-details'>
                    <div id='d1'>
                        <p>Total Rows</p>
                        <div className="data-icon">
                            <p id='total-rows'>{rows}</p>
                            <TrendingUpIcon sx={{ fontSize: 35, color: "#3c88f0" }} />
                        </div>
                    </div>
                    <div id='d2'>
                        <p>Total Columns</p>
                        <div className="data-icon">
                            <p id='total-columns'>{columns}</p>
                            <GridOnIcon sx={{ fontSize: 35, color: "#d251d2" }}/>
                        </div>

                    </div>
                    <div id='d3'>
                        <p>Memory Usage</p>
                        <div className="data-icon">
                            <p id='memory-usage'>2.5 MB</p>
                            <StorageIcon sx={{ fontSize: 35, color: "#2cd22c" }}/>
                        </div>
                    </div>
                    <div id='d4'>
                        <p>Upload Time</p>
                        <div className="data-icon">
                            <p id='upload-time'>2.3 seconds</p>
                            <CalendarTodayIcon sx={{ fontSize: 35, color: "yellow" }}/>
                        </div>
                    </div>
                </div>
            </div>
            <div id='response-json'>
                <div id='response-json-header'>
                    <div>Response (JSON)</div>
                    <div><button className="copy-button">Copy</button></div>
                </div>
                <JsonViewer json={responseData} />
            </div>
        </div>
    )
}

export default responseSection  