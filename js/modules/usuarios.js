// Módulo de Usuarios
const usuariosModule = {
  // Listar usuarios
  listar: async () => {
    try {
      return await api.get('/usuarios');
    } catch (error) {
      throw error;
    }
  },
  
  // Obtener usuario por ID
  obtener: async (id) => {
    try {
      return await api.get(`/usuarios/${id}`);
    } catch (error) {
      throw error;
    }
  },
  
  // Crear usuario
  crear: async (data) => {
    try {
      return await api.post('/usuarios', data);
    } catch (error) {
      throw error;
    }
  },
  
  // Actualizar usuario
  actualizar: async (id, data) => {
    try {
      return await api.patch(`/usuarios/${id}`, data);
    } catch (error) {
      throw error;
    }
  },
  
  // Eliminar usuario
  eliminar: async (id) => {
    try {
      return await api.delete(`/usuarios/${id}`);
    } catch (error) {
      throw error;
    }
  },
  
  // Asignar rol
  asignarRol: async (usuarioId, rolId) => {
    try {
      return await api.post(`/usuarios/${usuarioId}/asignar-rol`, { rolId });
    } catch (error) {
      throw error;
    }
  },
  
  // Remover rol
  removerRol: async (usuarioId, rolId) => {
    try {
      return await api.delete(`/usuarios/${usuarioId}/remover-rol/${rolId}`);
    } catch (error) {
      throw error;
    }
  }
};

window.usuariosModule = usuariosModule;
