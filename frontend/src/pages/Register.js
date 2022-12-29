import Navbar from "../components/Navbar";
import RegisterCandidate from "./RegisterCandidate";
import RegisterVoter from "./RegisterVoter";

const Register = () => {
  return (
    <div>
      <Navbar/>
      <div class="container-fluid">
        <div class="row d-flex justify-content-around mt-3">
          <RegisterCandidate/>
          <RegisterVoter/>
        </div>
    </div>
    </div>

  );
};
export default Register;
