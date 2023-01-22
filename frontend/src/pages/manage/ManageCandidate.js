import { useState, useEffect } from "react";
import axios from "axios";
import Candidate from "../../components/candidate";

const ManageCandidate = () => {
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

  return candidateData.map((item) => (
    <Candidate
      id={item.id}
      name={item.name}
      address={item.address}
      social_number={item.social_number}
      category={item.category}
    />
  ));
};

export default ManageCandidate;
