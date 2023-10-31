import AppLayout from "../common/appLayout/AppLayout";
import PublicRouter from "./PublicRoute";
import PrivateRouter from "./PrivateRouter";

const RouterConfig = () => {
  return (
    <AppLayout>
      <PublicRouter />
      <PrivateRouter />
    </AppLayout>
  );
};
export default RouterConfig;
