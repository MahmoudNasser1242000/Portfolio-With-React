import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Error from './components/error-page/Error';

function App() {
  const router = createBrowserRouter([{
    path: "", element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path: "portfolio", element: <Portfolio/>},
      {path: "about", element: <About/>},
      {path: "contact", element: <Contact/>},
      {path:"*", element: <Error/>}
    ]
  }]);
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
