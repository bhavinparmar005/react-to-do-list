import { useState } from "react";
import "./App.css";

function App() {
  const [allRecord, setAllRecord] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    // alert("Task added");

    let obj = {
      id: allRecord.length + 1,
      taskname: task,
    };

    if (editTask) {
      let upDateTask = allRecord.map((val) => {
        if (val.id == editTask) {
          val.taskname = task;
        }
        return val;
      });

      setAllRecord(upDateTask);
      localStorage.setItem("todo", JSON.stringify(upDateTask));
      setEditTask("");
      setTask("");
    } else {

        let duplicate = allRecord.find((val)=>{
          return(
            val.taskname== task
          )
        })
        if(duplicate){
          alert(" already task exist :-  ")
          setTask("")
          return false
        }


      if (obj.taskname == "" || obj.taskname[0] == " ") {
        alert("Plz Input Some Value");
        setTask("");

        return false;
      } else {
        let newData = [...allRecord, obj];
        setAllRecord(newData);
      } 

      let newData = [...allRecord, obj];
      setAllRecord(newData);
      localStorage.setItem("todo", JSON.stringify(newData));
      setTask("");
    }
  };

  const taskDelete = (id) => {
    alert(id);

    let del = allRecord.filter((val) => {
      return val.id !== id;
    });

    setAllRecord(del);

    localStorage.setItem("todo", JSON.stringify(del));
  };

  const taskEdit = (id) => {
    setEditTask(id);

    let resetTask = allRecord.find((val) => {
      return val.id == id;
    });
    setTask(resetTask.taskname);
  };

  // console.log(editTask);

  // console.log(task);

  // console.log(allRecord);

  return (
    <>
      <div className="main">
        <div className="to_do_list_main_container">
          <div className="heading">
            <h1>To-Do List ...</h1>
          </div>

          <div className="task_input_main">
            <form className="input_and_button_main" onSubmit={addTask}>
              <div className="input_type">
                <input
                  type="text"
                  placeholder="Add To Task"
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                />
              </div>
              <div className="addtaskbutton">
                {editTask ? (
                  <button type="submit">Edit</button>
                ) : (
                  <button type="submit">Add</button>
                )}
              </div>
            </form>
          </div>

          <div className="task_list_main">
            {allRecord.map((val) => {
              return (
                <div className="tast_item">
                  <div className="list">
                    <p>{val.taskname} </p>
                  </div>
                  <div className="edit_button_delate_button_main">
                    <button
                      className="edit_button"
                      onClick={() => taskEdit(val?.id)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      className="delate_button"
                      onClick={() => taskDelete(val?.id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;