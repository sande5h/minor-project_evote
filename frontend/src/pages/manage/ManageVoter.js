import { useState, useEffect } from "react";
import axios from "axios";
import Voter from "../../components/Voter";

const ManageVoter = () => {
  const [voterData, setVoterData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/get-voter",
      responseType: "json",
    }).then((response) => {
      setVoterData(response.data.data);
    });
  }, []);

  return voterData.map((item) => (
    <Voter

      id={item.id}
      name={item.name}
      address={item.address}
      social_number={item.social_number}
    />
  ));
};

export default ManageVoter;
