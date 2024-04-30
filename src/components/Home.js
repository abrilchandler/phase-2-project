import React, {useEffect, useState} from "react";

function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bodybuilders")
    .then(response => response.body)
    .then(data => {
      setData(data);
    });
    }, []);

    return (
      <div>
              <p>{data.map((bodybuilder) => bodybuilder.name)}</p>
        <h1>Home!</h1>
      </div>
    );
  }

export default Home;