import { Route, Routes } from "react-router";
import { MainLayout } from "./layouts";
import { Details, Home } from "./pages";

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="pokemon/:name" element={<Details />} />
    </Route>
  </Routes>
);

export default App;
