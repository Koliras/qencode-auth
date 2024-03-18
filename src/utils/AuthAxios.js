import axios from 'axios';

export const AuthAxios = axios.create({
  baseURL: "https://auth-qa.qencode.com/v1/auth",
  headers: { "Content-Type": "application/json" },
})
