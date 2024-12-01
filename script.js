// Datos para los gráficos
const data1 = {
    labels: ['Cámaras de Seguridad', 'Controlador Central', 'Detectores de Movimiento', 'Sistema Biométrico'],
    datasets: [{
      label: 'Anomalías por Día',
      data: [2, 1, 1, 1],
      backgroundColor: ['#1f2937', '#4b5563', '#6b7280', '#9ca3af'],
    }],
  };
  
  const data2 = {
    labels: ['Redundancia', 'Sin Redundancia'],
    datasets: [{
      label: 'Redundancia y Resiliencia (%)',
      data: [100, 0],
      backgroundColor: ['#10b981', '#d1d5db'],
    }],
  };
  
  const data3 = {
    labels: ['Controlador Central', 'Sistema Biométrico', 'Cámaras de Seguridad', 'Detectores de Movimiento', 'Sensores Magnéticos', 'Sirenas y Alarmas'],
    datasets: [{
      label: 'Tráfico (GB/min)',
      data: [50, 40, 30, 10, 5, 1],
      backgroundColor: '#6366f1',
    }],
  };
  
  const data4 = {
    labels: ['Sirenas y Alarmas', 'Detectores de Humo', 'Sensores', 'Cámaras de Seguridad', 'Sistema Biométrico'],
    datasets: [{
      label: 'Capacidad de Expansión (s)',
      data: [12, 10, 8, 7, 5],
      backgroundColor: '#f59e0b',
    }],
  };
  
  const data5 = {
    labels: ['Sirenas y Alarmas', 'Sensores Magnéticos', 'Detectores de Humo', 'Cámaras de Seguridad', 'Sistema Biométrico'],
    datasets: [{
      label: 'Calidad de Servicio (ms)',
      data: [35, 30, 25, 20, 18],
      backgroundColor: '#ef4444',
    }],
  };
  
  // Configuración de gráficos ajustados
  const config1 = { 
    type: 'bar', 
    data: data1, 
    options: { 
      responsive: true,
      maintainAspectRatio: false, // Ajusta al contenedor
      plugins: {
        legend: { display: false }, // Oculta leyenda si no es necesaria
      },
    }
  };
  
  const config2 = { 
    type: 'pie', 
    data: data2, 
    options: { 
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
      },
    }
  };
  
  const config3 = { 
    type: 'line', 
    data: data3, 
    options: { 
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
    }
  };
  
  const config4 = { 
    type: 'bar', 
    data: data4, 
    options: { 
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
    }
  };
  
  const config5 = { 
    type: 'bar', 
    data: data5, 
    options: { 
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
    }
  };
  
  // Renderización de gráficos
  new Chart(document.getElementById('chart1'), config1);
  new Chart(document.getElementById('chart2'), config2);
  new Chart(document.getElementById('chart3'), config3);
  new Chart(document.getElementById('chart4'), config4);
  new Chart(document.getElementById('chart5'), config5);
  