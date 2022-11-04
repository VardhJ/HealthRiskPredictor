// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  // const [data, setdata] = useState({
  //   name: "",
  //   age: 0,
  //   date: "",
  //   programming: "",
  // });

  // useEffect(() => {
  //   fetch("/data").then((res) =>
  //     res.json().then((data) => {
  //       setdata({
  //         name: data.Name,
  //         age: data.Age,
  //         date: data.Date,
  //         programming: data.programming,
  //       });
  //     })
  //   );
  // }, []);
  function sendUserInfo() {
    let userinfo = document.getElementById('name').value
    console.log(userinfo)
    const request = new XMLHttpRequest()
    request.open('POST', `/ProcessUserinfo/${JSON.stringify(userinfo)}`)
    request.send();
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React and flask</h1>
        {/* <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.date}</p>
        <p>{data.programming}</p> */}
        <input type='text' name="Name" id="name"></input><br></br>
        <button type="button" onClick={sendUserInfo}>Submit</button>
      </header>
    </div>
  );
}

export default App;
