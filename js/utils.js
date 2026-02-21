// Utilidades generales
const utils = {
  // Formatear fecha
  formatDate: (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  },
  
  // Formatear fecha y hora
  formatDateTime: (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  },
  
  // Formatear hora
  formatTime: (timeString) => {
    if (!timeString) return '';
    return timeString.substring(0, 5); // HH:mm
  },
  
  // Obtener día de la semana en español
  getDayName: (dateString) => {
    const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const date = new Date(dateString);
    return days[date.getDay()];
  },
  
  // Validar email
  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  
  // Validar hora (HH:mm)
  validateTime: (time) => {
    const re = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    return re.test(time);
  },
  
  // Validar fecha (YYYY-MM-DD)
  validateDate: (date) => {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    if (!re.test(date)) return false;
    const d = new Date(date);
    return d instanceof Date && !isNaN(d);
  },
  
  // Mostrar mensaje de éxito
  showSuccess: (message) => {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success';
    alertDiv.textContent = message;
    alertDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; padding: 15px 20px; background: linear-gradient(135deg, #6b8e23 0%, #556b2f 100%); color: white; border-radius: 5px; box-shadow: 0 4px 15px rgba(107, 142, 35, 0.4); font-weight: 500;';
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
      alertDiv.style.opacity = '0';
      alertDiv.style.transition = 'opacity 0.3s';
      setTimeout(() => alertDiv.remove(), 300);
    }, 3000);
  },
  
  // Mostrar mensaje de error
  showError: (message) => {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-error';
    alertDiv.textContent = message;
    alertDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 9999; padding: 15px 20px; background: linear-gradient(135deg, #dc143c 0%, #b8122a 100%); color: white; border-radius: 5px; box-shadow: 0 4px 15px rgba(220, 20, 60, 0.4); font-weight: 500;';
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
      alertDiv.style.opacity = '0';
      alertDiv.style.transition = 'opacity 0.3s';
      setTimeout(() => alertDiv.remove(), 300);
    }, 4000);
  },
  
  // Mostrar loading
  showLoading: (element) => {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element) {
      element.innerHTML = '<div class="loading-spinner"></div>';
    }
  },
  
  // Ocultar loading
  hideLoading: (element) => {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (element) {
      const spinner = element.querySelector('.loading-spinner');
      if (spinner) spinner.remove();
    }
  },
  
  // Confirmar acción
  confirm: (message) => {
    return confirm(message);
  },
  
  // Redirigir
  redirect: (url) => {
    window.location.href = url;
  },
  
  // Obtener parámetro de URL
  getUrlParam: (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  },
  
  // Capitalizar primera letra
  capitalize: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
  
  // Obtener nombre del rol en español
  getRoleName: (role) => {
    const roles = {
      'admin': 'Administrador',
      'profesor': 'Profesor',
      'estudiante': 'Estudiante'
    };
    return roles[role] || role;
  },
  
  // Obtener nombre del estado en español
  getEstadoName: (estado) => {
    const estados = {
      'pendiente': 'Pendiente',
      'aceptada': 'Aceptada',
      'rechazada': 'Rechazada',
      'cancelada': 'Cancelada',
      'programada': 'Programada',
      'en_curso': 'En Curso',
      'completada': 'Completada',
      'activo': 'Activo',
      'inactivo': 'Inactivo',
      'activa': 'Activa',
      'inactiva': 'Inactiva'
    };
    return estados[estado] || estado;
  }
};

// Exportar para uso global
window.utils = utils;
