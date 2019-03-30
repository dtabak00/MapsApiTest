function initMap(){
    //Map options
    var options = {
        zoom: 9,
        center: {lat: 43.508133, lng: 16.440193}
    }
    //New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    //Listen for click on map
    google.maps.event.addListener(map, 'click',
        function(event) {
            addMarker({coords: event.latlng});
        }
    );
    
    /*
    // Add marker
    var marker = new google.maps.Marker({
    position:{lat:43.524639,lng:16.468446},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow({
    content:'<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function(){
    infoWindow.open(map, marker);
    });*/
      


    //Array of markers
    var markers = [
        {
            coords: {lat: 43.524639, lng: 16.468446},
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1>Kuća</h1>'
        },
        {
            coords: {lat: 43.4349565,lng: 16.6670573},
            content: '<h1>Omiš</h1>'
        },
        {
            coords: {lat: 43.5488983,lng: 16.4419815}
        }
    ];

    //Loop through array of markers
    for(var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }


    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon: props.iconImage 
        });
        
        //Check for custom icon
        if(props.iconImage) {
            //Set icon
            marker.setIcon(props.iconImage);
        }
    
        //Check content
        if(props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
    
            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
    
}