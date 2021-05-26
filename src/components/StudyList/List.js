import React from 'react';

const List = (props) => {    
    const studyClickHandler = (event) => {
        event.preventDefault();
        var patient = {
            personCode: event.target.getAttribute('data-patient-personCode'),
            firstName: event.target.getAttribute('data-patient-firstName'),
            lastName: event.target.getAttribute('data-patient-lastName'),
            dob: event.target.getAttribute('data-patient-dob')
        }
        var data = {
            patient: patient,
            id: event.target.getAttribute("data-id"),
            name: event.target.getAttribute("data-name"),
            description: event.target.getAttribute("data-description"),
            createdAt: event.target.getAttribute("data-createdAt")
        }
        props.detailFunc(data);
    } 

    const list = (
        props.listcontent.map(el => (
            <tr>
                <th>{el.patient.personCode}</th>
                <td>{el.patient.firstName} {el.patient.lastName}</td>
                <td>{el.patient.dob}</td>
                <td>{el.name}</td>
                <td>{el.createdAt}</td>
                <td>
                    <button type="button" onClick={studyClickHandler} className="btn btn-color btn-sm rounded-0" data-bs-toggle="modal" data-bs-target="#editstudy"
                        key={el.id} 
                        data-id={el.id}
                        data-patient-personCode={el.patient.personCode} 
                        data-patient-firstName={el.patient.firstName} 
                        data-patient-lastName={el.patient.lastName} 
                        data-patient-dob={el.patient.persodobnCode} 
                        data-name={el.name}
                        data-createdAt={el.createdAt}
                        data-description={el.description}
                    >
                        Edit Study
                    </button>
                </td>
            </tr>  
        ))
    )
    return(
        <tbody>
            {list}
        </tbody>
    )
}

export default List;