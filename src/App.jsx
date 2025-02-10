import './App.css'


function App() {


  return (
    <>
      <div className="main">
        <div className="to_do_list_main_container">
          <div className="heading">To-Do List</div>

            <div className="task_input_main">

              <div className="input_and_button_main">
                <div className="input_type">
                  <input type="text" placeholder='Add To Task' />
                </div>
                <div className="addtaskbutton">
                  <button>Add</button>
                </div>
              </div>

            </div>
              <div className="task_list_main"></div>

        </div>
      </div>
    </>
  )
}

export default App
