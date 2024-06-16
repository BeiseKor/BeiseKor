import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddSnippet.css';  

const AddSnippet = () => {
    const [file, setFile] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const onFileChange = event => {
        setFile(event.target.files[0]);
    };

    const onFileUpload = async () => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            await axios.post("http://localhost:8919/api/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('File uploaded successfully');
            setIsFormVisible(false);
            setFile(null);
        } catch (error) {
            console.error('Error uploading file: ', error);
            alert('Error uploading file');
        }
    };

    return (
        <div className="container">
            {!isFormVisible && (
                <button className='button' onClick={() => setIsFormVisible(true)}>Add Snippet</button>
            )}
            {isFormVisible && (
                <div>
                    <input className='but' type="file" onChange={onFileChange} />
                    <button className='but' onClick={onFileUpload}>Upload</button>
                    <button className='but' onClick={() => setIsFormVisible(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default AddSnippet;
