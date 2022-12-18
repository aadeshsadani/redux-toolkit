import { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

import Header from './Header';

const Dashboard = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(props.checkSession === false){
            navigate("/");
        }
    },[])    
    return(
        <>
            <Header sessionUpdate={props.sessionUpdate} getUserName={props.getUserName} />
            <h4>Wellcome: {props.activeUserName}</h4>
        </>
    )
}

export default Dashboard