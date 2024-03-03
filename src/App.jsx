import { 
  createBrowserRouter,
   RouterProvider 
  } from "react-router-dom";

import Introduction from './components/Introduction';
import ProjectList from "./components/ProjectList";
import Home from './components/Home';

function App() {
  const routes = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/projects',
      element: <ProjectList />
    }
  ];

  const router = createBrowserRouter(routes);
  return (
    <div className="page-container">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
