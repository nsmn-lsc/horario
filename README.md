# 📚 Horario de Clases - Sitio Web Estático

Un sitio web moderno, colorido y divertido para mostrar tu horario de clases de manera interactiva.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz atractiva con gradientes y animaciones
- 📱 **Responsive**: Se adapta perfectamente a dispositivos móviles
- 🎯 **Interactivo**: Haz clic en las clases para ver detalles completos
- ➕ **Agregar Clases**: Formulario para añadir nuevas clases fácilmente
- 🎉 **Efectos Visuales**: Animaciones, confeti y efectos de hover
- 📅 **Vista Flexible**: Cambia entre vista de semana completa y día actual
- 🎨 **Colores Personalizables**: Cada clase puede tener su propio color

## 🚀 Despliegue en Render

Este sitio está configurado para desplegarse fácilmente en Render:

1. **Conecta tu repositorio** a Render
2. **Selecciona "Static Site"** como tipo de servicio
3. **Render detectará automáticamente** la configuración desde `render.yaml`
4. **¡Tu sitio estará listo!** 🎉

## 📁 Estructura del Proyecto

```
horario/
├── index.html          # Página principal
├── styles.css          # Estilos CSS con animaciones
├── script.js           # JavaScript para interactividad
├── render.yaml         # Configuración para Render
├── README.md           # Este archivo
└── assets/
    └── horario.xlsx    # Tu archivo de horario original
```

## 🎨 Personalización

### Modificar Clases Existentes
Edita el array `scheduleData` en `script.js` para cambiar las clases:

```javascript
let scheduleData = [
    {
        name: "Matemáticas",
        day: "lunes",
        startTime: "08:00",
        endTime: "09:30",
        teacher: "Prof. García",
        room: "Aula 101",
        color: "#FF6B6B"
    },
    // ... más clases
];
```

### Cambiar Horarios
Modifica el array `timeSlots` en `script.js`:

```javascript
const timeSlots = [
    "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
    // ... más horarios
];
```

### Personalizar Colores
Cambia los colores en el array `classColors`:

```javascript
const classColors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#DDA0DD", "#F7DC6F", "#85C1E9"
];
```

## 🎯 Funcionalidades

### Vista de Semana
- Muestra todas las clases de la semana
- Cada clase tiene su color distintivo
- Información completa al hacer clic

### Vista de Día
- Enfoca solo en el día actual
- Perfecto para ver qué tienes hoy

### Agregar Clases
- Formulario intuitivo
- Validación de datos
- Colores personalizables

### Efectos Visuales
- Animaciones suaves
- Efectos de hover
- Confeti al cargar la página
- Mensajes de éxito animados

## 📱 Responsive Design

El sitio se adapta perfectamente a:
- 📱 Teléfonos móviles
- 📱 Tablets
- 💻 Computadoras de escritorio
- 🖥️ Pantallas grandes

## 🎨 Paleta de Colores

- **Primario**: Gradientes azul-púrpura
- **Secundario**: Verde vibrante
- **Acentos**: Naranja y otros colores brillantes
- **Fondo**: Gradiente degradado

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Interactividad y funcionalidades
- **Font Awesome**: Iconos profesionales
- **Google Fonts**: Tipografía Poppins

## 📝 Notas Importantes

- El archivo `horario.xlsx` original se mantiene en la carpeta `assets/`
- Puedes actualizar los datos directamente en `script.js`
- El sitio es completamente estático, no requiere servidor
- Compatible con todos los navegadores modernos

## 🎉 ¡Disfruta tu nuevo horario interactivo!

¡Tu horario de clases nunca había sido tan divertido y fácil de usar! 🎓✨
