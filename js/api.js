// Configuración de la API
//const API_BASE_URL = 'http://localhost:3000/api';
const API_BASE_URL = 'https://back-gestion-tutorias.onrender.com';

// Función genérica para hacer requests
async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    defaultOptions.headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    // Si la respuesta no es JSON, retornar texto
    const contentType = response.headers.get('content-type');
    let data;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      throw {
        status: response.status,
        message: data.message || data || 'Error en la petición',
        data: data
      };
    }

    return data;
  } catch (error) {
    if (error.status) {
      throw error;
    }
    throw {
      status: 0,
      message: 'Error de conexión con el servidor',
      error: error
    };
  }
}

// Métodos HTTP
const api = {
  get: (endpoint) => apiRequest(endpoint, { method: 'GET' }),
  
  post: (endpoint, data) => apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  patch: (endpoint, data) => apiRequest(endpoint, {
    method: 'PATCH',
    body: JSON.stringify(data),
  }),
  
  delete: (endpoint) => apiRequest(endpoint, { method: 'DELETE' }),
};

// Exportar para uso global
window.api = api;
window.API_BASE_URL = API_BASE_URL;
