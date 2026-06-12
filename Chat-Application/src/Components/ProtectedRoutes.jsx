import { Navigate } from "react-router-dom"


function ProtectedRoutes({component}) {
const token = localStorage.getItem("token");

return token ? component : <Navigate to={'/login'}/>


}

export default ProtectedRoutes