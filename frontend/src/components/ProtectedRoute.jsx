import { Navigate } from "react-router-dom";
import { useAuth } from "../context/userAuthenticateContext";


export const ProtectedRoute = ({children}) => {
    const {isAuthenticated, loading} = useAuth()
 
    if (loading) return <div>Is Checking</div>

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />
    }

    return children
}