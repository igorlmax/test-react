import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  state = {
    answer: 95
  };

  asyncFunction = () => {
    return Promise.resolve(101);
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunction()
    });
  }

  render() {
    return <h2>Class Component {this.state.answer}</h2>;
  }
}
ReactDom.render(<App />, document.getElementById("root"));
