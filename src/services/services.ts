import axios from 'axios';
import { SetStateAction } from 'react';
import UserCadastro from '../models/UserCadastro';

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
});

export const cadastroUsuario = async (url: string, dados: { nome: string, usuario: string, senha: string }, setDado: React.Dispatch<React.SetStateAction<UserCadastro>>) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
};

export const login = async (url: string, dados: {usuario: string, senha: string}, setDado: React.Dispatch<string>) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
};