import React, {useState, useEffect} from 'react';

import Header from './Header';
import StudyList from './StudyList';

const Main = () => {
    const [patient, setPatient] = useState([]);
    const [study, setStudy] = useState([]);
    const patientURL = "http://localhost:8080/api/patient";
    const studyURL = "http://localhost:8080/api/study";

    useEffect( () => {
        fetch(patientURL)
            .then(response => response.json())
            .then(data => setPatient(data));
    }, []);

    useEffect( () => {
        fetch(studyURL)
            .then(response => response.json())
            .then(data => setStudy(data));
    }, []);

    return(
        <div className="container-fluid">
            <Header list= {patient} />
            <StudyList list = {study}/>
        </div>
    )
}

export default Main;