// import Home from './pages/Home';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Home/>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AllFlights from './pages/AllFlights';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Routes>
          <Route exact path='/' element={Home}/>
          <Route path='/allFlights' element={AllFlights}/>
        </Routes>
      </div>
    )
    return (
        <App/>
    );
  }
}

export default App;