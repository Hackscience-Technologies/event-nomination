// src/App.js
import NominationForm from './components/NominationForm'
import './App.css';
import { EVENT_IMAGE } from './config';

const App = () => {
  return (
    <div className="mainscreen">
      <div className="card">
        <div className="leftside">
          <img src={EVENT_IMAGE} className="product" alt="Shoes" />
        </div>
        <div className="rightside">
          <NominationForm />
        </div>
      </div>
    </div>
  );
};

export default App;
