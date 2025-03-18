import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies/:title" element={<Detail />} />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
