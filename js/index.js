

window.onload =  function() {

}

var map;
var markers = [];
var infoWindow;


var citymap = {
    birmingham: {
      center: {lat: 52.489471, lng: -1.898575},
      population: 1086000
    },
    coventry: {
      center: {lat: 52.408054, lng: -1.510556},
      population: 325949
    },
    wolverhampton: {
      center: {lat: 52.591370, lng: -2.110748},
      population: 210319
    },
    dudley: {
      center: {lat: 52.5, lng: -2.0833299},
      population: 320626
    },
    walsall: {
        center: {lat: 52.5852814, lng: -1.98396},
        population: 283378
    },
    westBbromwich: {
        center: {lat: 52.5186806, lng: -1.9945},
        population: 78000
    },
    solihull: {
        center: {lat: 52.41426, lng: -1.78094},
        population: 214909
    },
    sandwell: {
        center: {lat: 52.536167, lng: -2.010793},
        population: 327378
    },
    sutton: {
        center: {lat: 52.570385, lng: -1.824042},
        population: 95000
    },
    smethwick: {
        center: {lat: 52.5, lng: -1.97305},
        population: 14146
    },
    meriden: {
        center: {lat:52.445178, lng: -1.647405},
        population: 59540
    },
    marston: {
        center: {lat: 52.471865, lng:  -1.746901},
        population: 7000
    },
    coleshill: {
        center: {lat: 52.505459, lng: -1.707578},
        population: 12000
    },
    minworth: {
        center: {lat: 52.534203, lng: -1.771370},
        population: 23000
    }
};


function initMap() {
    var birmingham = {
        lat: 52.591370, 
        lng: -2.110748
    };

    map = new google.maps.Map(document.getElementById('map'), {
      center: birmingham,
      minZoom: 10.5,
      maxZoom: 10.5,
      mapTypeId: 'roadmap',
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              color: '#242f3e'
            },
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#746855",
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#242f3e",
              
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563",
              
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563",
             
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#263c3f",
              
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6b9a76",
              
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#38414e",
              
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#212a37",
              
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9ca5b3",
              
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#746855",
              
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#1f2835",
             
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#f3d19c",
              
            }
          ]
        },
        {
          "featureType": "road.local",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2f3948",
              
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#d59563",
              
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#17263c",
              
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#515c6d",
              
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#17263c",
              "opacity": "0.6"
            }
          ]
        }
      ]
     
    });

    
    var triangleCoords = [
        {lat: 52.630030, lng: -2.150190},
        {lat: 52.629038,  lng: -2.151289},
        {lat: 52.637789,  lng:-2.113523 },
        {lat: 52.611530,  lng:-2.081938 },
        {lat:  52.622369, lng: -2.053785},
        {lat: 52.621952, lng:  -2.034559},
        {lat:  52.641956, lng:-1.963148 },
        {lat: 52.661950,  lng: -1.960401},
        {lat:  52.656953, lng: -1.945982},
        {lat:  52.661118, lng: -1.934309},
        {lat: 52.656120, lng: -1.924009},
     
        {lat: 52.447727,  lng: -1.443841},
        {lat: 52.442842,  lng: -1.446513},
        {lat:52.434428,   lng: -1.423806},
        {lat: 52.411427, lng: -1.438100},
        {lat: 52.398972, lng: -1.432384 },
        {lat: 52.376546, lng: -1.462597},
        {lat: 52.377543, lng: -1.504241},
        {lat: 52.369068, lng: -1.515673},
        {lat: 52.379039, lng: -1.527105},

        {lat: 52.381849, lng: -1.998237},
        {lat: 52.504526, lng:-2.190932},
        {lat:52.584837, lng:-2.207250},
        {lat: 52.630030, lng: -2.150190}
      ];
      var bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: '#fff',
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: '#242f3e',
        fillOpacity: 0.7
      });
      bermudaTriangle.setMap(map);

    
    for (var city in citymap) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 1,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          center: citymap[city].center,
          radius: Math.sqrt(citymap[city].population) * 4
        });
      }

    infoWindow = new google.maps.InfoWindow();
    searchStores();
}


