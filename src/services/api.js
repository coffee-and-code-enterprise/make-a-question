import axios from "axios";

const API_BASE_URL = "http://localhost/maq-api/public";

// Criando uma instância do Axios
const api = axios.create({
	baseURL: API_BASE_URL,
});

// POST: método de login de usuário
export const loginUser = async userData => {
	try {
		const response = await api.post("/auth", userData);
		return response.data;
	} catch (error) {
		console.error("Erro ao efetuar o login:", error);
		return null;
	}
};

// GET: método de verificação de login
export const authUser = async token => {
	try {
		const response = await api.get("/auth", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Erro ao verificar autenticação:", error);
		return null;
	}
};

// GET: buscar todos os usuários
export const getUsers = async () => {
	try {
		const response = await api.get("/users");
		return response.data;
	} catch (error) {
		console.error("Erro ao buscar usuários:", error);
		return null;
	}
};

// GET: buscar um usuário pelo ID
export const getUserById = async id => {
	try {
		const response = await api.get(`/users/${id}`);
		return response.data;
	} catch (error) {
		console.error("Erro ao buscar usuário:", error);
		return null;
	}
};

// POST: criar um novo usuário
export const createUser = async userData => {
	try {
		const response = await api.post("/users", userData);
		return response.data;
	} catch (error) {
		console.error("Erro ao criar usuário:", error);
		return null;
	}
};

// PUT: atualizar usuário
export const updateUser = async (userData, token) => {
	try {
		const result = await authUser(token);

		if (!result?.userId) return null;

		const response = await api.put(`/users/${result.userId}`, userData);
		return response.data;
	} catch (error) {
		console.error("Erro ao atualizar usuário:", error);
		return null;
	}
};

// DELETE: remover usuário
export const deleteUser = async token => {
	try {
		const result = await authUser(token);

		if (!result?.userId) return null;

		const response = await api.delete(`/users/${result?.userId}`);
		return response.data;
	} catch (error) {
		console.error("Erro ao deletar usuário:", error);
		return false;
	}
};

// POSTS
// Retorna todos os posts do banco de dados
export const getPosts = async () => {
	try {
		const response = await api.get("/posts");
		return response.data;
	} catch (error) {
		console.error("Erro ao buscar posts:", error);
		return null;
	}
};

// Retorna os posts pelo id de usuário
export const getPostsById = async id => {
	try {
		const response = await api.get(`/posts/user/${id}`);
		return response.data;
	} catch (error) {
		console.error("Erro ao buscar post:", error);
		return null;
	}
};

// Cria um post
export const createPost = async (postData, userId, token) => {
	try {
		const response = await api.post(`/posts/user/${userId}`, postData, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Erro ao criar post:", error);
		return null;
	}
};
