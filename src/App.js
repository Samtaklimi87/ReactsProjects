import logo from './logo.svg';
import './App.css';

function App() {
  const HandleNameChange = () => {
    const names =[ 'Sam', 'Mo' ,'Mehdi', 'Sergio'];
    const int  = Math.floor(Math.random() * 4);
    return names[int];
  } 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <p>Hello {HandleNameChange()}</p>
        
      </header>
    </div>
  );
}

export default App;
