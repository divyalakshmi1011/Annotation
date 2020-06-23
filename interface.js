class Example extends React.Component {
  myFunction() {
    window.location.assign("intent.html");
  }
  render() {
    const mystyle = {
      padding: "10px",
      fontFamily: "Arial",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      backgroundColor: "green",
    };
    return (
      <div>
        <div>
          <p>Press this button for "CREATING INTENTS" out of raw data</p>
          <button style={mystyle} onClick={this.myFunction}>
            Create Intent
          </button>
        </div>
        <div>
          <p>
            Press this button for "CREATING QUESTIONS" and answers out of raw
            data
          </p>
          <button style={mystyle} onClick={this.myFunction}>
            QnA
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
