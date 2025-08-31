        // Función para actualizar el reloj
        function updateClock() {
            const now = new Date();
            
            // Obtener hora, minutos y segundos
            let hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes().toString().padStart(2, '0');
            let seconds = now.getSeconds().toString().padStart(2, '0');
            
            // Formatear la hora
            const timeString = `${hours}:${minutes}:${seconds}`;
            
            // Actualizar el elemento del reloj
            document.getElementById('clock').textContent = timeString;
            
            // Obtener y formatear la fecha
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const dateString = now.toLocaleDateString('es-ES', options);
            
            // Actualizar el elemento de la fecha
            document.getElementById('date').textContent = dateString;
        }
        
        // Actualizar el reloj inmediatamente al cargar la página
        updateClock();
        
        // Actualizar el reloj cada segundo
        setInterval(updateClock, 1000);