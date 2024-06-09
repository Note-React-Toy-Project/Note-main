import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./pages/Update/Update";
import Create from "./pages/Create/Create";
import Main from "./pages/Main/Main";
import Layout from "./components/Layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="create" element={<Create />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
