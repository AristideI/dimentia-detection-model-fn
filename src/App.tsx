import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";
import Faq from "./pages/Faq";
import DashboardPage from "./pages/Dashboard";
import DoctorsPage from "./pages/users/Doctors";
import AddDoctor from "./pages/users/AddDoctor";
import PatientPage from "./pages/users/Patients";
import AddPatient from "./pages/users/AddPatient";
import RecordsPage from "./pages/records/RecordsPage";
import AddRecord from "./pages/records/AddRecord";
import ProfilePage from "./pages/Profile";
import DashboardLayout from "./components/DashboardLayout";

export default function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contact" element={<Faq />} />
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="doctors">
            <Route index element={<DoctorsPage />} />
            <Route path="addDoc" element={<AddDoctor />} />
          </Route>
          <Route path="patients">
            <Route index element={<PatientPage />} />
            <Route path="addDoc" element={<AddPatient />} />
          </Route>
          <Route path="records">
            <Route index element={<RecordsPage />} />
            <Route path="addRecord" element={<AddRecord />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={route} />;
}
