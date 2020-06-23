class Textdis extends React.Component {
  render() {
    console.log(this.props);
    const mystyle = {
      // color: "white",
      backgroundColor: "white",
      padding: "10px",
      fontFamily: "Arial",
      width: "40%",
    };
    return (
      <div>
        <span>{this.props.value}</span>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          DELETE
        </button>
      </div>
    );
  }
}

class Handle extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.list.map((element) => (
          <Textdis
            id={element.id}
            key={element.id}
            value={element.value}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

class Intentdis extends React.Component {
  state = {
    question: [],
    answer: [],
    quescount: 0,
    anscount: 0,
    quesdata: "",
    ansdata: "",
  };

  handlequechange = (event) => {
    this.setState({
      quesdata: event.target.value,
    });
  };

  handleanschange = (event) => {
    this.setState({
      ansdata: event.target.value,
    });
  };

  handlequestion = (event) => {
    this.setState({
      question: [
        ...this.state.question,
        { id: this.state.quescount++, value: this.state.quesdata },
      ],
      quesdata: "",
    });
    event.preventDefault();
  };

  handleanswer = (event) => {
    console.log(this.state.ansdata);
    this.setState({
      answer: [
        ...this.state.answer,
        { id: this.state.anscount++, value: this.state.ansdata },
      ],
      ansdata: "",
    });
    event.preventDefault();
  };

  deletequestion = (ID) => {
    console.log(ID);
    this.setState({
      question: this.state.question.filter((ques) => ques.id !== ID),
    });
  };

  deleteanswer = (ID) => {
    console.log(ID);
    this.setState({
      answer: this.state.answer.filter((ans) => ans.id !== ID),
    });
  };

  render() {
    const mystyle = {
      // color: "white",
      backgroundColor: "white",
      padding: "10px",
      fontFamily: "Arial",
      width: "40%",
    };
    return (
      <div>
        <div>
          <h2> questions</h2>
          <Handle list={this.state.question} onDelete={this.deletequestion} />
          <input
            style={mystyle}
            type="text"
            onChange={this.handlequechange}
            value={this.state.quesdata}
            placeholder="enter question"
            required
          />
          <button onClick={this.handlequestion}>add question</button>
        </div>
        <div>
          <h2>answers</h2>
          <Handle list={this.state.answer} onDelete={this.deleteanswer} />
          <input
            style={mystyle}
            type="text"
            onChange={this.handleanschange}
            value={this.state.ansdata}
            placeholder="enter answers"
            required
          />
          <button onClick={this.handleanswer}>add answer</button>
        </div>
        <div>
          <h2>intent</h2>
          <input
            style={mystyle}
            name="intent"
            type="text"
            placeholder="enter intent"
            required
          />
        </div>
        <button onClick={this.handlesubmit}>finish annotation</button>
      </div>
    );
  }
}

ReactDOM.render(<Intentdis />, document.querySelector("#root"));
