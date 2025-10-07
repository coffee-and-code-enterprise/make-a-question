// hooks/useAuth.js
import { useLocalStorage } from "@uidotdev/usehooks";
import { getUserById, loginUser, authUser, updateUser, deleteUser } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export function useAuth() {
	// Armazena token direto no localStorage de forma reativa
	const [token, setToken] = useLocalStorage("token", null);
	const navigate = useNavigate();
	const { setUser } = useUser();

	const login = async (userData) => {
		const result = await loginUser(userData);
		setToken(result?.token);
		return result;
	};

  const auth = async (token) => {
    const authResult = await authUser(token);
    if (!authResult?.userId) return null;
    const userResult = await getUserById(authResult?.userId);
    return userResult;
  }

	const logout = () => {
		setToken(null);
		setUser(null);
    navigate('/login')
	};

	const handleUpdateUser = async (data) => {
		const updated = await updateUser(data, token);
    navigate('/login')
		return updated;
	};

	const handleDeleteUser = async () => {
		const result = await deleteUser(token);
		console.log(result)
		logout(); // limpa storage e estado
	};

	return {
		token,
		login,
    auth,
		logout,
		updateUser: handleUpdateUser,
		deleteUser: handleDeleteUser,
	};
}
