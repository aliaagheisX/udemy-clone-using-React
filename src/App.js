import data from './data/CategoryData'
import Card from './components/Card';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Category data={data.python_res} />

    </div>
  );
}

export default App;
