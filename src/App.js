import './App.css';
import Barra from './barra/BarraApp'
import List from './items/ItemLIst'
import Item from './items/ItemsApp'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Barra />
      </header>
      <div>
        <List />
      </div>
      <div>
      <Route path="/:id">
              <Item />
      </Route>
      </div>
    </div>
  );
}

export default App;
