class Form extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            Question : "",
            Answer : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        const mystyle = {
            // color: "white",
            backgroundColor: "white",
            padding: "10px",
            fontFamily: "Arial",
            width: "40%"
          };

        return (
            
            <div>
                <form onSubmit = {this.handleSubmit}>
                   <div>
                    {/* <label><b>Question</b></label> */}
                    <p style={{fontFamily: "Arial"}}>Enter the Question</p>
                    <input  style={mystyle} onChange={this.handleChange} name="Question" type="text" placeholder="enter question" value={this.state.Question} required/>
                    </div>
                    <div>
                    {/* <label><b>Answer</b></label> */}
                    <p style={{fontFamily: "Arial"}}>Enter the Answer</p>
                    <input  style={mystyle} onChange={this.handleChange}  placeholder="enter answer" name="Answer" type="text" value={this.state.Answer} required/>
                    </div>
                    <div>
                        <p style={{fontFamily: "Arial"}}>Press this button to add QnA</p>
                    <button style={{backgroundColor:"green",  height: "50%"}} >Add QnA</button>
                    </div>

                </form>
            </div>

        )
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {

        event.preventDefault();

        const task = this.state.Question;
        const Answer = this.state.Answer;
        
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 1)

        if (currentDate > new Date(Answer)) {
            alert("Due Date should not be less than Current Date")
            return;
        }

        this.setState({
            Question : "",
            Answer : ""
        })

        this.props.addTask(task, Answer)
    }
}

class Task extends React.Component {

    constructor(props) {
        super(props) 
        this.state =  {
            taskList : []
        }

        this.addTask = this.addTask.bind(this)
    }

    render() {

        return (

            <div>

                <h1>QnA</h1>

                <ol>
                    {this.state.taskList.map((task, i) =>
                        <li key={i}>
                            <p style={{fontFamily: "Arial"}}>Question:  {task.task}</p>
                            
                            <p style={{fontFamily: "Arial"}} >Answer:     {task.Answer}</p>
                             
                            <button  style={{backgroundColor:"red"}} data-index = {i} onClick={this.deleteTask}> Delete QnA </button>
                        </li>
                    )}
                </ol>

                <Form addTask={this.addTask}/>
                
            </div>
        );
    }

    componentDidMount() {
        const tasks = localStorage.getItem("tasks");
        if (tasks !== null) {
            this.setState({
                taskList : JSON.parse(tasks)
            })
        }
        window.addEventListener("beforeunload", () => {
            localStorage.setItem("tasks", JSON.stringify(this.state.taskList));
        })
    }
    addTask = (task, Answer) => {

        this.setState(state => ({
        taskList: [...state.taskList, {task : task, Answer : Answer}]
        }));
    }

    deleteTask = (event) => {

        const index = event.target.dataset.index;

        this.setState(state => {
            const tasks = [...state.taskList];
            tasks.splice(index, 1);
            return {
                taskList: tasks
            };
        });
    }   

}

class App extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {

        return (
            <Task/>
        )

    }
}


ReactDOM.render(<App />, document.querySelector("#root"));
