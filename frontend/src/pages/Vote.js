import "./Vote.css";
const Vote = () =>{
    return(
        <div class="content">
        <div class="header">
          <span>BLOCKCHAIN BASED E-VOTING AND RESULT</span>
        </div>
  
        <div class="container-voter">
          <div class="vote">
            <span>Select Candidate and Enter Social Number</span>
            <form action="">
              <div class="form-item">
                <label for="president">President</label>
                <select name="" id="">
                  <option value="">Aastha Shrestha</option>
                  <option value="">ABCD ABCD</option>
                  <option value="">XYZ XYZ</option>
                </select>
              </div>
              <div class="form-item">
                <label for="president">Vice President</label>
                <select name="" id="">
                  <option value="">Anil Shrestha</option>
                  <option value="">ABCD ABCD</option>
                  <option value="">XYZ XYZ</option>
                </select>
              </div>
              <div class="form-item">
                <label for="president">Enter Social Number</label>
                <input type="number" />
              </div>
              <div class="form-item">
                <button type="submit">Vote</button>
              </div>
            </form>
          </div>
          <div class="result">
            <span class="title">Voting Result</span>
            <div class="result-item">
              <span>President</span>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Votes</th>
                </tr>
                <tr>
                  <td>abcd</td>
                  <td>abcd</td>
                </tr>
              </table>
            </div>
            <div class="result-item">
              <span>Vice President</span>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Votes</th>
                </tr>
                <tr>
                  <td>abcd</td>
                  <td>abcd</td>
                </tr>
              </table>
            </div>
            <div class="result-item">
              <span>Secetary</span>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Votes</th>
                </tr>
                <tr>
                  <td>abcd</td>
                  <td>abcd</td>
                </tr>
              </table>
            </div>
            <div class="result-item">
              <span>Secetary</span>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Votes</th>
                </tr>
                <tr>
                  <td>abcd</td>
                  <td>abcd</td>
                </tr>
              </table>
            </div>
            <div class="result-item">
              <span>Secetary</span>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Votes</th>
                </tr>
                <tr>
                  <td>abcd</td>
                  <td>abcd</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Vote;