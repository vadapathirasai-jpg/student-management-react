import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Application from "./Application";
import "./Header.css";


function Header(props){
    //console.log(props.students);
    function saveStudent(s){
        props.saveStudent(s);
    }
    function deleteStud(id){
    props.deleteStud(id);
   }
   function updateStudent(s){
    props.updateStudent(s);
   }
    return (
        <BrowserRouter>
        <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/students">Student Details</Link></li>
            <li><Link to="/application">application Form</Link></li>
        </ol>
            <Routes>
                  <Route exact path ="/" element = {<Home/>}> </Route>
                  <Route exact path ="/students" element = {<Info students = {props.students} deleteStud = {deleteStud} updateStudent = {updateStudent}></Info>}> </Route>
                  <Route exact path ="/application" element = {<Application saveStudent = {saveStudent}></Application>}> </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Header;