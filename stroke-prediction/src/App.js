// Importing modules
import React, { useState, useEffect, Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Smoke from "./images/smoke.png"
import Bmi from "./images/BMI.png"
import Glucose from "./images/glucose.png"
import Hypertension from "./images/Hypertension.png"
import Age from "./images/age.png"

function App() {

  const [data, setdata] = useState([{}]);



  function sendUserInfo() {
    let name = document.getElementById('name').value
    let gender = document.getElementById('gender').value
    let age = document.getElementById('age').value
    let hypertension = document.getElementById('hypertension').value
    let heart = document.getElementById('heart').value
    let marital = document.getElementById('marital').value
    let work = document.getElementById('work').value
    let residence = document.getElementById('residence').value
    let glucose = document.getElementById('glucose').value
    let bmi = document.getElementById('bmi').value
    let smoking = document.getElementById('smoking').value

    let userInfo = []
    userInfo.push(name, gender, age, hypertension, heart, marital, work, residence, glucose, bmi, smoking);
    console.log(userInfo);

    const request = new XMLHttpRequest()
    request.open('POST', `/ProcessUserinfo/${JSON.stringify(userInfo)}`)
    request.send();


    fetch(`/ProcessUserinfo/${JSON.stringify(userInfo)}`).then((res) =>
      res.json().then((data) => {
        setdata(data)
        var stringified = JSON.stringify(data);
        var parsedObj = JSON.parse(stringified);
        console.log(parsedObj)
        if (parsedObj == "No stroke")
          alert("Congratulations! Your chances of a stroke are low.")
        else
          alert("Your chances of getting a stroke are high, please consult a doctor!")
      })
    );
  }


  return (
    <div className="App">


      <div className="aboutPage">

        <section className="about-container">
          <br></br><br></br><h1> A B O U T &nbsp; B R A I N  &nbsp; S T R O K E S </h1>

          <p>
            A stroke is damage to the brain from interruption of its blood supply. It is a medical emergency
          </p>

          <p>
            Symptoms of stroke include trouble walking, speaking and understanding, as well as paralysis or numbness of the face, arm or leg.          </p>
          <p>
            Early treatment with medication like tPA (clot buster) can minimise brain damage. Other treatments focus on limiting complications and preventing additional strokes.
          </p>
        </section>


        <section className="testimonial">

          <h1> M A J O R  &nbsp; C A U S E S </h1>

          <section className="testimonial-container">
            <article>
              <img src={Bmi} />
              <h2>B M I</h2>
              <p>Obesity increases risk for stroke by several distinct mechanisms including diabetes mellitus, hypertension, accelerated atherosclerosis, atrial fibrillation, and obstructive sleep apnea. The end result may be progressive atherosclerosis and or or thromboembolism that may result in arterial occlusion or rupture.</p>
            </article>
            <article>
              <img src={Age} />
              <h2>A G E</h2>
              <p>The older you are, the more likely you are to have a stroke. The chance of having a stroke about doubles every 10 years after age 55. Although stroke is common among older adults, many people younger than 65 years also have strokes.</p>
            </article>
          </section>

          <section className="testimonial-container">
            <article>
              <img src={Smoke}></img>
              <h2>S M O K I N G</h2>
              <p>Smoking is a major cause of cardiovascular disease (CVD) and causes one of every four deaths from CVD. Secondhand smoke increases the risk for stroke by 20−30%. Each year, secondhand smoke exposure causes more than 8,000 deaths from stroke.</p>
            </article>
            <article>
              <img src={Glucose} alt="goldie-testimonial"></img>
              <h2>D I A B E T E S</h2>
              <p>Diabetes is a well-established risk factor for stroke. It can cause pathologic changes in blood vessels at various locations and can lead to stroke if cerebral vessels are directly affected. Additionally, mortality is higher and poststroke outcomes are poorer in patients with stroke with uncontrolled glucose levels. </p>
            </article>
          </section>




        </section>
      </div>






      <div className="form-box">


        <form >
          <div className="field1">

            <h1>E N T E R  &nbsp; D E T A I L S</h1>
            <h1>T O  &nbsp; F I N D &nbsp; C H A N C E S &nbsp; O F &nbsp; S T R O K E</h1>
            <input type='text' name="Name" id="name" placeholder="Name"></input><br></br>
            <input type="text" id="gender" placeholder="Gender" list="genders" />
            <datalist id="genders">
              <option>Male</option>
              <option>Female</option>
            </datalist><br></br>
            <input type='number' name="Age" id="age" placeholder="Age"></input><br></br>
            <input type='text' id="hypertension" placeholder="Hypertension (1 if true 0 if false)" list="hyper"></input><br></br>
            <datalist id="hyper">
              <option>0</option>
              <option>1</option>
            </datalist><br></br>
            <input type='text' id="heart" placeholder="Heart disease (1 if true 0 if false)" list="heartlist"></input><br></br>
            <datalist id="heartlist">
              <option>0</option>
              <option>1</option>
            </datalist><br></br>
            <input type='text' id="marital" placeholder="Marital Status" list="maritallist"></input><br></br>
            <datalist id="maritallist">
              <option>Yes</option>
              <option>No</option>
            </datalist><br></br>
            <input type='text' id="work" placeholder="Work status" list="worklist"></input><br></br>
            <datalist id="worklist">
              <option>Private</option>
              <option>Self-employed</option>
              <option>Govt-job</option>
              <option>Children</option>
              <option>Never worked</option>
            </datalist><br></br>
            <input type='text' id="residence" placeholder="Residence type" list="residencelist"></input><br></br>
            <datalist id="residencelist">
              <option>Urban</option>
              <option>Rural</option>
            </datalist><br></br>
            <input type='number' name="Glucose" id="glucose" placeholder="Glucose Level"></input><br></br>
            <input type='number' name="BMI" id="bmi" placeholder="BMI"></input><br></br>
            <input type='text' id="smoking" placeholder="Smoking Status" list="smokinglist"></input><br></br>
            <datalist id="smokinglist">
              <option>smokes</option>
              <option>never smoked</option>
              <option>formerly smoked</option>
              <option>Unknown</option>
            </datalist><br></br>

            <button type="button" className="submit" onClick={sendUserInfo}>Submit</button>
          </div>
        </form>
      </div>

      {/* <header className="App-header">
        <h1>React and flask</h1>
        
        <h5>Name: </h5><input type='text' name="Name" id="name"></input><br></br>
        <h5>Gender: </h5><input type='text' name="Gender" id="gender"></input><br></br>
        <h5>Age: </h5><input type='number' name="Age" id="age"></input><br></br>
        <h5>Hypertension: </h5><input type='text' name="Hypertension" id="hypertension"></input><br></br>
        <h5>Heart disease: </h5><input type='text' name="Heart disease" id="heart"></input><br></br>
        <h5>Ever Married?: </h5><input type='text' name="Marriage" id="marital"></input><br></br>
        <h5>Work type: </h5><input type='text' name="Work" id="work"></input><br></br>
        <h5>Residence: </h5><input type='text' name="Residence" id="residence"></input><br></br>
        <h5>Avg glucose level: </h5><input type='number' name="Glucose" id="glucose"></input><br></br>
        <h5>BMI: </h5><input type='number' name="BMI" id="bmi"></input><br></br>
        <h5>Smoking status: </h5><input type='text' name="Smoking" id="smoking"></input><br></br>

        <button type="button" onClick={sendUserInfo}>Submit</button>
      </header> */}
    </div>
  );
}

export default App;
