
window.onload =  function() {

}

var map;
var markers = [];
var infoWindow;


function initMap() {
    var birmingham = {
        lat: 52.489471, 
        lng: -1.898575
    };
    map = new google.maps.Map(document.getElementById('map'), {
      center: birmingham,
      zoom: 11,
      mapTypeId: 'roadmap',
      styles: [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 13
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#144b53"
                },
                {
                    "lightness": 14
                },
                {
                    "weight": 1.4
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#08304b"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#0c4152"
                },
                {
                    "lightness": 5
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#0b434f"
                },
                {
                    "lightness": 25
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#0b3d51"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#146474"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#021019"
                }
            ]
        }
    ]
    
     
    });
    infoWindow = new google.maps.InfoWindow();
    searchStores();
}

function searchStores() {
    var foundStores = [];
    var postalCode = document.getElementById('postcode-input').value;
    if(postalCode) {
        for(var store of stores){
            var postal = store['address']['postalCode'].substring(0, 5); // to grab the first 3 letters
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
        bounds.extend(latlng);
        createMarker(latlng, name, image, schedule, address, link, phoneNumber, index+1)
    }
    map.fitBounds(bounds);
}

function createMarker(latlng, name, image, schedule, address, link, phoneNumber, index)  {
        var html = '<div class="container" id="iw-container">' + 
                        '<div class="iw-title">' + name + 
                    '</div>' +
                    '<img class="iw-image" src="' + image + '" width="300" height="180">' +
                    '<div class="iw-schedule">' + 
                        schedule + "<hr>" + 
                    '</div>' + 
                    '<div class="iw-address">' + 
                        '<i class="fab fa-telegram-plane"> ' + 
                            address + 
                        '</i> ' + 
                        "</b> <br/>" + 
                        '<a class="fas fa-link" style="text-decoration:none;color:white" href="' + 
                            link + '"> ' + name + ' - Website</a>' +
                        "</b> <br/>" + 
                        '<i class="fas fa-phone"> ' + 
                            phoneNumber + 
                        '</i>' + 
                    '</div>';
    var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
      },
      label: index.toString()
    });
    google.maps.event.addListener(marker, 'click', function() {
       infoWindow.setContent(html);
       infoWindow.open(map, marker);
     });
    markers.push(marker);
}

var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
