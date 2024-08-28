import './App.css'
import Counter from './Counter1';
import Team from './Team';


function App() {

  function handleClick() {
        alert("Click me");
  }

  const addTofive = (num) =>{

    alert(num + 5);

  }

  return (
    <>
          
      <h3>React Core Concept 2</h3>
    {/* ---------------------------------- */}
      <Counter></Counter>
      <Team></Team>



      <button onClick={handleClick}>Click Me</button>
      
      <button onClick={() => addTofive(5)}>Button-4</button>
      
      
    
    </>
  )
}

export default App