import React, {useEffect, useState} from "react";

function Home() {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/bodybuilders")
    .then(response => response.json())
    .then(data => {
      setData(data);
    });
    }, []);


    return (
      <div>
        
      {data && data.map(bodybuilder => (
        <option key={bodybuilder.id} value={bodybuilder.id}>{bodybuilder.name}</option>
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
      </div>
      </div>
     
    );
  }

export default Home;