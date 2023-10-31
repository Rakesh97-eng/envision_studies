import LoginPage from "../../../components/common/login/LoginPage"
import { PATH } from "../../../utils/constants/path";

const AdminLoginPage = ()=>{
return(
    <LoginPage navigateTo={PATH.adminUsers}/>
)
}
export default AdminLoginPage;