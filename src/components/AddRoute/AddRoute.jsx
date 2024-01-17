import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";



function AddRoute() {

const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [map_pic, setMap_Pic] = useState("");
const dispatch = useDispatch();

const submitHandle = async (e) => {
    e.preventDefault();
}

useEffect(() => {
    dispatch({ type: "FETCH_ROUTES" });
  }, []);



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

    // Clear form fields after submission
    setName("");
    setDescription("");
    setMap_Pic("");
  } catch (error) {
    console.error(error);
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
        type="date"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br></br>
      Map Pic:{" "}
      <input
        value={map_pic}
        placeholder="Upload Image of Route"
        onChange={(e) => setMap_Pic(e.target.value)}
      />
    </form>
  );
};




export default AddRoute;