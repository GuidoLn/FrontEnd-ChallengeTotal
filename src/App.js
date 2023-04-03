import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ShowButtons from './components/ShowButtons';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowButtons></ShowButtons>}></Route>
      </Routes>
    </BrowserRouter>

    );
}

export default App;
