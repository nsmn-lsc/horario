// Datos del horario corregido final
let scheduleData = [
  {
    "name": "Pensamiento Filosofico y Humanidades",
    "day": "miercoles",
    "startTime": "10:00",
    "endTime": "12:00",
    "teacher": "Fatima Judith Ramirez Chagoya",
    "room": "Aula 6",
    "color": "#FF6B6B"
  },
  {
    "name": "Pensamiento Filosofico y Humanidades",
    "day": "jueves",
    "startTime": "10:00",
    "endTime": "12:00",
    "teacher": "Fatima Judith Ramirez Chagoya",
    "room": "Aula 6",
    "color": "#FF6B6B"
  },
  {
    "name": "CNEYT 1: Invitacion a la ciencia, naturaleza de la materia",
    "day": "jueves",
    "startTime": "07:00",
    "endTime": "09:00",
    "teacher": "Carlos Medina Cruz",
    "room": "Aula por asignar",
    "color": "#4ECDC4"
  },
  {
    "name": "Ingles",
    "day": "miercoles",
    "startTime": "12:00",
    "endTime": "14:00",
    "teacher": "Quien sabe",
    "room": "Aula 6",
    "color": "#45B7D1"
  },
  {
    "name": "Ingles",
    "day": "viernes",
    "startTime": "10:00",
    "endTime": "11:00",
    "teacher": "Quien sabe",
    "room": "Aula 6",
    "color": "#45B7D1"
  },
  {
    "name": "Pensamiento Matematico",
    "day": "martes",
    "startTime": "09:00",
    "endTime": "11:00",
    "teacher": "Fabian Mera Azpeitia",
    "room": "Aula por asignar",
    "color": "#96CEB4"
  },
  {
    "name": "Pensamiento Matematico",
    "day": "miercoles",
    "startTime": "08:00",
    "endTime": "10:00",
    "teacher": "Fabian Mera Azpeitia",
    "room": "Aula por asignar",
    "color": "#96CEB4"
  },
  {
    "name": "Lengua y comunicacion",
    "day": "lunes",
    "startTime": "11:00",
    "endTime": "12:00",
    "teacher": "Fatima Judith Ramirez Chagoya",
    "room": "Aula por asignar",
    "color": "#DDA0DD"
  },
  {
    "name": "Lengua y comunicacion",
    "day": "martes",
    "startTime": "07:00",
    "endTime": "08:00",
    "teacher": "Fatima Judith Ramirez Chagoya",
    "room": "Aula por asignar",
    "color": "#DDA0DD"
  },
  {
    "name": "Cultura digital",
    "day": "lunes",
    "startTime": "07:00",
    "endTime": "09:00",
    "teacher": "Lizbeth Hernandez Mohedano",
    "room": "Info 4",
    "color": "#F7DC6F"
  },
  {
    "name": "Cultura digital",
    "day": "martes",
    "startTime": "08:00",
    "endTime": "09:00",
    "teacher": "Lizbeth Hernandez Mohedano",
    "room": "Info 4",
    "color": "#F7DC6F"
  },
  {
    "name": "Lengua y Comunicacion",
    "day": "viernes",
    "startTime": "09:00",
    "endTime": "10:00",
    "teacher": "Lizbeth Hernandez Mohedano",
    "room": "Info 4",
    "color": "#F7DC6F"
  },
  {
    "name": "Ciencias Sociales",
    "day": "lunes",
    "startTime": "09:00",
    "endTime": "11:00",
    "teacher": "José Nabor García Flores",
    "room": "Aula por asignar",
    "color": "#85C1E9"
  },
  {
    "name": "Tutoria",
    "day": "jueves",
    "startTime": "09:00",
    "endTime": "10:00",
    "teacher": "Lizbeth Hernandez Mohedano",
    "room": "Info 3",
    "color": "#FF9F43"
  },
  {
    "name": "CNEYT 1: Invitacion a la ciencia, naturaleza de la materia",
    "day": "viernes",
    "startTime": "07:00",
    "endTime": "09:00",
    "teacher": "Carlos Medina Cruz",
    "room": "Lab Quim",
    "color": "#4ECDC4"
  }
];

// Horarios disponibles - por horas completas hasta las 13:00
const timeSlots = [
    "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00"
];

const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

