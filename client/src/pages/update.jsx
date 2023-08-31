import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e => {
    e.preventDefault();
    try{
        await axios.put("http://localhost:8800/books" + bookId ,book)
        navigate("/")
    }catch(e){
        console.log(e); 
    }

}

  console.log(book);

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="title"
        name="title"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="desc"
        name="desc"
      />
      <input
        type="number"
        onChange={handleChange}
        placeholder="price"
        name="price"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="cover"
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;
