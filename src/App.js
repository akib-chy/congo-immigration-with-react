import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Page/HomePage/HomePage";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import PageNotFound from "./Shared/NotFoundPage/PageNotFound";
import About from "./Page/About/About";
import Blogs from "./Page/Blogs/Blogs";
import Login from "./Page/Login/Login";
import SignUp from "./Page/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
