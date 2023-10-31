import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./Routes";
import { PATH } from "../../utils/constants/path";

const PublicRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => {
        const Comp = route.component;
        return (
          <Route
            path={route.path}
            Component={Comp}
            key={`route-${route.path}`}
          />
        );
      })}
      {/* <Route path="*" element={<Navigate to={PATH.userLogin} />} replace /> */}
    </Routes>
  );
};

export default PublicRouter;
