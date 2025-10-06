import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useContext } from 'react';
import { MyContext } from './context/MyProvider.jsx';
import StageOne from './components/StageOne.jsx';
import StageTwo from './components/StageTwo.jsx';

const App = () => {
  const context = useContext(MyContext)
  return (
   <>
     <div className="wrapper">
       <div className="center-wrapper">
         <h1>Who pays the bill?</h1>
         {context.stage === 1 ? <StageOne /> : <StageTwo />}
       </div>
      </div>
    </>
  );
};

export default App;




