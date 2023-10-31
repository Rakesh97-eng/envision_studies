import { Route, Routes } from "react-router-dom";
import NavLayout from "../common/navLayout/NavLayout";
import { privateRoutes } from "./Routes";

const PrivateRouter = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => {
        const { Component, path, key, isAdmin = false } = route;
        return (
          <Route key={key} element={<NavLayout isAdmin={isAdmin} />}>
            <Route path={path} Component={Component} />
          </Route>
        );
      })}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default PrivateRouter;