function searchStores() {
    var foundStores = [];
    var postalCode = document.getElementById('postcode-input').value;
    if(postalCode) {
        for(var store of stores){
            var postal = store['address']['city']; // to grab the first 5 letters
            if(postal == postalCode) {
                foundStores.push(store);
            }
        }
    } else {
        foundStores = stores;
    }
    clearLocations();
    displayStores(foundStores);
    showStoresMarkers(foundStores);
    setOnClickListener();
}


function clearLocations() {
    infoWindow.close();
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers.length = 0;
  }

function setOnClickListener() {
    var storeElements = document.querySelectorAll('.store-container');
    storeElements.forEach(function(elem, index) {
        elem.addEventListener('click', function() {
            new google.maps.event.trigger(markers[index], 'click');
        }) 
    })
}

function displayStores(stores) {

    var storesHtml = '';
    for(var [index, store] of stores.entries()) {
        var name = store['name'];
        var address = store['addressLines'];
        var phone = store['phoneNumber'];
        
        storesHtml += `
        <div class="col-md-12 store-container">
          <div class="store-container-background">
            <div class="store-info-container">
                <div class="store-address">
                    <span class="name">${name}</span>
                    <span><i class="fab fa-telegram-plane"></i> ${address[0]}</span>
                    <span>${address[1]}</span>
                </div>
                <div class="store-phone-number"><i class="fa fa-phone"></i> ${phone}</div>
            </div>
            <div class="store-number-container">
                <div class="store-number">${index+1}</div>
            </div>
          </div>
        </div>

        `
        document.querySelector('.stores-list').innerHTML = storesHtml;
    }
}

function showStoresMarkers(stores) {
    var bounds = new google.maps.LatLngBounds();
    for(var [index, store] of stores.entries()) {

        var latlng = new google.maps.LatLng(
            store["coordinates"]["latitude"],
            store["coordinates"]["longitude"]);
        var name = store["name"];
        var image = store["image"];
        var schedule = store["openStatusText"];
        var address = store["addressLines"][0];
        var link = store["link"];
        var phoneNumber = store["phoneNumber"];
        var cases = store['cases'];
        var death = store['death'];
        bounds.extend(latlng);
        createMarker(latlng, name, image, schedule, address, link, phoneNumber, cases, death, index+1)
    }
    map.fitBounds(bounds);
}

function createMarker(latlng, name, image, schedule, address, link, phoneNumber, cases, death, index)  {
        var html = '<div class="container" id="iw-container">' + 
                        '<div class="iw-title">' + name + 
                    '</div>' +
                    '<img class="iw-image" src="' + image + '" width="300" height="180">' +
                    '<div class="iw-schedule">' + 
                        schedule + "<hr>" + 
                    '</div>' + 
                    '<div class="iw-address" style="font-size:15px;color:rgb(141, 10, 10)">' + 
                        '<i class="fab fa-telegram-plane"> ' + 
                            address + 
                        '</i> ' + 
                        "</b> <br/>" + 
                        '<a class="fas fa-link" style="text-decoration:none;color:white;font-size:15px" href="' + 
                            link + '"> ' + name + ' - Website</a>' +
                        "</b> <br/>" + 
                        '<i class="fas fa-phone"> ' + 
                            phoneNumber + 
                        ' - Emergency Number</i>' +  "<hr>" +
                        '<div class="victims" style="font-size:20px;color:rgb(29, 243, 243);font-weight:bold">Victims Covid-19: ' +
                        "</b> <br/>" + 
                        '<div class="cases" style="font-size:18px;color:rgb(29, 243, 243);font-weight:bold"> - Cases : ' + cases + 
                        "</b> <br/>" + 
                        '<div class="death" style="font-size:18px;color:rgb(29, 243, 243);font-weight:bold"> - Deaths : ' + death
                    '</div>';
    var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      draggable: true,
      animation: google.maps.Animation.DROP,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      },
      label: index.toString()
    });
    google.maps.event.addListener(marker, 'click', function() {
       infoWindow.setContent(html);
       infoWindow.open(map, marker);
     });
    markers.push(marker);
    marker.addListener('click', toggleBounce);
}


function toggleBounce() {
    if (markers.getAnimation() !== null) {
      markers.setAnimation(null);
    } else {
      markers.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
