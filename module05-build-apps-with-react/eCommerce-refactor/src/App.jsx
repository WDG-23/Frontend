import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import { Home, Cart, Categories } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="categories/:category" element={<Categories />} />
      </Route>
    </Routes>
  );
};

export default App;
