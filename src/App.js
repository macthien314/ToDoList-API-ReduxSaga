import logo from './logo.svg';
import './App.css';
import Todolist from './pages/Todolist';
import LoadingComponent from './components/LoadingComponent';

function App() {
  return (
    <>
      <LoadingComponent />
      <Todolist>

      </Todolist>
    </>

  );
}

export default App;
