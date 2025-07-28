import { Outlet } from "react-router";
import { Footer, Navbar } from "../components";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 py-8 mb-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
