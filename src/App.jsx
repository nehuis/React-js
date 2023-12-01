import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greetings={'Bienvenidos'}/>
    </div>
  )
}

export default App
