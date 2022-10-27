
import { Provider } from 'react-redux';
import './App.css';
import { store } from './Redux';
import TasksHeader from './TasksHeader';
import TaksList from './TaksList';
import TasksForm from './TasksForm';





function App() {
  return (

   <Provider store={store}>
    <div className="container">
      <article>
    <TasksHeader/>
    <TaksList/>

    <footer>
     <TasksForm/>
    </footer>
    </article>

    </div>
    </Provider>
  );
}

export default App;

