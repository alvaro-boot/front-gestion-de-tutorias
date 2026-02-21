// Módulo de Especialidades
const especialidadesModule = {
  // Listar especialidades
  listar: async (usuarioId = null) => {
    try {
      const endpoint = usuarioId ? `/especialidades?usuarioId=${usuarioId}` : '/especialidades';
      return await api.get(endpoint);
    } catch (error) {
      throw error;
    }
  },
  
  // Obtener especialidad por ID
  obtener: async (id) => {
    try {
      return await api.get(`/especialidades/${id}`);
    } catch (error) {
      throw error;
    }
  },
  
  // Crear especialidad
  crear: async (data) => {
    try {
      return await api.post('/especialidades', data);
    } catch (error) {
      throw error;
    }
  },
  
  // Eliminar especialidad
  eliminar: async (id) => {
    try {
      return await api.delete(`/especialidades/${id}`);
    } catch (error) {
      throw error;
    }
  }
};

window.especialidadesModule = especialidadesModule;
