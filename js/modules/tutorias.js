// Módulo de Tutorías
const tutoriasModule = {
  // Listar tutorías
  listar: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.tutorId) params.append('tutorId', filters.tutorId);
      if (filters.estado) params.append('estado', filters.estado);
      if (filters.fecha) params.append('fecha', filters.fecha);
      
      const query = params.toString();
      const endpoint = query ? `/tutorias?${query}` : '/tutorias';
      return await api.get(endpoint);
    } catch (error) {
      throw error;
    }
  },
  
  // Obtener tutoría por ID
  obtener: async (id) => {
    try {
      return await api.get(`/tutorias/${id}`);
    } catch (error) {
      throw error;
    }
  },
  
  // Asignar tutor automáticamente
  asignarAutomatico: async (solicitudId) => {
    try {
      return await api.post(`/tutorias/asignar/${solicitudId}`);
    } catch (error) {
      throw error;
    }
  },
  
  // Asignar tutor manualmente
  asignarManual: async (solicitudId, tutorId) => {
    try {
      return await api.post('/tutorias/asignar-manual', {
        solicitudId,
        tutorId
      });
    } catch (error) {
      throw error;
    }
  },
  
  // Actualizar estado
  actualizarEstado: async (id, estado) => {
    try {
      return await api.patch(`/tutorias/${id}/estado`, { estado });
    } catch (error) {
      throw error;
    }
  }
};

window.tutoriasModule = tutoriasModule;
