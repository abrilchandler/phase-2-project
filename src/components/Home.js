import React from "react";
import AddForm from "./AddForm.js";


function Home({data, setData}) {


    return (
  <div>    
        <AddForm  setData={setData} data={data}/>
      </div>
    
     
    );
  }

export default Home;