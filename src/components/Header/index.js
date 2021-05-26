import React from 'react';

const Header = (props) => {

    // form submit handler function 
    const submitHandler = (event) =>{
        event.preventDefault();
        const patient = {
            personCode : document.getElementById("personCode").value,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            dob: document.getElementById("dob").value
        }

        const study = {
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            patient : patient
        }

        const submiturl = "http://localhost:8080/api/study";

        fetch(submiturl, {
            method: 'post',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(study)
        })
        .then(response => {
            if(response.status == 200) {
                window.location.reload();
            }
        });
        

        // window.location.reload(); 
    }

    // personCode Checking if exists
    const personCodeChecker = (event) => {
        console.log(event.target.value);
        var persoCode = event.target.value;
        const list = props.list;

        for (var index = 0; index <list.length; ++index) {
            var val =  list[index];              
            if(persoCode == val.personCode){
                console.log("personcode exists");
                var element = document.getElementById("personCode");
                element.classList.add("is-invalid");
            }
        }
    }



    return(
        <div className="row">
            <div className="col-6">
                <h1 className="text-color">Simple Study Viewer</h1>
            </div>
            
            <div className="col-6 d-flex align-items-center justify-content-end">
                <div>
                    <button type="button" className="btn btn-color rounded-0" data-bs-toggle="modal" data-bs-target="#addstudy">
                        Add Study
                    </button>
                    
                    <div className="modal fade" id="addstudy" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add A Study</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form>
                                    <div className="modal-body">                                    
                                        <h4>Study Information</h4>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Study name</label>
                                            <input type="text" className="form-control" id="name" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Study Description</label>
                                            <textarea className="form-control" id="description" rows="3"></textarea>
                                        </div>
                                        <hr />
                                        <h4>Patient Information</h4>                                                                       
                                        <div className="mb-3">
                                            <label htmlFor="personCode" className="form-label">Person Code</label>
                                            <input type="text" className="form-control" id="personCode" onChange={personCodeChecker} aria-describedby="personCodeValidator" required/>
                                            <div id="personCodeValidator" class="invalid-feedback">
                                                Person Code Already Exists.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="firstName" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="firstName" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="lastName" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                                            <input type="date" className="form-control" id="dob" required/>
                                        </div>
                                        
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" onClick={submitHandler} className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>            
        </div>
    )
}

export default Header;