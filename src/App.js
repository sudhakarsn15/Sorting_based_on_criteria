import React from "react";
import "./styles.css";
import { Table } from "react-bootstrap";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demoList: [
        { id: "1001", type: "Error" },
        { id: "1002", type: "Warning" },
        { id: "1003", type: "Warning" },
        { id: "1004", type: "Danger" }
      ],
      listBeforeChange: [],
      listAfterChange: [],
      listOfErrors: ["error", "warning", "danger"]
    };
  }
  demoListFunction = () => {
    const { demoList, listOfErrors } = this.state;
    var warningList = [];
    var errorList = [];
    var dangerList = [];
    this.setState({
      listBeforeChange: demoList
    });
    demoList.map((listObject) => {
      if (listObject.type.toLowerCase() === listOfErrors[0]) {
        errorList.push({ id: listObject.id, type: listObject.type });
      } else if (listObject.type.toLowerCase() === listOfErrors[1]) {
        warningList.push({ id: listObject.id, type: listObject.type });
      } else if (listObject.type.toLowerCase() === listOfErrors[2]) {
        dangerList.push({ id: listObject.id, type: listObject.type });
      }
    });
    var result = dangerList.concat(warningList, errorList);
    console.log(result);
    this.setState({
      listAfterChange: result
    });
  };
  componentDidMount() {
    this.demoListFunction();
  }
  render() {
    const { demoList, listBeforeChange, listAfterChange } = this.state;
    return (
      <div className="App">
        <h1>Sorting List based on criteria</h1>
        <Table style={{ width: "50%" }}>
          <caption>Table before changes</caption>
          <tbody>
            {listBeforeChange.map((listObject) => (
              <tr key={listObject.id}>
                <td>{listObject.id}</td>
                <td>{listObject.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Table style={{ width: "50%" }}>
          <caption>Table after changes</caption>
          <tbody>
            {listAfterChange.map((listObject) => (
              <tr key={listObject.id}>
                <td>{listObject.id}</td>
                <td>{listObject.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
