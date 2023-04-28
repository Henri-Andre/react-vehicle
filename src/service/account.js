let saveToken = (token) => {
    localStorage.setItem('token',token)
}

let logged = () => {
    return !!localStorage.getItem('token');
  };

let logout = () => {
    localStorage.removeItem('token')
    return !!token
}

export const accountService = {
  saveToken , logged , logout
}