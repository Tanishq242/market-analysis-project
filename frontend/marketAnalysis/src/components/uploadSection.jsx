import React, { useState, useRef } from "react";
import { uploadFile } from "../api/uploadApi";
import "../css/upload.css";
import JsonViewer from "./jsonViewer";
import { fetchTable } from "../api/tableApi";
import { fetchMetadata } from "../api/metadata";

const UploadSection = ({ setResponseData, setReponseTable, setFilter }) => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            console.log("Selected file:", file);
            console.log("Name:", file.name);
            setFile(file);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please choose a file.");
            return;
        }

        try {
            const data = await uploadFile(file);
            console.log(data);
            setResponseData(data);

            const tableData = await fetchTable();
            console.log(tableData);
            setReponseTable(tableData);

            const metadata = await fetchMetadata();
            console.log(metadata)
            setFilter(metadata)
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div id="upload-container">
            <div id="upload-header">
                <h3>Market Analysis Dashboard</h3>
                <p>Upload feather file, apply filters, and analyze market data.</p>
            </div>

            <div id="upload-file-container">
                <div id="upload-file-header">
                    <div id="upload-file-left">
                        <h3>Upload File Feather</h3>
                        <p>Drag or drop your .feather file here, or click to browse</p>
                    </div>

                    <div className="buttonBox">
                        <button
                            className="buttonChoose"
                            onClick={handleButtonClick}
                        >
                            Choose File
                        </button>

                        <button className="buttonDownload"
                            onClick={handleUpload}
                        >
                            Upload
                        </button>

                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                        />
                    </div>
                </div>

                <div id="upload-file-body">
                    {file && (
                        <div>
                            <div>{file.name}</div>
                            <p>{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UploadSection;