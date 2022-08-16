import { useContext } from "react";
import AuthContext from "src/contexts/Auth";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;