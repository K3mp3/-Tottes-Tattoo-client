import { RouterProvider } from 'react-router';
import './App.css';
import './styles/style.css';
import { router } from './Router';

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
