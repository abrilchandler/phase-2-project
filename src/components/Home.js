import React, {useEffect, useState} from "react";
import AddForm from "./AddForm.js";

function Home() {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/bodybuilders")
    .then(response => response.json())
    .then(data => {
      setData(data);
    });
    }, console.log("hi"), []);


    return (
      <div>
        
      {data && data.map(bodybuilder => (
        <option key={bodybuilder.id} value={bodybuilder.id}>{bodybuilder.name}  |  {bodybuilder.titles}</option>
      ))}
      <div>
      <section>
          <form>
            <input type="text" placeholder="Name"></input>
            <br></br>
            <input type="text" placeholder="image url"></input>
            <br></br>
            <input type="text" placeholder="titles"></input>
            <br></br>
            <input type="submit"></input>
          </form>
        </section>
        <AddForm />
      </div>
      </div>
     
    );
  }

export default Home;