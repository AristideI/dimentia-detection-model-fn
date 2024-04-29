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
import AddDoctor from "./pages/forms/AddDoctor";
import PatientPage from "./pages/users/Patients";
import AddPatient from "./pages/forms/AddPatient";
import AddRecord from "./pages/records/AddRecord";
import ProfilePage from "./pages/Profile";
import DashboardLayout from "./components/DashboardLayout";
import AdminPage from "./pages/users/Admin";
import AddAdminForm from "./pages/forms/AddAdminForm";
import RecordsPage from "./pages/records/RecordsPage";
import authLoader from "./utils/loaders/authLoader";
import adminLoader from "./utils/loaders/adminLoader";


export default function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contact" element={<Faq />} />
        <Route element={<DashboardLayout />} loader={authLoader}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="doctors">
            <Route index element={<DoctorsPage />} />
            <Route path="add" element={<AddDoctor />} loader={adminLoader} />
          </Route>
          <Route path="patients">
            <Route index element={<PatientPage />} />
            <Route path="add" element={<AddPatient />} loader={adminLoader} />
            <Route path=":id" element={<RecordsPage />} />
            <Route path=":id/test" element={<AddRecord />} />
            <Route path=":id/:recordId" element={<AddRecord />} />
          </Route>
          <Route path="admins">
            <Route index element={<AdminPage />} loader={adminLoader} />
            <Route path="add" element={<AddAdminForm />} loader={adminLoader} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={route} />;
}
