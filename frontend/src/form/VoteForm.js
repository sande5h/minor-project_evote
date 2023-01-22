import { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/vote/Form";
const VoteForm = () => {
  const [socailNumber, setSocailNumber] = useState("");
  const [receivedVoteData, setReceivedVoteData] = useState([]);
  const voteDataHandler = (data) => {
    //filtering repetation of voteData
    console.log(data.category);
    const filteredVoteData = receivedVoteData.filter((item) => {
      if (item.category !== data.category) {
        return item;
      }
    });
    setReceivedVoteData([...filteredVoteData, data]);
  };

  // fetching categories
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/get-category",
      responseType: "json",
    }).then((response) => {
      setCategoryData(response.data.data);
    });
  }, []);

  const socailNumberHandler = (event) => {
    // console.log(event.target.value);
    setSocailNumber(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const voteData = {
      ...receivedVoteData,
      social_number: socailNumber,
    };
    console.log(voteData);
  };

  return (
    <form onSubmit={submitHandler} action="">
      {categoryData.map((item) => (
        <Form
          category={item.category_item}
          onVoteDataHandler={voteDataHandler}
        />
      ))}
      <div className="form-item">
        <label for="">Enter Social Number</label>
        <input
          type="number"
          onChange={socailNumberHandler}
          value={socailNumber}
          required
        />
      </div>
      <div className="form-item">
        <button type="submit">Vote</button>
      </div>
    </form>
  );
};

export default VoteForm;
