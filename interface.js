

 
class Example extends React.Component {
  myFunction() {
    location.replace("create_index.html")
    
  }
  render() {
    const mystyle = {
      
      padding: "10px",
      fontFamily: "Arial",
      backgroundColor: "DodgerBlue"
     
    };
    return (
      <div>
        <div>
        <h1>Mode of Annotation</h1>
      </div>
      <div>
        <button  style={mystyle} onClick={this.myFunction}>Create Intent</button>
      </div>
      <div>
      <button style={mystyle} onClick={this.myFunction}>QnA</button>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
