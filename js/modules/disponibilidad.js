// Módulo de Disponibilidad
const disponibilidadModule = {
  // Listar disponibilidades
  listar: async (usuarioId = null) => {
    try {
      const endpoint = usuarioId ? `/disponibilidad?usuarioId=${usuarioId}` : '/disponibilidad';
      return await api.get(endpoint);
    } catch (error) {
      throw error;
    }
  },
  
  // Obtener disponibilidad por ID
  obtener: async (id) => {
    try {
      return await api.get(`/disponibilidad/${id}`);
    } catch (error) {
      throw error;
    }
  },
  
  // Crear disponibilidad
  crear: async (data) => {
    try {
      return await api.post('/disponibilidad', data);
    } catch (error) {
      throw error;
    }
  },
  
  // Actualizar disponibilidad
  actualizar: async (id, data) => {
    try {
      return await api.patch(`/disponibilidad/${id}`, data);
    } catch (error) {
      throw error;
    }
  },
  
  // Eliminar disponibilidad
  eliminar: async (id) => {
    try {
      return await api.delete(`/disponibilidad/${id}`);
    } catch (error) {
      throw error;
    }
  }
};

window.disponibilidadModule = disponibilidadModule;
