import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [no, setno] = useState(0);


  const btnplus = () => {
    setno(no + 1)
  }
  const reset = () => {
    setno(0)
  }
  const btnminus = () => {
   if(no>0){
    setno(no - 1)
   }
  }

  useEffect(() => {
    (
      console.log(no)
    )
  }, [no])
  return (


    <>
      <div style={{ backgroundColor: "black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0px auto", height: "100vh", width: "576px", textAlign: "center", color: "white" }}>

        <center>
          <h1 style={{ fontSize: "50px", margin: "-110px 0px 0px 0px" }}>Counter App</h1>
          <h1 style={{ fontSize: "50px", margin: "20px 0px", color: "#a9fff0 " }}>No :- {no}</h1>
          <button style={{ width: "90px", height: "50px", margin: " 10px 20px", borderRadius: "10px", fontSize: "30px" }} onClick={() => btnplus()}>+</button>
          <button style={{ width: "90px", height: "50px", margin: " 10px 20px", borderRadius: "10px", fontSize: "30px" }} onClick={() => reset()}>Reset</button>
          <button style={{ width: "90px", height: "50px", margin: "10px 20px", borderRadius: "10px", fontSize: "30px" }} onClick={() => btnminus()}>-</button>

        </center>
      </div>

    </>

  );
}


export default App;
