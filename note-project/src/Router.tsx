import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Layout from "./components/Layout/Layout";
import Write from "./pages/Write/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="write" element={<Write />} />
          <Route path="write/:id" element={<Write />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