// Colores predefinidos para las clases - Tema tecnológico
const classColors = [
    "#00FFFF", "#00FF00", "#FF00FF", "#FFFF00", "#FF6600", "#00FF66", "#6600FF", "#FF0066"
];

let currentView = 'week';

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    generateSchedule();
    setupEventListeners();
    addConfettiEffect();
});

// Generar la tabla de horario
function generateSchedule() {
    const tbody = document.getElementById('schedule-body');
    tbody.innerHTML = '';

    timeSlots.forEach((time, index) => {
        const row = document.createElement('tr');
        
        // Celda de hora con rango completo
        const timeCell = document.createElement('td');
        timeCell.className = 'time-cell';
        
        // Crear el rango de tiempo (ej: 07:00 a 08:00)
        const nextTime = timeSlots[index + 1];
        if (nextTime) {
            timeCell.textContent = `${time} a ${nextTime}`;
        } else {
            // Para la última hora, mostrar el rango completo hasta las 14:00
            timeCell.textContent = `${time} a 14:00`;
        }
        
        row.appendChild(timeCell);

        // Celdas para cada día
        days.forEach(day => {
            const cell = document.createElement('td');
            cell.className = 'schedule-cell';
            cell.dataset.day = day;
            cell.dataset.time = time;
            
            // Buscar clases que empiecen en este horario específico
            const classes = scheduleData.filter(cls => 
                cls.day === day && 
                cls.startTime === time
            );
            
            if (classes.length > 0) {
                classes.forEach(cls => {
                    const classElement = createClassElement(cls);
                    
                    // Calcular la duración y aplicar altura estandarizada
                    const duration = getClassDuration(cls.startTime, cls.endTime);
                    if (duration > 1) {
                        // Para clases de 2 horas, usar altura más reducida
                        classElement.style.height = '140px'; // Reducido aún más para mejor espaciado
                        classElement.style.position = 'absolute';
                        classElement.style.zIndex = '10';
                        classElement.style.width = 'calc(100% - 4px)'; // Ancho estandarizado con margen
                    } else {
                        // Para clases de 1 hora, usar altura reducida
                        classElement.style.height = '70px'; // Regresado al valor anterior que estaba mejor
                        classElement.style.width = 'calc(100% - 4px)'; // Mismo ancho que las de 2 horas
                    }
                    
                    cell.appendChild(classElement);
                });
            }
            
            row.appendChild(cell);
        });
        
        tbody.appendChild(row);
    });
}

// Crear elemento de clase
function createClassElement(cls) {
    const classDiv = document.createElement('div');
    classDiv.className = 'class-cell';
    classDiv.style.background = cls.color;
    classDiv.title = `${cls.name}\n${cls.startTime} - ${cls.endTime}\n${cls.teacher}\n${cls.room}`;
    
    classDiv.innerHTML = `
        <div class="class-name">${cls.name}</div>
        <div class="class-time">${cls.startTime} - ${cls.endTime}</div>
        <div class="class-teacher">${cls.teacher}</div>
        <div class="class-room">${cls.room}</div>
    `;
    
    // Agregar evento de clic para mostrar detalles
    classDiv.addEventListener('click', () => showClassDetails(cls));
    
    return classDiv;
}

// Verificar si una hora está en el rango de una clase
function isTimeInRange(time, startTime, endTime) {
    return time >= startTime && time < endTime;
}

// Calcular la duración de una clase en horas
function getClassDuration(startTime, endTime) {
    const start = parseInt(startTime.split(':')[0]);
    const end = parseInt(endTime.split(':')[0]);
    return end - start;
}

// Calcular la posición de inicio de una clase en el grid
function getClassStartPosition(startTime) {
    return timeSlots.indexOf(startTime);
}

