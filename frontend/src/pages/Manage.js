import Navbar from "../components/Navbar";
import "./Manage.css";
const Manage = () =>{
    return (
        <div class="content">
          <Navbar/>
        <div class="header">
          <span>Manage Category Candidates and Voters</span>
        </div>
        <div class="display-data">
          <div class="display-item">
            <span>Manage Category</span>
            <table>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>President</td>
                <td><button>Delete</button></td>
              </tr>
              <tr>
                <td>Vice President</td>
                <td><button>Delete</button></td>
              </tr>
            </table>
          </div>
          <div class="display-item">
            <span>Manage Candidate</span>
            <table>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Social Number</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>Aastha Shrestha</td>
                <td>Palpa</td>
                <td>0954671201</td>
                <td>President</td>
                <td><button>Delete</button></td>
              </tr>
              <tr>
                <td>Anil Shrestha</td>
                <td>Bhojpur</td>
                <td>0954671201</td>
                <td>Vice President</td>
                <td><button>Delete</button></td>
              </tr>
            </table>
          </div>
          <div class="display-item">
            <span>Manage Voter</span>
            <table>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Social Number</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>Sandesh Bhusal</td>
                <td>Butwal</td>
                <td>0954671201</td>
                <td><button>Delete</button></td>
              </tr>
              <tr>
                <td>Yubraj Bashyal</td>
                <td>Palpa</td>
                <td>0954671201</td>
                <td><button>Delete</button></td>
              </tr>
              <tr>
                <td>Nabin Khadka</td>
                <td>Taplejung</td>
                <td>0954671201</td>
                <td><button>Delete</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
}

export default Manage;