import './App.css';
import Board from './components/board';
import Boxes from './components/boxes'


function App() {
  return (
    <div className='App'>
      <div className='title'>
        <header>Tic Tac Toe</header>
        <p className='subtitle'>GAME</p>
      </div>
      <Board></Board>
      <Boxes></Boxes>
    </div>
  );
}

export default App;
