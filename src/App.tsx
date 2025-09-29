import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList/TodoList';
import { Provider } from 'react-redux'
import { store } from './store/store';
import AddTask from './pages/TodoList/AddTask/AddTask';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoList />} />
          <Route path='/add' element={<AddTask />} />
          <Route path='/edit' element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
