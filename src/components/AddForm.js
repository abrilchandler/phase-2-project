import React, { useState } from "react";
// calling useState declares a "state variable", 
// useState returns the [current state, function the updates current state] 
// call setState in a function to update
function AddForm({ setData, data}) {
  const [name, setName] = useState(''); //array destructuring
  const [titles, setTitles] = useState(0); // array destructuring
  const [era, setEra] = useState(""); // array destructuring

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      titles,
      era
    };
    
    fetch('http://localhost:4000/bodybuilders', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(formData)
})
.then(response => response.json())
.then(newItem => setData([...data, newItem]));

setTitles(0);
setEra('');
setName('');
  }

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit} method="post">
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" value={name}></input>
       
        <br></br>
        <input onChange={(e) => setTitles(e.target.value)} type="text" placeholder="# of titles" value={titles}></input>
        <br></br>
        <select onChange={(e) => setEra(e.target.value)} type="dropdown" placeholder="Era" value={era}>
          <option value="">Select the Era</option>
          <option value="golden">Golden Era</option>
          <option value="bronze">Bronze Era</option>
          <option value="modern">Modern Era</option>
          <option value="mass monster">Mass Monster Era</option>
        </select>
        <button type="submit">Submit</button>
        </form>      
      </section>
    </div>
  )
}

export default AddForm;