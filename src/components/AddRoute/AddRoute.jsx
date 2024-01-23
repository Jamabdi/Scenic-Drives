import React, { useState, useEffect, useImperativeHandle } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function AddRoute() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [map_pic, setMap_Pic] = useState("");
    const dispatch = useDispatch();
    // const history = useHistory();

    const submitHandle = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to the server
            axios.post("/api/routes", {
                name,
                description,
                map_pic,
            })
                .then((response) => {
                    dispatch({ type: "FETCH_ROUTES" });
                })
                .catch((error) => {
                    console.log("Post not functioning, AddRoute Module", error);
                    alert("Something went wrong with POST!");
                });

            // Clear form fields once submitted
            setName("");
            setDescription("");
            setMap_Pic("");
        } catch (error) {
            console.error('Post not working in try-catch AddRoute', error);
        }
    }

  






    return (

        <form onSubmit={submitHandle}>
            Name:{" "}
            <input
                value={name}
                placeholder="Name of Route"
                onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            Description:{" "}
            <input
                value={description}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <br></br>
            Map File:{" "}
            <input
                value={map_pic}
                type="file"
                accept="image/*"
                placeholder="Upload Image of Route"
                onChange={(e) => setMap_Pic(e.target.value)}
            />
            <br></br>
        <br />
        {
          map_pic === '' ? (
            <p>Please select an image</p>
          ) : (
            <img style={{ maxWidth: '150px' }} src={map_pic} />
          )
        }
        <br />
            <button type="submit">Add Route</button>
        </form>
    );
};




export default AddRoute;