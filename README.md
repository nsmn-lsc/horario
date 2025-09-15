# 📚 Horario de Clases - Sitio Web Estático

Un sitio web moderno, tecnológico y optimizado para mostrar tu horario de clases de manera interactiva.

## ✨ Características

- 🎨 **Diseño Tecnológico**: Tema oscuro con colores cian y verde vibrantes
- 📱 **Responsive Optimizado**: Diseño específicamente optimizado para móviles
- 🎯 **Interactivo**: Haz clic en las clases para ver detalles completos
- 🎉 **Efectos Visuales**: Animaciones, confeti y efectos de hover
- 📅 **Vista Flexible**: Cambia entre vista de semana completa y día actual
- 🎨 **Colores Tecnológicos**: Paleta de colores vibrantes y contrastantes
- 📊 **Información del Grupo**: Datos completos del semestre y carrera
- 🔗 **Recursos de Programación**: Footer con enlaces útiles para estudiantes
- ⚡ **Navegación Mejorada**: Sin recargas de página entre vistas

## 🚀 Despliegue en Render

Este sitio está configurado para desplegarse fácilmente en Render:

1. **Conecta tu repositorio** a Render
2. **Selecciona "Static Site"** como tipo de servicio
3. **Render detectará automáticamente** la configuración desde `render.yaml`
4. **¡Tu sitio estará listo!** 🎉

## 📁 Estructura del Proyecto

```
horario/
├── index.html              # Página principal con tema tecnológico
├── styles.css              # Estilos CSS optimizados para móviles
├── script.js               # JavaScript con navegación mejorada
├── render.yaml             # Configuración para Render
├── README.md               # Este archivo
├── test_local.html         # Página de pruebas locales
├── test_correcciones.md    # Guía de pruebas y correcciones
└── assets/
    └── horario.xlsx        # Archivo de horario original
```

## 🎨 Personalización

### Modificar Clases Existentes
Edita el array `scheduleData` en `script.js` para cambiar las clases:

```javascript
let scheduleData = [
    {
        name: "Pensamiento Filosófico y Humanidades",
        day: "miercoles",
        startTime: "10:00",
        endTime: "12:00",
        teacher: "Fatima Judith Ramirez Chagoya",
        room: "Aula 6",
        color: "#FF6B6B"
    },
    // ... más clases del horario actual
];
```

### Cambiar Horarios
Modifica el array `timeSlots` en `script.js`:

```javascript
const timeSlots = [
    "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00"
    // Horarios optimizados por horas completas
];
```

### Personalizar Colores
Cambia los colores en el array `classColors`:

```javascript
const classColors = [
    "#00FFFF", "#00FF00", "#FF00FF", "#FFFF00", "#FF6600", "#00FF66", "#6600FF", "#FF0066"
];
```

## 🎯 Funcionalidades

### Vista de Semana
- Muestra todas las clases de la semana
- Cada clase tiene su color distintivo tecnológico
- Información completa al hacer clic
- Navegación fluida sin recargas

### Vista de Día
- Enfoca solo en el día actual
- Perfecto para ver qué tienes hoy
- Transición suave desde vista de semana

### Información del Grupo
- Semestre: Agosto - Enero 2025
- Grupo: 1° E - Técnico en Programación
- Turno: Matutino
- Aula: A5

### Recursos de Programación
- Enlaces a plataformas de aprendizaje
- Lenguajes populares
- Proyectos divertidos
- Comunidades de programadores

### Efectos Visuales
- Animaciones suaves
- Efectos de hover optimizados para móviles
- Confeti al cargar la página
- Tema tecnológico con colores vibrantes

## 📱 Responsive Design Optimizado

El sitio está específicamente optimizado para:
- 📱 **Móviles (480px)**: Elementos de 2 horas = 100px altura
- 📱 **Tablets (768px)**: Elementos de 2 horas = 120px altura
- 💻 **Escritorio**: Diseño completo con todas las funcionalidades
- 🖥️ **Pantallas grandes**: Experiencia premium

### Optimizaciones Móviles
- Alturas ajustadas para evitar traslape
- Scroll horizontal suave
- Touch events optimizados
- Meta tags para PWA

## 🎨 Paleta de Colores Tecnológica

- **Primario**: Gradientes oscuros (#0f1419, #1a2332, #2d3748)
- **Acentos**: Cian (#00FFFF) y Verde (#00FF00)
- **Elementos**: Colores vibrantes y contrastantes
- **Tema**: Estilo tecnológico y moderno

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
- Optimizado específicamente para dispositivos móviles

## 🔧 Correcciones Implementadas

### Problemas Solucionados
- ✅ **Traslape de elementos**: Elementos de 2 horas ajustados para móviles
- ✅ **Navegación mejorada**: Botón "Vista de Semana" funciona sin recargas
- ✅ **Responsive optimizado**: Alturas específicas para cada resolución
- ✅ **Tema tecnológico**: Colores y diseño actualizados

### Historial de Ajustes
- **Inicial**: Elementos de 2 horas = 140px
- **Primer ajuste**: Reducido a 100px (768px) y 80px (480px)
- **Segundo ajuste**: Aumentado a 110px (768px) y 90px (480px)
- **Tercer ajuste**: Aumentado a 120px (768px) y 100px (480px)

## 🎉 ¡Disfruta tu nuevo horario tecnológico!

¡Tu horario de clases nunca había sido tan moderno, funcional y optimizado para móviles! 🎓💻✨