// Mostrar detalles de una clase
function showClassDetails(cls) {
    const message = `
📚 ${cls.name}
⏰ ${cls.startTime} - ${cls.endTime}
👨‍🏫 ${cls.teacher}
🏫 ${cls.room}
    `;
    
    // Crear modal de detalles
    const detailModal = document.createElement('div');
    detailModal.className = 'modal';
    detailModal.style.display = 'block';
    detailModal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2><i class="fas fa-info-circle"></i> Detalles de la Clase</h2>
            <div style="text-align: center; padding: 20px;">
                <div style="background: ${cls.color}; color: white; padding: 20px; border-radius: 15px; margin: 20px 0;">
                    <h3 style="margin-bottom: 15px;">${cls.name}</h3>
                    <p><i class="fas fa-clock"></i> ${cls.startTime} - ${cls.endTime}</p>
                    <p><i class="fas fa-user"></i> ${cls.teacher}</p>
                    <p><i class="fas fa-door-open"></i> ${cls.room}</p>
                </div>
                <button class="btn btn-primary" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-check"></i> Cerrar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(detailModal);
}

// Configurar event listeners
function setupEventListeners() {
    // Formulario para agregar clase
    document.getElementById('addClassForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addNewClass();
    });
    
    // Efectos de sonido (opcional)
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Efecto visual al hacer clic
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });
}

// Agregar nueva clase
function addNewClass() {
    const formData = {
        name: document.getElementById('className').value,
        day: document.getElementById('day').value,
        startTime: document.getElementById('startTime').value,
        endTime: document.getElementById('endTime').value,
        teacher: document.getElementById('teacher').value,
        room: document.getElementById('room').value,
        color: document.getElementById('color').value
    };
    
    // Validar datos
    if (!formData.name || !formData.day || !formData.startTime || !formData.endTime) {
        alert('Por favor completa todos los campos obligatorios');
        return;
    }
    
    // Agregar a los datos
    scheduleData.push(formData);
    
    // Regenerar horario
    generateSchedule();
    
    // Cerrar modal
    closeModal();
    
    // Mostrar mensaje de éxito
    showSuccessMessage('¡Clase agregada exitosamente! 🎉');
    
    // Limpiar formulario
    document.getElementById('addClassForm').reset();
    document.getElementById('color').value = '#4CAF50';
}

// Cerrar modal
function closeModal() {
    document.getElementById('addClassModal').style.display = 'none';
}

// Mostrar modal de agregar clase
function addClass() {
    document.getElementById('addClassModal').style.display = 'block';
}

// Cambiar vista (semana/día)
function toggleView() {
    currentView = currentView === 'week' ? 'day' : 'week';
    const btn = event.target.closest('.btn');
    
    if (currentView === 'day') {
        btn.innerHTML = '<i class="fas fa-calendar-week"></i> Vista de Semana';
        showToday();
    } else {
        btn.innerHTML = '<i class="fas fa-th"></i> Vista de Semana';
        // Restaurar completamente la vista de semana
        restoreWeekView();
    }
}

// Función para restaurar completamente la vista de semana
function restoreWeekView() {
    // Limpiar el contenido actual
    const tbody = document.getElementById('schedule-body');
    tbody.innerHTML = '';
    
    // Restaurar todos los encabezados de días
    const headers = document.querySelectorAll('.day-header');
    const dayNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    headers.forEach((header, index) => {
        if (index < dayNames.length) {
            header.textContent = dayNames[index];
            header.style.display = '';
        }
    });
    
    // Mostrar todas las celdas de días
    const allCells = document.querySelectorAll('.schedule-cell');
    allCells.forEach(cell => {
        cell.style.display = '';
    });
    
    // Regenerar el horario completo
    generateSchedule();
}

