// Initialize and add the map
function initMap() {
  $(document).ready(function () {
    $("#start").click(function () {

  var ltlng = [];
  var path = new google.maps.MVCArray();
  var service = new google.maps.DirectionsService();
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

    var Krakow = 'Krakow';
    var Bialystok = 'Bialystok';
    var Bielskobiala = 'Bielskobiala';
    var Chrzanow = 'Chrzanow';
    var Gdansk = 'Gdansk';
    var Gdynia = 'Gdynia';
    var Gliwice = 'Gliwice';
    var Gromnik = 'Gromnik';
    var Katowice = 'Katowice';
    var Kielce = 'Kielce';
    var Krosno = 'Krosno';
    var Krynica = 'Krynica';
    var Lublin = 'Lublin';
    var Lodz = 'Lodz';
    var Malbork = 'Malbork';
    var Nowytarg = 'Nowytarg';
    var Olsztyn = 'Olsztyn';
    var Poznan = 'Poznan';
    var Pulawy = 'Pulawy';
    var Radom = 'Radom';
    var Rzeszow = 'Rzeszow';
    var Sandomierz = 'Sandomierz';
    var Szczecin = 'Szczecin';
    var Szczucin = 'Szczucin';
    var Szklarskaporeba = 'Szklarskaporeba';
    var Tarnow = 'Tarnow';
    var Warszawa = 'Warszawa';
    var Wieliczka = 'Wieliczka';
    var Wroclaw = 'Wroclaw';
    var Zakopane = 'Zakopane';
    var Zamosc = 'Zamosc';

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


    const zeros = (m, n) => [...Array(m)].map(e => Array(n).fill(0));
    var miasta = [krakow, bialystok ,bielskobiala ,chrzanow   ,gdansk  ,gdynia  ,gliwice  ,gromnik  ,katowice  ,kielce  ,krosno  ,krynica  ,lublin  ,lodz  ,malbork  ,nowytarg   ,olsztyn  ,poznan  ,pulawy  ,radom  ,rzeszow  ,sandomierz  ,szczecin   ,szczucin   ,szklarskaporeba  ,tarnow  ,warszawa   ,wieliczka  ,wroclaw  ,zakopane  ,zamosc];
    var odleglosci3=zeros(miasta.length, miasta.length);
	  for(var i=0; i< miasta.length;i++){
      odleglosci3.push();
      for(var j=0; j< miasta.length;j++){
        odleglosci3[i][j]=(Math.sqrt((Math.abs(miasta[i].lat-miasta[j].lat)*Math.abs(miasta[i].lat-miasta[j].lat)+Math.abs(miasta[i].lng-miasta[j].lng)*Math.abs(miasta[i].lng-miasta[j].lng))) * 81);
      }
    }
    
    
    var miasta = [krakow, bialystok ,bielskobiala ,chrzanow   ,gdansk  ,gdynia  ,gliwice  ,gromnik  ,katowice  ,kielce  ,krosno  ,krynica  ,lublin  ,lodz  ,malbork  ,nowytarg   ,olsztyn  ,poznan  ,pulawy  ,radom  ,rzeszow  ,sandomierz  ,szczecin   ,szczucin   ,szklarskaporeba  ,tarnow  ,warszawa   ,wieliczka  ,wroclaw  ,zakopane  ,zamosc];
    var odleglosci=zeros(miasta.length, miasta.length);
	  for(var i=0; i< miasta.length;i++){
      odleglosci.push();
      for(var j=0; j< miasta.length;j++){
        odleglosci[i][j]=(Math.sqrt((Math.abs(miasta[i].lat-miasta[j].lat)*Math.abs(miasta[i].lat-miasta[j].lat)+Math.abs(miasta[i].lng-miasta[j].lng)*Math.abs(miasta[i].lng-miasta[j].lng))) * 81);
      }
    }
 

    odleglosci.forEach(function(item, i , odleglosci) {
      for (var a=0; a<item.length; a++)
        if (item[a] < 0){
          item[a] = item[a] * -1;
        }
        
    })
    console.log("Tabela odleglosci miedzy miastami");
    console.log(odleglosci3);
   // console.log(odleglosci);

    var odleglosci2 = new Array();
    var smallest = '';
    var indexsmallest = 0;
    var indexsmallest1 = 0;
    var indexsmallest2 = 0;
    var indexsmallest3 = 0;
    var indexsmallest4 = 0;
    var indexsmallest5 = 0;
    var i = 0;
    var g = 0;
    var needs = [0, 500, 50, 400, 200, 100, 40, 200, 300, 30, 60, 50, 60, 160, 100, 120, 300, 100, 200, 100, 60, 200, 150, 60, 50, 70, 200, 90, 40, 200, 300];
    var auto1 = 0;
    var auto2 = 0;
    var auto3 = 0;
    var auto4 = 0;
    var auto5 = 0;
    var route1 = new Array();
    var route2 = new Array();
    var route3 = new Array();
    var route4 = new Array();
    var route5 = new Array();
    for (var a=0; a < odleglosci.length; a++){
      odleglosci[a][indexsmallest] = 100000;
      
    }
    odleglosci.forEach(function(item, i, odleglosci) {
      var idex = odleglosci.indexOf(item);
      /*item=odleglosci[indexsmallest];
      for (var i=0; i<odleglosci.length; i++){
        smallest = Math.min(...item.filter(Boolean));
        indexsmallest = item.indexOf(smallest);
      }*/
      g = g+1;
      
      if (idex %5 == 0){
        item=odleglosci[indexsmallest1];
        for (var i=0; i<odleglosci.length; i++){
          smallest = Math.min(...item.filter(Boolean));
          indexsmallest1 = item.indexOf(smallest);
        }
        auto1 += needs[indexsmallest1];
        route1.push(indexsmallest1);
        for (var a=0; a < odleglosci.length; a++){
          odleglosci[a][indexsmallest1] = 100000;
          
        }
        odleglosci[indexsmallest1][g-1] = 100000;
      }
      if (idex %5 == 1){
        item=odleglosci[indexsmallest2];
        for (var i=0; i<odleglosci.length; i++){
          smallest = Math.min(...item.filter(Boolean));
          indexsmallest2 = item.indexOf(smallest);
        }
        auto2 += needs[indexsmallest2];
        route2.push(indexsmallest2);
        for (var a=0; a < odleglosci.length; a++){
          odleglosci[a][indexsmallest2] = 100000;
          
        }
        odleglosci[indexsmallest2][g-1] = 100000;
      }
      if (idex %5 == 2){
        item=odleglosci[indexsmallest3];
        for (var i=0; i<odleglosci.length; i++){
          smallest = Math.min(...item.filter(Boolean));
          indexsmallest3 = item.indexOf(smallest);
        }
        auto3 += needs[indexsmallest3];
        if (auto3 > 1000){
          auto3 -= needs[indexsmallest3];
          idex++;
        } else {
          route3.push(indexsmallest3);
          for (var a=0; a < odleglosci.length; a++){
            odleglosci[a][indexsmallest3] = 100000;
            
          }
          odleglosci[indexsmallest3][g-1] = 100000;
        }
      }
      if (idex %5 == 3){
        item=odleglosci[indexsmallest4];
        for (var i=0; i<odleglosci.length; i++){
          smallest = Math.min(...item.filter(Boolean));
          indexsmallest4 = item.indexOf(smallest);
        }
        auto4 += needs[indexsmallest4];
        if (auto4 > 1000){
          auto4 -= needs[indexsmallest4];
          idex++;
        } else {
          route4.push(indexsmallest4);
          for (var a=0; a < odleglosci.length; a++){
            odleglosci[a][indexsmallest4] = 100000;
            
          }
          odleglosci[indexsmallest4][g-1] = 100000;
        }
      }
      if (idex %5 == 4){
        item=odleglosci[indexsmallest5];
        for (var i=0; i<odleglosci.length; i++){
          smallest = Math.min(...item.filter(Boolean));
          indexsmallest5 = item.indexOf(smallest);
        }
        auto5 += needs[indexsmallest5];
        if (auto5 > 1000){
          auto5 -= needs[indexsmallest5];
          idex++;
        } else {
          route5.push(indexsmallest5);
          for (var a=0; a < odleglosci.length; a++){
            odleglosci[a][indexsmallest5] = 100000;
            
          }
          odleglosci[indexsmallest5][g-1] = 100000;
        }
      }
      //console.log(indexsmallest)
      //console.log(smallest);
      /*for (var a=0; a < odleglosci.length; a++){
        odleglosci[a][indexsmallest] = 100000;
        
      }
      odleglosci[indexsmallest][g-1] = 100000;
      odleglosci2.push(indexsmallest);*/
    })

    console.log("Najlepsza trasa uzyskana metoda Algorytmu Najblizszego Sasiada.")
    console.log(route1);
    console.log(route2);
    console.log(route3);
    console.log(route4);
    console.log(route5);
    console.log("Najlepsza dlugosc trasy uzyskana metoda Algorytmu Najblizszego Sasiada.")

    route1.push(0);
    route1.unshift(0);
    route2.push(0);
    route2.unshift(0);
    route3.push(0);
    route3.unshift(0);
    route4.push(0);
    route4.unshift(0);
    route5.push(0);
    route5.unshift(0);
    var routeSum= 0;


    function calculatePath(route) {
      routeSum=0;
      for(var i=0; i<route.length-1; i++){
        routeSum+=odleglosci3[route[i]][route[i+1]];
     //   console.log(odleglosci3[route[i]][route[i+1]]);
      }
    //  console.log(routeSum);
      return routeSum;
    }



    var tabuArrayRoutes=[];
    var tabuArrayResults=[];
    var allRoutes=calculatePath(route1)+calculatePath(route2)+calculatePath(route3)+calculatePath(route4)+calculatePath(route5);
    console.log(allRoutes);
    var a =0;
    var b=0;
    var oldRoutes=0;
    var aweight=0;
    var bweight=0;
    var overweight=false;
    var r1=JSON.parse(JSON.stringify(route1));
    var r2=JSON.parse(JSON.stringify(route2));
    var r3=JSON.parse(JSON.stringify(route3));
    var r4=JSON.parse(JSON.stringify(route4));
    var r5=JSON.parse(JSON.stringify(route5));
    condition=true;
    for(var xyz=0;xyz<10; xyz++){
var tabu=0;
allRoutes=calculatePath(route1)+calculatePath(route2)+calculatePath(route3)+calculatePath(route4)+calculatePath(route5);
for(;tabu<100000; tabu++){
  overweight=false;
     a = Math.floor(Math.random() * 30)+1;
     b = Math.floor(Math.random() * 30)+1;

    while(a==b){
      b = Math.floor(Math.random() * 30)+1;
    }

    var ida=0;
    var idb=0;
    var ra=0;
    var rb=0;




    if(route1.includes(a)){
      ida=route1.indexOf(a);
      ra=1;
    }
    if(route2.includes(a)){
      ida=route2.indexOf(a);
      ra=2;
    }
    if(route3.includes(a)){
      ida=route3.indexOf(a);
      ra=3;
    }
    if(route4.includes(a)){
      ida=route4.indexOf(a);
      ra=4;
    }
    if(route5.includes(a)){
      ida=route5.indexOf(a);
      ra=5;
    }

    if(route1.includes(b)){
      idb=route1.indexOf(b);
      rb=1;
    }
    if(route2.includes(b)){
      idb=route2.indexOf(b);
      rb=2;
    }
    if(route3.includes(b)){
      idb=route3.indexOf(b);
      rb=3;
    }
    if(route4.includes(b)){
      idb=route4.indexOf(b);
      rb=4;
    }
    if(route5.includes(b)){
      idb=route5.indexOf(b);
      rb =5;
    }
    aweight=needs[a];
    bweight=needs[b];
    if(ra==1){
      if(auto1-aweight+bweight>1000){
        overweight=true;
      }
    }
    if(ra==2){
      if(auto2-aweight+bweight>1000){
        overweight=true;
      }
    }
    if(ra==3){
      if(auto3-aweight+bweight>1000){
        overweight=true;
      }
    }
    if(ra==4){
      if(auto4-aweight+bweight>1000){
        overweight=true;
      }
    }
    if(ra==5){
      if(auto5-aweight+bweight>1000){
        overweight=true;
      }
    }
    if(rb==1){
      if(auto1+aweight-bweight>1000){
        overweight=true;
      }
    }
    if(rb==2){
      if(auto2+aweight-bweight>1000){
        overweight=true;
      }
    }
    if(rb==3){
      if(auto3+aweight-bweight>1000){
        overweight=true;
      }
    }
    if(rb==4){
      if(auto4+aweight-bweight>1000){
        overweight=true;
      }
    }
    if(rb==5){
      if(auto5+aweight-bweight>1000){
        overweight=true;
      }
    }
    if(overweight==false){
    if(ra==1){
      route1[ida]=b;
    }
    if(ra==2){
      route2[ida]=b;
    }
    if(ra==3){
      route3[ida]=b;
    }
    if(ra==4){
      route4[ida]=b;
    }
    if(ra==5){
      route5[ida]=b;
    }
    if(rb==1){
      route1[idb]=a;
    }
    if(rb==2){
      route2[idb]=a;
    }
    if(rb==3){
      route3[idb]=a;
    }
    if(rb==4){
      route4[idb]=a;
    }
    if(rb==5){
      route5[idb]=a;
    }
  

    oldRoutes=allRoutes;
    allRoutes=calculatePath(route1)+calculatePath(route2)+calculatePath(route3)+calculatePath(route4)+calculatePath(route5);
    if(allRoutes<oldRoutes){

   // console.log(allRoutes);
    }else{
      allRoutes=oldRoutes;
      if(ra==1){
        route1[ida]=a;
      }
      if(ra==2){
        route2[ida]=a;
      }
      if(ra==3){
        route3[ida]=a;
      }
      if(ra==4){
        route4[ida]=a;
      }
      if(ra==5){
        route5[ida]=a;
      }
      if(rb==1){
        route1[idb]=b;
      }
      if(rb==2){
        route2[idb]=b;
      }
      if(rb==3){
        route3[idb]=b;
      }
      if(rb==4){
        route4[idb]=b;
      }
      if(rb==5){
        route5[idb]=b;
      }
    }

  }
  }

/*  console.log(route1);
  console.log(route2);
  console.log(route3);
  console.log(route4);
  console.log(route5);


  console.log(auto1);
  console.log(auto2);
  console.log(auto3);
  console.log(auto4);
  console.log(auto5); */
  if(!tabuArrayRoutes.includes([route1, route2, route3, route4, route5])){
  tabuArrayRoutes.push([route1, route2, route3, route4, route5]);
  tabuArrayResults.push(allRoutes);
  }
var bestResult= Math.min(...tabuArrayResults);


  route1=JSON.parse(JSON.stringify(r1));
  route2=JSON.parse(JSON.stringify(r2));
  route3=JSON.parse(JSON.stringify(r3));
  route4=JSON.parse(JSON.stringify(r4));
  route5=JSON.parse(JSON.stringify(r5));




}
    
var bestResultIndex= tabuArrayResults.indexOf(bestResult);
var bestWay= tabuArrayRoutes[bestResultIndex];
console.log("Najlepsza dlugosc trasy uzyskana w kilometrach po tabu search.")
console.log(bestResult);
console.log("Najlepszy zestaw tras.")
console.log(bestWay);


var miasta = [krakow, bialystok ,bielskobiala ,chrzanow   ,gdansk  ,gdynia  ,gliwice  ,gromnik  ,katowice  ,kielce  ,krosno  ,krynica  ,lublin  ,lodz  ,malbork  ,nowytarg   ,olsztyn  ,poznan  ,pulawy  ,radom  ,rzeszow  ,sandomierz  ,szczecin   ,szczucin   ,szklarskaporeba  ,tarnow  ,warszawa   ,wieliczka  ,wroclaw  ,zakopane  ,zamosc];

var miasta2 = [Krakow, Bialystok ,Bielskobiala ,Chrzanow   ,Gdansk  ,Gdynia  ,Gliwice  ,Gromnik  ,Katowice  ,Kielce  ,Krosno  ,Krynica  ,Lublin  ,Lodz  ,Malbork  ,Nowytarg   ,Olsztyn  ,Poznan  ,Pulawy  ,Radom  ,Rzeszow  ,Sandomierz  ,Szczecin   ,Szczucin   ,Szklarskaporeba  ,Tarnow  ,Warszawa   ,Wieliczka  ,Wroclaw  ,Zakopane  ,Zamosc];

var miasta3 = new Array();
for (var a=0; a<route1.length; a++){
  var map1 = [miasta[route1[a]], miasta[route1[a+1]]];

  var flightPath1 = new google.maps.Polyline({
    path: map1,
    geodesic: true,
    strokeColor: '#4986E7',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath1.setMap(map);

  miasta3.push(miasta2[route1[a]])

  console.log(miasta3);

}
  var string1 = JSON.stringify(miasta3);
  document.getElementById("car1").innerHTML = string1;


var miasta4 = new Array();
for (var a=0; a<route2.length; a++){
  var map2 = [miasta[route2[a]], miasta[route2[a+1]]];


  var flightPath2 = new google.maps.Polyline({
    path: map2,
    geodesic: true,
    strokeColor: '#eb3434',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath2.setMap(map);

  miasta4.push(miasta2[route2[a]])

  console.log(miasta4);
}
  var string2 = JSON.stringify(miasta4);
  document.getElementById("car2").innerHTML = string2;


var miasta5 = new Array();
for (var a=0; a<route3.length; a++){
  var map3 = [miasta[route3[a]], miasta[route3[a+1]]];


  var flightPath3 = new google.maps.Polyline({
    path: map3,
    geodesic: true,
    strokeColor: '#62eb34',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath3.setMap(map);

  miasta5.push(miasta2[route3[a]])

  console.log(miasta5);
}
  var string3 = JSON.stringify(miasta5);
  document.getElementById("car3").innerHTML = string3;


var miasta6 = new Array();
for (var a=0; a<route4.length; a++){
  var map4 = [miasta[route4[a]], miasta[route4[a+1]]];


  var flightPath4 = new google.maps.Polyline({
    path: map4,
    geodesic: true,
    strokeColor: '#8c34eb',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath4.setMap(map);

  miasta6.push(miasta2[route4[a]])

  console.log(miasta6);
}
  var string4 = JSON.stringify(miasta6);
  document.getElementById("car4").innerHTML = string4;


var miasta7 = new Array();
for (var a=0; a<route5.length; a++){
  var map5 = [miasta[route5[a]], miasta[route5[a+1]]];


  var flightPath5 = new google.maps.Polyline({
    path: map5,
    geodesic: true,
    strokeColor: '#34e2eb',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath5.setMap(map);

  miasta7.push(miasta2[route5[a]])

  console.log(miasta7);
}
  var string5 = JSON.stringify(miasta7);
  document.getElementById("car5").innerHTML = string5;

});
});
}