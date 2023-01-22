import axios from "axios";
const Voter = (props) => {
  const id = props.id;
  const deleteHandler = () => {
    axios({
      method: "delete",
      url: "http://localhost:3001/delete-voter/",
      data: {
        id: id,
      },
    });
  };

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.address}</td>
      <td>{props.social_number}</td>
      <td>
        <form onSubmit={deleteHandler}>
          <button type="submit">Delete</button>
        </form>
      </td>
    </tr>
  );
};

export default Voter;
