import { Route, Routes } from "react-router";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { MainLayout, ProtectedLayout } from "./layouts";
import {
  About,
  Contact,
  Dashboard,
  Home,
  Login,
  UserProfile,
  Users,
} from "./pages";

const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />

            {/* Protected routes */}
            <Route element={<ProtectedLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
