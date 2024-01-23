import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Card, Button, CardContent, Grid, Paper } from '@mui/material';
import Modal from 'react-modal';
import './AddRoute.css';

function AddRoute({ showModal, handleClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [map_pic, setMap_Pic] = useState('');
  const [cloudinaryUrl, setCloudinaryUrl] = useState('');
  const dispatch = useDispatch();

  const isFileValid = (file) => {
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    return acceptedImageTypes.includes(file.type);
  };

  const onFileChange = async (event) => {
    const fileToUpload = event.target.files[0];

    if (isFileValid(fileToUpload)) {
      const formData = new FormData();
      formData.append('file', fileToUpload);
      formData.append('upload_preset', process.env.REACT_APP_PRESET);

      try {
        const cloudinaryResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setCloudinaryUrl(cloudinaryResponse.data.secure_url);
      } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        alert('Something went wrong with the image upload!');
      }
    } else {
      alert('Please select a valid image (GIF, JPEG, or PNG).');
    }
  };

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      if (cloudinaryUrl) {
        await axios.post('/api/routes', {
          name,
          description,
          map_pic: cloudinaryUrl,
        });

        dispatch({ type: 'FETCH_ROUTES' });

        setName('');
        setDescription('');
        setMap_Pic('');
        setCloudinaryUrl('');
        handleClose(); // Close the modal after successful submission
      } else {
        alert('Please upload an image first.');
      }
    } catch (error) {
      console.error('Error in submitHandle:', error);
      alert('Something went wrong with the submission!');
    }
  };

  return (
    <Modal isOpen={showModal} onRequestClose={handleClose}>
      <form className="form" onSubmit={submitHandle}>
        {/* Your form content */}
        {/* <form onSubmit={submitHandle}> */}
      Name:{" "}
      <input
        value={name}
        placeholder="Name of Route"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Description:{" "}
      <input
        value={description}
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      Map File:{" "}
      <input
        type="file"
        accept="image/*"
        placeholder="Upload Image of Route"
        onChange={onFileChange}
      />
      <br />
      {
        cloudinaryUrl === '' ? (
          <p>Please select a valid image</p>
        ) : (
          <img style={{ maxWidth: '150px' }} src={cloudinaryUrl} alt="Selected" />
        )
      }
      <br />
      {/* <button type="submit">Add Route</button> */}
    {/* </form> */}
        {/* ... */}
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Add Route
        </Button>
      </form>
    </Modal>
  );
}

export default AddRoute;
