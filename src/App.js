import data from './data/CategoryData'
import Category from './components/Category';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Category data={data.python_res} />
    </div>
  );
}

export default App;
