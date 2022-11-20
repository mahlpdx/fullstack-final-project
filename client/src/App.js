import logo from "./logo.svg";
import './index.css'

const App = () => {
  return (
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" 
             alt="logo" />
          
        <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
      </header>
    </div>

  );
}

export default App;
