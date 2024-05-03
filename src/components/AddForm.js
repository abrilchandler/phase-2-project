import React, { useState } from "react";

function AddFormData() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [titles, setTitles] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      image,
      titles
    };
    fetch('http://localhost:4000/bodybuilders', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => console.log('POST request successful:', data))
  }

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" value={name}></input>
        <br></br>
        <input onChange={(e) => setImage(e.target.value)} type="text" placeholder="Image url" value={image}></input>
        <br></br>
        <input onChange={(e) => setTitles(e.target.value)} type="number" placeholder="# of titles" value={titles}></input>
        <button type="submit">Submit</button>
        </form>      
      </section>
    </div>
  )
}

export default AddFormData