// Mostrar solo el día de hoy
function showToday() {
    const today = new Date();
    const dayNames = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const todayName = dayNames[today.getDay()];
    
    if (todayName === 'domingo') {
        alert('¡Es domingo! No hay clases hoy. ¡Disfruta tu día libre! 🎉');
        return;
    }
    
    const tbody = document.getElementById('schedule-body');
    tbody.innerHTML = '';
    
    timeSlots.forEach((time, index) => {
        const row = document.createElement('tr');
        
        // Celda de hora con formato completo
        const timeCell = document.createElement('td');
        timeCell.className = 'time-cell';
        
        // Crear el rango de tiempo (ej: 07:00 a 08:00)
        const nextTime = timeSlots[index + 1];
        if (nextTime) {
            timeCell.textContent = `${time} a ${nextTime}`;
        } else {
            // Para la última hora, mostrar el rango completo hasta las 14:00
            timeCell.textContent = `${time} a 14:00`;
        }
        
        row.appendChild(timeCell);
        
        // Solo mostrar el día de hoy
        const cell = document.createElement('td');
        cell.className = 'schedule-cell';
        cell.dataset.day = todayName;
        cell.dataset.time = time;
        
        // Buscar clases que empiecen en este horario específico (igual que generateSchedule)
        const classes = scheduleData.filter(cls => 
            cls.day === todayName && 
            cls.startTime === time
        );
        
        if (classes.length > 0) {
            classes.forEach(cls => {
                const classElement = createClassElement(cls);
                
                // Calcular la duración y aplicar altura estandarizada (igual que generateSchedule)
                const duration = getClassDuration(cls.startTime, cls.endTime);
                if (duration > 1) {
                    // Para clases de 2 horas, usar altura más reducida
                    classElement.style.height = '140px';
                    classElement.style.position = 'absolute';
                    classElement.style.zIndex = '10';
                    classElement.style.width = 'calc(100% - 4px)';
                } else {
                    // Para clases de 1 hora, usar altura reducida
                    classElement.style.height = '70px';
                    classElement.style.width = 'calc(100% - 4px)';
                }
                
                cell.appendChild(classElement);
            });
        }
        
        row.appendChild(cell);
        tbody.appendChild(row);
    });
    
    // Actualizar encabezados
    const headers = document.querySelectorAll('.day-header');
    headers.forEach((header, index) => {
        if (index === 0) {
            header.textContent = todayName.charAt(0).toUpperCase() + todayName.slice(1);
        } else {
            header.style.display = 'none';
        }
    });
}

// Mostrar mensaje de éxito
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #4CAF50, #45a049);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        animation: slideInRight 0.3s ease-out;
    `;
    successDiv.textContent = message;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            successDiv.remove();
        }, 300);
    }, 3000);
}

// Efecto de confeti al cargar la página
function addConfettiEffect() {
    // Crear elementos de confeti
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 100);
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${classColors[Math.floor(Math.random() * classColors.length)]};
        top: -10px;
        left: ${Math.random() * 100}vw;
        z-index: 1000;
        animation: confettiFall 3s linear forwards;
        pointer-events: none;
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Agregar estilos de animación para confeti
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        0% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes confettiFall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Función para exportar horario (bonus)
function exportSchedule() {
    const dataStr = JSON.stringify(scheduleData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mi_horario.json';
    link.click();
    URL.revokeObjectURL(url);
}

// Función para importar horario (bonus)
function importSchedule() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importedData = JSON.parse(e.target.result);
                    scheduleData = importedData;
                    generateSchedule();
                    showSuccessMessage('¡Horario importado exitosamente! 📥');
                } catch (error) {
                    alert('Error al importar el archivo. Verifica que sea un archivo JSON válido.');
                }
            };
            reader.readAsText(file);
        }
    };
    input.click();
}

// Funciones para mejorar la experiencia móvil
function setupMobileOptimizations() {
    // Detectar si es un dispositivo móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Agregar clase móvil al body
        document.body.classList.add('mobile-device');
        
        // Mejorar el scroll táctil
        document.addEventListener('touchstart', function() {}, {passive: true});
        document.addEventListener('touchmove', function() {}, {passive: true});
        
        // Optimizar el comportamiento de los elementos táctiles
        const classCells = document.querySelectorAll('.class-cell');
        classCells.forEach(cell => {
            cell.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.style.transform = 'scale(0.95)';
            }, {passive: false});
            
            cell.addEventListener('touchend', function(e) {
                e.preventDefault();
                this.style.transform = 'scale(1)';
                // Simular click
                this.click();
            }, {passive: false});
        });
        
        // Agregar indicador de scroll horizontal
        const scheduleContainer = document.querySelector('.schedule-container');
        if (scheduleContainer) {
            scheduleContainer.addEventListener('scroll', function() {
                const scrollLeft = this.scrollLeft;
                const maxScroll = this.scrollWidth - this.clientWidth;
                
                // Ocultar el indicador cuando se ha hecho scroll
                if (scrollLeft > 10) {
                    this.style.setProperty('--scroll-indicator-opacity', '0');
                } else {
                    this.style.setProperty('--scroll-indicator-opacity', '1');
                }
            });
        }
    }
}

// Inicializar optimizaciones móviles cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // ... código existente ...
    setupMobileOptimizations();
});
