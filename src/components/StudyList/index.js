import React, {useState, useEffect} from 'react';
import List from './List';
import Edit from './Edit';


const StudyList = (props) => {
    const [detail, setDetail] = useState({ data: {}});

    const detailSave = (data) => {
        setDetail({...detail, data})
    }


    return(
        <div className="row">
            <Edit data={detail} />
            <div className="col">
                <table className="table table-dark table-striped table-bordered border-secondary table-hover text-color">
                    <thead className="">
                        <tr>
                            <th>Person Code</th>
                            <th>Patient's Full name</th>
                            <th>Patient's Date of Birth</th>
                            <th>Study Name</th>
                            <th>Study Creation/Update Datetime</th>
                        </tr>
                    </thead>
                    <List listcontent={props.list} detailFunc={detailSave}/>
                </table>
            </div>
        </div>
    )
}

export default StudyList;