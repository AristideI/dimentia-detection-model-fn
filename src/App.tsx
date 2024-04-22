import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";

export default function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={route} />;
}
