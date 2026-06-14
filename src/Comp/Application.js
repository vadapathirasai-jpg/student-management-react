import { useState } from "react";

function Application(props)
{
    const [sname, setName] = useState('');
    const [sdept, setDept] = useState('');

    function nameHandler(event)
    {
        //console.log(event.target.value);
        setName(event.target.value);
        
    }
    function deptHandler(event){
          setDept(event.target.value);
    }
    function saveStudent(event){
        event.preventDefault();
        const student = {
            name:sname,
            department:sdept
        }
        // console.log(student);
        props.saveStudent(student);
        setName('');
        setDept('');
        
    }
    return (
        <div>
            <h1>Application form</h1>
            <form onSubmit={saveStudent}>
                Name : <input type="text" name="sname" value={sname} onChange={nameHandler}></input><br></br>
                Department : <input type="text" name="sdept" value={sdept} onChange={deptHandler}></input><br></br>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}
export default Application;