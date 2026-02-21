// Módulo de Solicitudes
const solicitudesModule = {
  // Listar solicitudes
  listar: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.estudianteId) params.append('estudianteId', filters.estudianteId);
      if (filters.materiaId) params.append('materiaId', filters.materiaId);
      if (filters.estado) params.append('estado', filters.estado);
      
      const query = params.toString();
      const endpoint = query ? `/solicitudes?${query}` : '/solicitudes';
      return await api.get(endpoint);
    } catch (error) {
      throw error;
    }
  },
  
  // Obtener solicitud por ID
  obtener: async (id) => {
    try {
      return await api.get(`/solicitudes/${id}`);
    } catch (error) {
      throw error;
    }
  },
  
  // Crear solicitud
  crear: async (data) => {
    try {
      return await api.post('/solicitudes', data);
    } catch (error) {
      throw error;
    }
  },
  
  // Actualizar estado
  actualizarEstado: async (id, estado) => {
    try {
      return await api.patch(`/solicitudes/${id}/estado`, { estado });
    } catch (error) {
      throw error;
    }
  },
  
  // Eliminar solicitud
  eliminar: async (id) => {
    try {
      return await api.delete(`/solicitudes/${id}`);
    } catch (error) {
      throw error;
    }
  }
};

window.solicitudesModule = solicitudesModule;
