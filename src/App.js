import axios from 'axios';
import './App.css';
import Header from './Comp/Header';
import Home from './Comp/Home';
import { useEffect, useState } from 'react';


function App() {

  const [students, setStudents] = useState([]);

  useEffect(() =>{
    getstudents();
  },[]);

  async function getstudents(){
    const res = await axios.get("http://localhost:5000/api/Students1");
    setStudents(res.data);
  }
  const saveStudent = async(student) => {
    const res = await axios.post("http://localhost:5000/api/Students1",student);
    getstudents();
  }
  const deleteStud = async (id) => {
    const res = await axios.delete(`http://localhost:5000/api/Students1/${id}`);
    getstudents();
  }
  const updateStudent = async (s) => {
    const res = await axios.put(`http://localhost:5000/api/Students1/${s.id}`,s);
    getstudents();
  }

  return (
    <div>
      <Header students ={students} saveStudent ={saveStudent} deleteStud = {deleteStud} updateStudent ={updateStudent}></Header>
    </div>
  );
}

export default App;
