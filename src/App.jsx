import "./App.css";
import Header from "./components/header.jsx"
import Card from "./components/card.jsx";

function App() {
  let a = true;
  
  if (a) {
    return(
      <>
        <div class="loading">Loading&#8230;</div>
      </>
    )
  }
  

  return (
   <>
      <Header />
      <Card title={"card1"} desc={"simple card description using props"} />
      <Card title={"card2"} desc={"simple card 2 description using props"} />
   </>
  )
}

export default App

