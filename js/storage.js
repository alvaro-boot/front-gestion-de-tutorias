// Manejo de localStorage
const storage = {
  // Token
  setToken: (token) => {
    localStorage.setItem('token', token);
  },
  
  getToken: () => {
    return localStorage.getItem('token');
  },
  
  removeToken: () => {
    localStorage.removeItem('token');
  },
  
  // Usuario
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  },
  
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
  removeUser: () => {
    localStorage.removeItem('user');
  },
  
  // Limpiar todo
  clear: () => {
    localStorage.clear();
  },
  
  // Verificar si está autenticado
  isAuthenticated: () => {
    return !!storage.getToken() && !!storage.getUser();
  }
};

// Exportar para uso global
window.storage = storage;
