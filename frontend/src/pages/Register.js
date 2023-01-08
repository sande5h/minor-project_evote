import Navbar from "../components/Navbar";
import "./Register.css";
const Register = () => {
  return (
    <div class="content">
      <Navbar />
      <div class="header">
        <span>Management Application</span>
      </div>
      <form action="" class="Category-item">
        <input type="text" placeholder="Enter category" />
        <button type="submit">Add Category</button>
      </form>
      <div class="container">
        <div class="container-candidate">
          <span>Candidate Registration</span>
          <form class="form">
            <div class="form-item">
              <label for="name">Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div class="form-item">
              <label for="name">Address</label>
              <input type="text" placeholder="Enter your address" />
            </div>
            <div class="form-item">
              <label for="name">Social Number</label>
              <input
                type="number"
                placeholder="Enter your citizenship/nid id"
              />
            </div>
            <div class="form-item">
              <label for="name">Select Category</label>
              <select id="category" name="category">
                <option value="option1">President</option>
                <option value="option2">Vice President</option>
                <option value="option3">Secetary</option>
              </select>
            </div>
            <div class="form-item">
              <button class="btn" type="submit">
                Add Candidate
              </button>
            </div>
          </form>
        </div>
        <div class="container-candidate">
          <span>Voter Registration</span>
          <form class="form">
            <div class="form-item">
              <label for="name">Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div class="form-item">
              <label for="name">Address</label>
              <input type="text" placeholder="Enter your address" />
            </div>
            <div class="form-item">
              <label for="name">Social Number</label>
              <input
                type="number"
                placeholder="Enter your citizenship/nid id"
              />
            </div>
            <div class="form-item">
              <button class="btn" type="submit">
                Add Candidate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
