 // Función para inicializar y agregar el mapa
 function initMap() {
    // Coordenadas de Ciudad del Carmen
    var ciudadDelCarmen = { lat: 18.6536, lng: -91.8247 };

    // Crear un nuevo mapa
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: ciudadDelCarmen,
    });

    // Marcador para Velmonte Boquerón
    var markerBoqueron = new google.maps.Marker({
      position: { lat: 18.6574, lng: -91.8443 },
      map: map,
      title: "Velmonte Boquerón",
    });

    // Marcador para Velmonte Belizario
    var markerBelizario = new google.maps.Marker({
      position: { lat: 18.6521, lng: -91.8117 },
      map: map,
      title: "Velmonte Belizario",
    });
  }