import { useState } from "react";
import axios from "axios";
const CategoryForm = () => {
  const [category, CategoryHandler] = useState("");

  const addCategoryHandler = (event) => {
    console.log(event.target.value);
    CategoryHandler(event.target.value);
  };
  const submitHandler = (event) => {
    // event.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3001/create-category",
      data: {
        category_item: category,
      },
    });
    CategoryHandler("");
  };
  return (
    <form onSubmit={submitHandler} className="Category-item">
      <input
        onChange={addCategoryHandler}
        value={category}
        type="text"
        placeholder="Enter category"
        required
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
