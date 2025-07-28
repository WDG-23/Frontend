import { Route, Routes } from "react-router";
import { MainLayout } from "./layouts";
import { About, Contact, Destinations, Home, DestDetails } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:slug" element={<DestDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
