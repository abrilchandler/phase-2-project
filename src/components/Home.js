import React from "react";
import AddForm from "./AddForm.js";


function Home({data, setData}) {

    return (
      <div>    
        <h1>Add your favorite bodybuilders to their respective eras</h1>
        <AddForm  setData={setData} data={data}/>
      </div>
    );
  }

export default Home;