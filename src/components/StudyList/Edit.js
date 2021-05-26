import React from 'react';

const Edit = (props) => {
    
    const study = props.data.data;
    const patient = study.patient;

    const editHandler = () => {
        // constructing url with parameters 
        var url = "http://localhost:8080/api/study" + "/" + study.id;
        const params = {
            name: document.getElementById("editname").value,
            description: document.getElementById("editdescription").value,
        }
        var query = new URLSearchParams(params).toString();
        url = url + "?" + query;

        
        // Api request to update the study
        fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if(response.status == 200) {
                    window.location.reload();
                }
            });
    }

    return(
        <div>                    
            <div className="modal fade" id="editstudy" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit A Study</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">                                    
                                <h4>Study Information</h4>
                                <p>Created At: {study.createdAt}</p>
                                <div className="mb-3">
                                    <label htmlFor="editname" className="form-label">Study name</label>
                                    <input type="text" className="form-control" id="editname" defaultValue={study.name} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="editdescription" className="form-label">Study Description</label>
                                    <textarea className="form-control" defaultValue={study.description} id="editdescription" rows="3"></textarea>
                                </div>                                
                                <hr />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={editHandler} className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;