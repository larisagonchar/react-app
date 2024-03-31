import { RouterProvider } from 'react-router-dom';
import './styles/reset.css';
import { router } from './App.router';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
