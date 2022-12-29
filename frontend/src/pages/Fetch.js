import Navbar from "../components/Navbar";
import FetchCandidate from "./FetchCandidate";
import FetchVoter from "./FetchVoter";

const Fetch = () => {
  return (
    <div>
      <Navbar />
      <h3>Details of Candidate</h3>
      <FetchCandidate/>
      <h3>Details of Voter</h3>
      <FetchVoter/>
    </div>
  );
};
export default Fetch;
