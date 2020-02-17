import ScrollReveal from 'scrollreveal'

export {navbarToggleSidebar, googleMapInit, scrollToAnchor, scrollRevelation}

function navbarToggleSidebar() {
  $('.navbar-toggle').click(function(event){
    event.preventDefault();
    $(".navbar-collapse").toggleClass('active');
  });
  $('.close').click(function(event){
    event.preventDefault();
    $(".navbar-collapse").toggleClass('active');
  });

}

    
function scrollToAnchor(){
    $('.anchor-link').click(function(event){
        event.preventDefault();
        var id = "#" +  $(this).attr('href').split('#')[1];
        $('html,body').animate({scrollTop: $(id).offset().top},'slow');
    });
}

function scrollRevelation( classString ) {
  window.sr =  new ScrollReveal();
  sr.reveal('.' + classString, 100);
}

function googleMapInit() {

  $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDzA22auDNIFSRiTPytfZVhtuFG_KHBhFQ&', function( data, textStatus, jqxhr ) {
      init();
  });

  function init(){
    var lat = {
        lat: 43.674,
        lng: -73.945
    }
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: lat,
        styles: [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#bdbdbd"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dadada"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c9c9c9"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }],
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: lat,
        map: map
    });
  }
  
}
