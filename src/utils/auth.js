// token
const TokenKey = 'x-auth-token'

// 获取token
export function getToken () {
  return sessionStorage.getItem(TokenKey)
}

// 设置token
export function setToken (token) {
  return sessionStorage.setItem(TokenKey, token)
}
