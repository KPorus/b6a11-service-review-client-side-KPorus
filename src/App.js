import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import route from './Route/Router';


function App() {
  return (
    <div>
       <RouterProvider router={route} />
      <Toaster />
    </div>
  );
}

export default App;
