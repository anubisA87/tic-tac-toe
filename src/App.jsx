import './App.css';
import Board from './components/board';


function App() {
  return (
    <div className='App'>
      <div className='title'>
        <header>Tic Tac Toe</header>
        <p className='subtitle'>GAME</p>
      </div>
      <Board></Board>
    </div>
  );
}

export default App;
