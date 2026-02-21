# Frontend - Gestión de Tutorías

Frontend desarrollado con HTML, CSS y JavaScript vanilla para la gestión de tutorías universitarias.

## Estructura del Proyecto

```
front/
├── index.html                    # Página de login
├── css/
│   ├── styles.css               # Estilos globales
│   ├── auth.css                 # Estilos de autenticación
│   ├── dashboard.css            # Estilos de dashboard
│   └── components.css           # Estilos de componentes
├── js/
│   ├── api.js                   # Configuración y funciones de API
│   ├── auth.js                  # Funcionalidad de autenticación
│   ├── storage.js               # Manejo de localStorage
│   ├── utils.js                 # Utilidades generales
│   └── modules/
│       ├── usuarios.js          # Gestión de usuarios
│       ├── materias.js          # Gestión de materias
│       ├── especialidades.js    # Gestión de especialidades
│       ├── disponibilidad.js   # Gestión de disponibilidad
│       ├── solicitudes.js      # Gestión de solicitudes
│       └── tutorias.js         # Gestión de tutorías
└── pages/
    ├── dashboard.html           # Dashboard principal
    ├── usuarios/                # Módulo de usuarios
    ├── materias/                # Módulo de materias
    ├── especialidades/          # Módulo de especialidades
    ├── disponibilidad/          # Módulo de disponibilidad
    ├── solicitudes/             # Módulo de solicitudes
    └── tutorias/                   # Módulo de tutorías
```

## Características

- ✅ Autenticación JWT
- ✅ Navegación según roles (admin, profesor, estudiante)
- ✅ Interfaz responsive y moderna
- ✅ Validación de formularios
- ✅ Mensajes de éxito/error
- ✅ Gestión completa de todas las entidades
- ✅ Asignación automática y manual de tutores

## Uso

1. Abrir `index.html` en un navegador web
2. Iniciar sesión con las credenciales del administrador
3. Navegar según el rol asignado

## Configuración

El frontend se conecta al backend en `http://localhost:3000/api` por defecto. Para cambiar la URL, edita `js/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:3000/api';
```

## Roles y Permisos

### Administrador
- Gestión completa de usuarios
- Gestión de materias
- Asignación de especialidades
- Asignación de tutores (automático y manual)
- Ver todas las solicitudes y tutorías

### Profesor
- Gestionar disponibilidad
- Ver tutorías asignadas
- Actualizar estado de tutorías

### Estudiante
- Crear solicitudes de tutoría
- Ver mis solicitudes
- Cancelar solicitudes pendientes
- Ver tutorías asignadas

## Notas

- El frontend requiere que el backend esté corriendo en `http://localhost:3000`
- Los tokens JWT se almacenan en localStorage
- Todas las páginas verifican autenticación automáticamente
# front-gestion-de-tutorias
