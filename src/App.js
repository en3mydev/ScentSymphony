import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Men from "./pages/Men";
import PerfumeDetail from "./components/PerfumeDetail";
import Women from "./pages/Women";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import About from "./pages/About";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Protected from "./components/Protected";
import Brands from "./pages/Brands";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="perfume/:id" element={<PerfumeDetail />} />
          <Route path="about" element={<About />} />
          <Route path="brands" element={<Brands />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<SignIn />} />
          <Route element={<Protected />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
