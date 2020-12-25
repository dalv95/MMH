// Initialize and add the map
function initMap() {

  var center  = {lat: 52.222384, lng: 19.3010533};

  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 6, center: center});

    const krakow = {lat: 50.0469018, lng: 19.8647886};
    const bialystok = {lat: 53.1277077, lng: 23.0860259};
    const bielskobiala = {lat: 49.8123373, lng: 18.8971777};
    const chrzanow = {lat: 50.12887, lng: 19.2886585};
    const gdansk = {lat: 54.3612063, lng: 18.5499434};
    const gdynia = {lat: 54.5039433, lng: 18.3233953};
    const gliwice = {lat: 50.3013748, lng: 18.5095319};
    const gromnik = {lat: 49.8390505, lng: 20.9451044};
    const katowice = {lat: 50.2138079, lng: 18.8671082};
    const kielce = {lat: 50.8541274, lng: 20.5456013};
    const krosno = {lat: 49.6897447, lng: 21.6817235};
    const krynica = {lat: 49.4155437, lng: 20.86402};
    const lublin = {lat: 50.064021, lng: 22.4236859};
    const lodz = {lat: 51.7732471, lng: 19.3405084};
    const malbork = {lat: 54.0286986, lng: 19.0084414};
    const nowytarg = {lat: 49.4893579, lng: 19.9737204};
    const olsztyn = {lat: 53.7760917, lng: 20.3956589};
    const poznan = {lat: 52.4006553, lng: 16.7615818};
    const pulawy = {lat: 51.4256066, lng: 21.9046277};
    const radom = {lat: 51.4151517, lng: 21.0839339};
    const rzeszow = {lat: 50.0055663, lng: 21.8483705};
    const sandomierz = {lat: 50.064021, lng: 21.6755716};
    const szczecin = {lat: 53.4298189, lng: 14.4845397};
    const szczucin = {lat: 50.3096603, lng: 21.0617624};
    const szklarskaporeba = {lat: 50.814363, lng: 15.3965225};
    const tarnow = {lat: 50.026233, lng: 20.906866};
    const warszawa = {lat: 52.2330269, lng: 20.7810095};
    const wieliczka = {lat: 49.9876079, lng: 20.0110902};
    const wroclaw = {lat: 51.1272097, lng: 16.8517796};
    const zakopane = {lat: 49.2759821, lng: 19.9038356};
    const zamosc = {lat: 50.7214316, lng: 23.2134931};

    var mk1 = new google.maps.Marker({position: krakow, map: map});
    var mk2 = new google.maps.Marker({position: bialystok, map: map});
    var mk3 = new google.maps.Marker({position: bielskobiala, map: map});
    var mk4 = new google.maps.Marker({position: chrzanow, map: map});
    var mk5 = new google.maps.Marker({position: gdansk, map: map});
    var mk6 = new google.maps.Marker({position: gdynia, map: map});
    var mk7 = new google.maps.Marker({position: gliwice, map: map});
    var mk8 = new google.maps.Marker({position: gromnik, map: map});
    var mk9 = new google.maps.Marker({position: katowice, map: map});
    var mk10 = new google.maps.Marker({position: kielce, map: map});
    var mk11 = new google.maps.Marker({position: krosno, map: map});
    var mk12 = new google.maps.Marker({position: krynica, map: map});
    var mk13 = new google.maps.Marker({position: lublin, map: map});
    var mk14 = new google.maps.Marker({position: lodz, map: map});
    var mk15 = new google.maps.Marker({position: malbork, map: map});
    var mk16 = new google.maps.Marker({position: nowytarg, map: map});
    var mk17 = new google.maps.Marker({position: olsztyn, map: map});
    var mk18 = new google.maps.Marker({position: poznan, map: map});
    var mk19 = new google.maps.Marker({position: pulawy, map: map});
    var mk20 = new google.maps.Marker({position: radom, map: map});
    var mk21 = new google.maps.Marker({position: rzeszow, map: map});
    var mk22 = new google.maps.Marker({position: sandomierz, map: map});
    var mk23 = new google.maps.Marker({position: szczecin, map: map});
    var mk24 = new google.maps.Marker({position: szczucin, map: map});
    var mk25 = new google.maps.Marker({position: szklarskaporeba, map: map});
    var mk26 = new google.maps.Marker({position: tarnow, map: map});
    var mk27 = new google.maps.Marker({position: warszawa, map: map});
    var mk28 = new google.maps.Marker({position: wieliczka, map: map});
    var mk29 = new google.maps.Marker({position: wroclaw, map: map});
    var mk30 = new google.maps.Marker({position: zakopane, map: map});
    var mk31 = new google.maps.Marker({position: zamosc, map: map});

    var miasta = [krakow, bialystok ,bielskobiala ,chrzanow   ,gdansk  ,gdynia  ,gliwice  ,gromnik  ,katowice  ,kielce  ,krosno  ,krynica  ,lublin  ,lodz  ,malbork  ,nowytarg   ,olsztyn  ,poznan  ,pulawy  ,radom  ,rzeszow  ,sandomierz  ,szczecin   ,szczucin   ,szklarskaporeba  ,tarnow  ,warszawa   ,wieliczka  ,wroclaw  ,zakopane  ,zamosc];
    var odleglosci=[[]];
	  for(var i=0; i< miasta.length;i++){
      odleglosci.push();
      for(var j=0; j< miasta.length;j++){
        odleglosci[i].push(miasta[i].lat-miasta[j].lat+miasta[i].lng-miasta[j].lng);
      }
    }
    console.log(odleglosci);
    console.log(miasta);

    var x = document.getElementById("place").value;

    
    
      if (x === 'krakow') {
      var marker = new google.maps.Marker({ position: rydygiera, map: map });
    }
}


  

