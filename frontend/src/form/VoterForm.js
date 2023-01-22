import { useState } from "react";
import axios from "axios";
const VoterForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [social_number, setSocial_number] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const addressHandler = (event) => {
    setAddress(event.target.value);
  };
  const social_numberHandler = (event) => {
    setSocial_number(event.target.value);
  };
  const submitHandler = (event) => {
    // event.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3001/create-voter",
      data: {
        name: name,
        address: address,
        social_number: social_number,
      },
    });

    setName("");
    setAddress("");
    setSocial_number("");
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="form-item">
        <label for="name">Name</label>
        <input
          onChange={nameHandler}
          value={name}
          type="text"
          placeholder="Enter your full name"
          required
        />
      </div>
      <div className="form-item">
        <label for="name">Address</label>
        <input
          onChange={addressHandler}
          value={address}
          type="text"
          placeholder="Enter your address"
          required
        />
      </div>
      <div className="form-item">
        <label for="name">Social Number</label>
        <input
          onChange={social_numberHandler}
          value={social_number}
          type="number"
          placeholder="Enter your citizenship/nid id"
          required
        />
      </div>
      <div className="form-item">
        <button className="btn" type="submit">
          Add Candidate
        </button>
      </div>
    </form>
  );
};

export default VoterForm;
