import axios from "axios";

const GetCandidate = () => {
  const candidteData = [];
  axios({
    method: "get",
    url: "http://localhost:3001/get-candidate",
    responseType: "json",
  }).then((response) => {
    candidteData.push(response.data.data);
  });
  return candidteData;
};


const GetCategory = () => {
  const categoryData = [];
  axios({
    method: "get",
    url: "http://localhost:3001/get-category",
    responseType: "json",
  }).then((response) => {
    categoryData.push(response.data.data);
  });
  return categoryData;
};

export { GetCandidate, GetCategory };
