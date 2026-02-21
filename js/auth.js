// Funcionalidad de autenticación
const auth = {
  // Login
  login: async (correo, contraseña) => {
    try {
      const response = await api.post('/auth/login', {
        correo,
        contraseña
      });
      
      storage.setToken(response.access_token);
      storage.setUser(response.usuario);
      
      return response;
    } catch (error) {
      throw error;
    }
  },
  
  // Logout
  logout: () => {
    storage.clear();
    // Redirigir a index.html desde cualquier ubicación
    const currentPath = window.location.pathname;
    if (currentPath.includes('/pages/')) {
      window.location.href = '../index.html';
    } else {
      window.location.href = 'index.html';
    }
  },
  
  // Verificar autenticación
  checkAuth: () => {
    if (!storage.isAuthenticated()) {
      const currentPath = window.location.pathname;
      if (currentPath.includes('/pages/')) {
        window.location.href = '../index.html';
      } else {
        window.location.href = 'index.html';
      }
      return false;
    }
    return true;
  },
  
  // Obtener perfil
  getProfile: async () => {
    try {
      const profile = await api.get('/auth/profile');
      storage.setUser(profile);
      return profile;
    } catch (error) {
      if (error.status === 401) {
        auth.logout();
      }
      throw error;
    }
  },
  
  // Cambiar contraseña
  changePassword: async (oldPassword, newPassword) => {
    try {
      const response = await api.post('/auth/change-password', {
        oldPassword,
        newPassword
      });
      return response;
    } catch (error) {
      throw error;
    }
  },
  
  // Verificar si tiene rol
  hasRole: (role) => {
    const user = storage.getUser();
    if (!user || !user.roles) return false;
    return user.roles.includes(role);
  },
  
  // Verificar si es admin
  isAdmin: () => {
    return auth.hasRole('admin');
  },
  
  // Verificar si es profesor
  isProfesor: () => {
    return auth.hasRole('profesor');
  },
  
  // Verificar si es estudiante
  isEstudiante: () => {
    return auth.hasRole('estudiante');
  },
  
  // Redirigir según rol
  redirectByRole: () => {
    const user = storage.getUser();
    if (!user || !user.roles) {
      window.location.href = 'index.html';
      return;
    }
    
    if (user.roles.includes('admin')) {
      window.location.href = 'pages/dashboard.html';
    } else if (user.roles.includes('profesor')) {
      window.location.href = 'pages/dashboard.html';
    } else if (user.roles.includes('estudiante')) {
      window.location.href = 'pages/dashboard.html';
    } else {
      window.location.href = 'index.html';
    }
  }
};

// Exportar para uso global
window.auth = auth;
