import React, {useEffect, useState} from "react";
import AddForm from "./AddForm.js";

function Home() {

  const [data, setData] = useState([]);


  useEffect(() => {
    console.log("hi")
    fetch("http://localhost:4000/bodybuilders")
    .then(response => response.json())
    .then(data => {
      setData(data);
    });
    },[]);


    return (
      <div>
        
      {data && data.map(bodybuilder => (
        <option key={bodybuilder.id} value={bodybuilder.id}>{bodybuilder.name}  |  {bodybuilder.titles}</option>
      ))}
      <div>
      
        <AddForm  setData={setData} data={data}/>
      </div>
      </div>
     
    );
  }

export default Home;