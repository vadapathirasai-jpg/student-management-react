import { useState } from 'react';
import './Info.css';

function Info(props)
{

    const [sname, setName] = useState('');
    const [sdept, setDept] = useState('');
    const [id, setId] = useState('');
    const [edit, setEdit] = useState(false);
    

   // console.log(props.students);
   function deleteStud(id){
    //console.log(id);
    props.deleteStud(id);
   }

   function saveStudent(){

   }

    function nameHandler(event)
    {
        //console.log(event.target.value);
        setName(event.target.value);
        
    }

    function deptHandler(event){
          setDept(event.target.value);
    }

    function update(s){
    //console.log(s);
    setEdit(true);
    setName(s.name);
    setDept(s.department);
    setId(s.id);
    }

    function updateStudent(event){
        event.preventDefault();
        const student = {
            id,
            name:sname,
            department:sdept
        }
        //console.log(student);
        props.updateStudent(student);
        setEdit(false);
    }
    
    return (
        <div>
            <h1>Student Details</h1>
            <table border= '1' cellPadding= '5'>
                <thead>
                    <tr>
                        <th>--ID--</th>
                        <th>--Name--</th>
                        <th>--Dept--</th>
                        <th>--Actions--</th>
                    </tr>
                </thead>
                <tbody>
                    {                       
                        props.students.map( (s) => {
                            return (
                                <tr key = {s.id}>
                                    <td>{s.id}</td>
                                    <td>{s.name}</td>
                                    <td>{s.department}</td>
                                    <td><button onClick={ () => {deleteStud(s.id)}}>Delete</button>
                                    <button onClick={ () => {update(s)}}>Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <hr></hr>
            {        
            edit && 
             <form onSubmit={updateStudent}>
                Name : <input type="text" name="sname" value={sname} onChange={nameHandler}></input><br></br>
                Department : <input type="text" name="sdept" value={sdept} onChange={deptHandler}></input><br></br>
                <button type="submit" >Submit</button>
            </form>
            }
        </div>
    );
}
export default Info;