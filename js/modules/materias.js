// Módulo de Materias
const materiasModule = {
  // Listar materias
  listar: async () => {
    try {
      return await api.get('/materias');
    } catch (error) {
      throw error;
    }
  },
  
  // Obtener materia por ID
  obtener: async (id) => {
    try {
      return await api.get(`/materias/${id}`);
    } catch (error) {
      throw error;
    }
  },
  
  // Crear materia
  crear: async (data) => {
    try {
      return await api.post('/materias', data);
    } catch (error) {
      throw error;
    }
  },
  
  // Actualizar materia
  actualizar: async (id, data) => {
    try {
      return await api.patch(`/materias/${id}`, data);
    } catch (error) {
      throw error;
    }
  },
  
  // Eliminar materia
  eliminar: async (id) => {
    try {
      return await api.delete(`/materias/${id}`);
    } catch (error) {
      throw error;
    }
  }
};

window.materiasModule = materiasModule;
