import underConstruction from "./assets/under-construction.png"
import "./css/App.css"
function App(): JSX.Element {
  return (
    <>
      <main className = "container" >
        <h1> Oops! I'm under construction!</h1>
        <h2> I'm sure it's worth the wait...</h2>
        <img src={underConstruction} alt="under-construction" />
      </main>
    </>
  );
}

export default App;
