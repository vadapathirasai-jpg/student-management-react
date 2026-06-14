import axios from 'axios';
import './App.css';
import Header from './Comp/Header';
import { useEffect, useState } from 'react';

function App() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  async function getStudents() {
    const res = await axios.get("http://localhost:8080/student");
    console.log(res.data);
    
    setStudents(res.data);
  }

  const saveStudent = async (student) => {
    await axios.post("http://localhost:8080/student", student);
    getStudents();
  }

  const deleteStud = async (id) => {
    await axios.delete(`http://localhost:8080/student/${id}`);
    getStudents();
  }

  const updateStudent = async (student) => {
    await axios.put(`http://localhost:8080/student/${student.id}`, student);
    getStudents();
  }

  return (
    <div>
      <Header
        students={students}
        saveStudent={saveStudent}
        deleteStud={deleteStud}
        updateStudent={updateStudent}
      />
    </div>
  );
}

export default App;