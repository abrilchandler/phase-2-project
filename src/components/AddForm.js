import React, { useState } from "react";

function AddForm({ setData, data}) {
  const [name, setName] = useState('');
  const [titles, setTitles] = useState(0);
  const [era, setEra] = useState("");

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
          <option>Golden</option>
          <option>Bronze</option>
          <option>Modern</option>
          <option>Mass Monster</option>
        </select>
        <button type="submit">Submit</button>
        </form>      
      </section>
    </div>
  )
}

export default AddForm;