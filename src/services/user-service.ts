import { apiService } from "./api";

export async function postLogin ({email,password}: LoginParams): Promise<LoginResponse> {
    const response = await apiService.post('/api/user/login', {
        email,
        password
    })

    if (response.status === 200) {
        return response.data
    }

    if (response.status === 401) {
        throw new Error('Usuário ou Senha incorreto')
    }

    throw new Error(' Ocorreu um erro em nossos servidores, tente novamente mais tarde')
    
}

export async function registerService () {
}