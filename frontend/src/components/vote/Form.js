import { useState, useEffect } from "react";
import axios from "axios";
import CategorySelectionForm from "./CategorySelectionForm";
const Form = (props) => {
  //fetching candidate data
  const [candidateData, setCandidateData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/get-candidate",
      responseType: "json",
    }).then((response) => {
      setCandidateData(response.data.data);
    });
  }, []);

  //filtering data according to category
  const candidateArray = candidateData.filter((item) => {
    if (props.category === item.category) return item;
    else return null;
  });

  const categoryHandler = (event) => {
    const [name, category, c_id] = event.target.value.split(',');
    const voteData = {
      name : name,
      category : category,
      c_id : c_id
    }
    // console.log(voteData);

    props.onVoteDataHandler(voteData);
  };

  return (
    <div className="form-item">
      <label for="president">{props.category}</label>
      <select onChange={categoryHandler} name="" id="">
        <option value="none" selected disabled hidden>
          Select Candidates
        </option>
        ;
        {candidateArray.map((item) => (
          <CategorySelectionForm
            name={item.name}
            category={item.category}
            c_id={item.c_id}
          />
        ))}
      </select>
    </div>
  );
};

export default Form;
