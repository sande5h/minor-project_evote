import axios from "axios";

const Category = (props) => {
  const id = props.id;
  // console.log(props.category);
  const deleteHandler = (event) => {
    // console.log("Executing delete handler");
    // console.log(`id  = ${id}`)
    axios({
      method: "delete",
      url: "http://localhost:3001/delete-category/",
      data: {
        id: id,
      },
    });
  };
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.category}</td>
      <td>
        <form onSubmit={deleteHandler}>
          <button type="submit">Delete</button>
        </form>
      </td>
    </tr>
  );
};

export default Category;
