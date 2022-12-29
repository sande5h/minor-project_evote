const RegisterCandidate = () =>{
    return(
        <div class="col-4 bg bg-primary-subtle p-3">
        <h2 class="text-center">Candidate Registration</h2>
        <form action="">
            <div class="col-md-4 p-3">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-contrl" required/>
            </div>
            <div class="col-md-4 p-3">
                <label class="form-label">Address</label>
                <input type="text" class="form-contrl" required />
            </div>
            <div class="col-md-4 p-3">
                <label class="form-label">Social Number</label>
                <input type="number" class="form-contrl" required/>
            </div>
            <div class="col-md-4 p-3">
                <label class="form-label">Gender</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio"/>
                    <label class="form-check-label"> Male </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio"/>
                    <label class="form-check-label"> Female </label>
                </div>
            </div>
            <div class="col-md-4 p-3">
                <label class="form-label">Category</label>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Select Category
                    </button>
                    <ul class="dropdown-menu">
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                    </ul>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
    );
};

export default RegisterCandidate;