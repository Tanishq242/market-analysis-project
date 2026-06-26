import React from 'react'
import '../css/leftPanel.css'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const leftPanel = () => {
    return (
        <div id='left-panel'>
            <div id='left-top'>
                <div className='panel-item'><HomeOutlinedIcon sx={{ fontSize: 35 }} /> Dashboard</div>
                <div className='panel-item'><DescriptionOutlinedIcon sx={{ fontSize: 35 }} /> Upload History</div>
                <div className='panel-item'><InfoOutlinedIcon sx={{ fontSize: 35 }} /> About</div>
            </div>
            <div id='left-bottom'>
                <div>&copy; 2026 Market Analysis.</div>
            </div>
        </div>
    )
}

export default leftPanel