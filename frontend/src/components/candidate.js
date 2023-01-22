import axios from "axios";
import ManageCandidate from "../pages/manage/ManageCandidate";
const Candidate = (props) => {
  const id = props.id;
  const deleteHandler = (event) => {
    // event.preventDefault();
    // console.log(id);
    axios({
      method: "delete",
      url: "http://localhost:3001/delete-candidate/",
      data: {
        id: id,
      },
    });
  };

  return (
    <tr>
      <td> {props.id} </td>
      <td>{props.name}</td>
      <td>{props.address}</td>
      <td>{props.social_number}</td>
      <td>{props.category}</td>
      <td>
        <form onSubmit={deleteHandler}>
          <button type="submit">Delete</button>
        </form>
      </td>
    </tr>
  );
};

export default Candidate;
