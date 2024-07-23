import './App.css';
// import Product from './Product'; // This import is not used
import User from './User';

function App() {
  return (
      <div className="app">
          <h1>Simple User App</h1>
          <User initialName={"Shraddha"} />
      </div>
  );
}

// Props: props means properties. Properties of components are called props.
export default App;
