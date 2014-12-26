'use strict';

/**
 * @ngdoc function
 * @name pruebaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pruebaApp
 */
angular.module('pruebaApp')
  .controller('render', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('RenderCtrl', ['$scope',function($scope) {


    var container, container2,  stats, controls, controller;
    var camera, scene, raycaster, renderer;

    var mouse = new THREE.Vector2(), INTERSECTED;
    //var radius = 100, theta = 0;

    init();
    animate();

    function init() {

      container2 = document.createElement( 'div' );
      document.body.appendChild( container2 );

      var info = document.createElement( 'div' );
      info.style.position = 'absolute';
      info.style.top = '10px';
      info.style.width = '100%';
      info.style.textAlign = 'center';
      container2.appendChild( info );

      controller = new Leap.Controller();

      camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.z = 250;
      //camera.setLens(70);

      //controls = new THREE.LeapPaddleControls( camera , controller );

      controls = new THREE.LeapTrackballControls( camera , controller );
      controls.rotationSpeed            = 10;
      controls.rotationDampening        = .98;
      controls.zoom                     = 40;
      controls.zoomDampening            = .6;
      controls.zoomCutoff               = .9;
      controls.zoomEnabled              = true;

      controls.minZoom                  = 20;
      controls.maxZoom                  = 80;

      //controls = new THREE.TrackballControls( camera );
      //controls.rotateSpeed = 1.0;
      //controls.zoomSpeed = 1.2;
      //controls.panSpeed = 0.8;
      //controls.noZoom = false;
      //controls.noPan = false;
      //controls.staticMoving = true;
      //controls.dynamicDampingFactor = 0.3;

      scene = new THREE.Scene();

      //scene.fog = new THREE.FogExp2( 0x767676, 0.002 );

      var light = new THREE.DirectionalLight( 0xffffff );
      light.position.set( 1, 1, 1 );
      scene.add( light );

      light = new THREE.DirectionalLight( 0x002288 );//azul
      light.position.set( -1, -1, -1 );
      scene.add( light );

      light = new THREE.AmbientLight( 0x858586 );//gris oscuro
      scene.add( light );

      var geometry = new THREE.BoxGeometry( 30,40,5 );

      for ( var i = 0; i < 16; i ++ ) {

        var vector;
        var phi = (i*0.39)+50 + Math.PI;
        var material = new THREE.MeshLambertMaterial( { color: 0x04B486 } );
        material.transparent = true;
        material.opacity = 0.2;

        var object = new THREE.Mesh( geometry,material );
        vector = new THREE.Vector3();

        object.position.x = 110 * Math.sin(phi);
        object.position.y = 0;
        object.position.z = 110 * Math.cos(phi);

        //object.rotation.y = (0.36*i);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;
        object.lookAt(vector);

        //object.updateMatrix();
        //object.matrixAutoUpdate = false;

        scene.add( object );

      }

      raycaster = new THREE.Raycaster();
      container = document.getElementById( 'container' );
      renderer = new THREE.WebGLRenderer( {antialias: true} );
      renderer.setClearColor( 0x000000 );
      //renderer.setClearColor( scene.fog.color, 1 );//añadir efecto niebla
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.sortObjects = false;
      container.appendChild(renderer.domElement);

      controller.connect();

      container = document.getElementById( 'container' );
      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.top = '0px';
      container.appendChild( stats.domElement );

      document.addEventListener( 'mousemove', onDocumentMouseMove, false );

      window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove( event ) {

      event.preventDefault();

      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    }

    //

    function animate() {

      requestAnimationFrame( animate );

      render();
      controls.update();
      stats.update();

    }

    function render() {

      //theta += 0.1;
      //
      //camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
      //camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
      //camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
      //camera.lookAt( scene.position );

      // find intersections

      var vector = new THREE.Vector3( mouse.x, mouse.y, 1 ).unproject( camera );

      raycaster.set( camera.position, vector.sub( camera.position ).normalize() );

      var intersects = raycaster.intersectObjects( scene.children );

      if ( intersects.length > 0 ) {

        if ( INTERSECTED != intersects[ 0 ].object ) {

          if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

          INTERSECTED = intersects[ 0 ].object;
          INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
          INTERSECTED.material.emissive.setHex( 0xff0000 );

        }

      } else {

        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

        INTERSECTED = null;

      }

      renderer.render( scene, camera );

    }

    $scope.datosbanc=[
      {
        "cp_origin": "28028",
        "num_cards": "13",
        "num_payments": "13",
        "incomes": "3549.27",
        "month": "201211",
        "cp_dest": "28001",
        "category": "es_auto"
      },
      {
        "cp_origin": "28006",
        "num_cards": "12",
        "num_payments": "12",
        "incomes": "3086.32",
        "month": "201211",
        "cp_dest": "28001",
        "category": "es_auto"
      },
      {
        "cp_origin": "28024",
        "num_cards": "7",
        "num_payments": "7",
        "incomes": "2079.43",
        "month": "201211",
        "cp_dest": "28001",
        "category": "es_auto"
      },
      {
        "cp_origin": "28009",
        "num_cards": "8",
        "num_payments": "8",
        "incomes": "1939.47",
        "month": "201211",
        "cp_dest": "28001",
        "category": "es_auto"
      },
      {
        "cp_origin": "28925",
        "num_cards": "4",
        "num_payments": "4",
        "incomes": "1329.31",
        "month": "201211",
        "cp_dest": "28001",
        "category": "es_auto"
      },
      {
        "cp_origin": "28036",
        "num_cards": "8",
        "num_payments": "8",
        "incomes": "1278.39",
        "month": "201211",
        "cp_dest": "28001",
        "category": "es_auto"
      },
      {
        "cp_origin": "28932",
        "num_cards": "13",
        "num_payments": "29",
        "incomes": "414.45",
        "month": "201304",
        "cp_dest": "28008",
        "category": "es_barsandrestaurants"
      },
      {
        "cp_origin": "28701",
        "num_cards": "12",
        "num_payments": "32",
        "incomes": "407.34",
        "month": "201304",
        "cp_dest": "28008",
        "category": "es_barsandrestaurants"
      },
      {
        "cp_origin": "28937",
        "num_cards": "11",
        "num_payments": "15",
        "incomes": "403.07",
        "month": "201304",
        "cp_dest": "28008",
        "category": "es_barsandrestaurants"
      },
      {
        "cp_origin": "37001",
        "num_cards": "6",
        "num_payments": "15",
        "incomes": "401.61",
        "month": "201304",
        "cp_dest": "28008",
        "category": "es_barsandrestaurants"
      },
      {
        "cp_origin": "28232",
        "num_cards": "19",
        "num_payments": "36",
        "incomes": "400.91",
        "month": "201304",
        "cp_dest": "28008",
        "category": "es_barsandrestaurants"
      },
      {
        "cp_origin": "28770",
        "num_cards": "16",
        "num_payments": "44",
        "incomes": "376.92",
        "month": "201304",
        "cp_dest": "28008",
        "category": "es_barsandrestaurants"
      },
      {
        "cp_origin": "28300",
        "num_cards": "15",
        "num_payments": "31",
        "incomes": "375.77",
        "month": "201304",
        "cp_dest": "28008",
        "category": "es_barsandrestaurants"
      },
      {
        "cp_origin": "28020",
        "num_cards": "113",
        "num_payments": "141",
        "incomes": "4776.35",
        "month": "201212",
        "cp_dest": "28020",
        "category": "es_contents"
      },
      {
        "cp_origin": "28003",
        "num_cards": "56",
        "num_payments": "64",
        "incomes": "2884.08",
        "month": "201212",
        "cp_dest": "28020",
        "category": "es_contents"
      },
      {
        "cp_origin": "28039",
        "num_cards": "55",
        "num_payments": "60",
        "incomes": "2416.54",
        "month": "201212",
        "cp_dest": "28020",
        "category": "es_contents"
      },
      {
        "cp_origin": "28036",
        "num_cards": "39",
        "num_payments": "44",
        "incomes": "1635.24",
        "month": "201212",
        "cp_dest": "28020",
        "category": "es_contents"
      },
      {
        "cp_origin": "28002",
        "num_cards": "30",
        "num_payments": "31",
        "incomes": "1525.49",
        "month": "201212",
        "cp_dest": "28020",
        "category": "es_contents"
      },
      {
        "cp_origin": "28043",
        "num_cards": "15",
        "num_payments": "21",
        "incomes": "1178.65",
        "month": "201212",
        "cp_dest": "28020",
        "category": "es_contents"
      },
      {
        "cp_origin": "28224",
        "num_cards": "4",
        "num_payments": "6",
        "incomes": "137.2",
        "month": "201302",
        "cp_dest": "28013",
        "category": "es_fashion"
      },
      {
        "cp_origin": "28024",
        "num_cards": "7",
        "num_payments": "7",
        "incomes": "135.34",
        "month": "201302",
        "cp_dest": "28013",
        "category": "es_fashion"
      },
      {
        "cp_origin": "28850",
        "num_cards": "4",
        "num_payments": "4",
        "incomes": "126.5",
        "month": "201302",
        "cp_dest": "28013",
        "category": "es_fashion"
      },
      {
        "cp_origin": "28041",
        "num_cards": "7",
        "num_payments": "8",
        "incomes": "125.04",
        "month": "201302",
        "cp_dest": "28013",
        "category": "es_fashion"
      },
      {
        "cp_origin": "28923",
        "num_cards": "4",
        "num_payments": "4",
        "incomes": "112.34",
        "month": "201302",
        "cp_dest": "28013",
        "category": "es_fashion"
      },
      {
        "cp_origin": "28016",
        "num_cards": "4",
        "num_payments": "5",
        "incomes": "213.31",
        "month": "201301",
        "cp_dest": "28010",
        "category": "es_food"
      },
      {
        "cp_origin": "28044",
        "num_cards": "6",
        "num_payments": "7",
        "incomes": "206.95",
        "month": "201301",
        "cp_dest": "28010",
        "category": "es_food"
      },
      {
        "cp_origin": "28011",
        "num_cards": "4",
        "num_payments": "5",
        "incomes": "203.01",
        "month": "201301",
        "cp_dest": "28010",
        "category": "es_food"
      },
      {
        "cp_origin": "28017",
        "num_cards": "3",
        "num_payments": "6",
        "incomes": "193.31",
        "month": "201301",
        "cp_dest": "28010",
        "category": "es_food"
      },
      {
        "cp_origin": "28806",
        "num_cards": "5",
        "num_payments": "6",
        "incomes": "192.88",
        "month": "201301",
        "cp_dest": "28010",
        "category": "es_food"
      },
      {
        "cp_origin": "28046",
        "num_cards": "6",
        "num_payments": "7",
        "incomes": "188.2",
        "month": "201301",
        "cp_dest": "28010",
        "category": "es_food"
      },
      {
        "cp_origin": "28049",
        "num_cards": "3",
        "num_payments": "6",
        "incomes": "182.68",
        "month": "201301",
        "cp_dest": "28010",
        "category": "es_food"
      },
      {
        "cp_origin": "28019",
        "num_cards": "5",
        "num_payments": "5",
        "incomes": "171.67",
        "month": "201301",
        "cp_dest": "28010",
        "category": "es_food"
      },
      {
        "cp_origin": "28018",
        "num_cards": "10",
        "num_payments": "11",
        "incomes": "333.39",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28032",
        "num_cards": "7",
        "num_payments": "7",
        "incomes": "327.65",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28220",
        "num_cards": "9",
        "num_payments": "10",
        "incomes": "312.16",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28821",
        "num_cards": "3",
        "num_payments": "5",
        "incomes": "304.3",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28932",
        "num_cards": "3",
        "num_payments": "4",
        "incomes": "281.39",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28054",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "235.14",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28750",
        "num_cards": "4",
        "num_payments": "4",
        "incomes": "233.15",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28400",
        "num_cards": "5",
        "num_payments": "8",
        "incomes": "224.91",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28600",
        "num_cards": "3",
        "num_payments": "4",
        "incomes": "219.41",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28100",
        "num_cards": "4",
        "num_payments": "5",
        "incomes": "203.6",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28037",
        "num_cards": "10",
        "num_payments": "11",
        "incomes": "202.39",
        "month": "201304",
        "cp_dest": "28004",
        "category": "es_health"
      },
      {
        "cp_origin": "28821",
        "num_cards": "5",
        "num_payments": "7",
        "incomes": "343.79",
        "month": "201303",
        "cp_dest": "28032",
        "category": "es_home"
      },
      {
        "cp_origin": "28035",
        "num_cards": "5",
        "num_payments": "8",
        "incomes": "308.41",
        "month": "201303",
        "cp_dest": "28032",
        "category": "es_home"
      },
      {
        "cp_origin": "28007",
        "num_cards": "6",
        "num_payments": "8",
        "incomes": "282.52",
        "month": "201303",
        "cp_dest": "28032",
        "category": "es_home"
      },
      {
        "cp_origin": "28021",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "209.09",
        "month": "201303",
        "cp_dest": "28032",
        "category": "es_home"
      },
      {
        "cp_origin": "28016",
        "num_cards": "5",
        "num_payments": "5",
        "incomes": "217.45",
        "month": "201302",
        "cp_dest": "28033",
        "category": "es_hotelservices"
      },
      {
        "cp_origin": "28033",
        "num_cards": "3",
        "num_payments": "4",
        "incomes": "203.67",
        "month": "201302",
        "cp_dest": "28033",
        "category": "es_hotelservices"
      },
      {
        "cp_origin": "28043",
        "num_cards": "6",
        "num_payments": "7",
        "incomes": "202.1",
        "month": "201302",
        "cp_dest": "28033",
        "category": "es_hotelservices"
      },
      {
        "cp_origin": "28223",
        "num_cards": "3",
        "num_payments": "4",
        "incomes": "157.25",
        "month": "201302",
        "cp_dest": "28033",
        "category": "es_hotelservices"
      },
      {
        "cp_origin": "28006",
        "num_cards": "3",
        "num_payments": "5",
        "incomes": "155.75",
        "month": "201302",
        "cp_dest": "28033",
        "category": "es_hotelservices"
      },
      {
        "cp_origin": "28100",
        "num_cards": "4",
        "num_payments": "6",
        "incomes": "135.75",
        "month": "201302",
        "cp_dest": "28033",
        "category": "es_hotelservices"
      },
      {
        "cp_origin": "28221",
        "num_cards": "3",
        "num_payments": "4",
        "incomes": "120.69",
        "month": "201302",
        "cp_dest": "28033",
        "category": "es_hotelservices"
      },
      {
        "cp_origin": "28032",
        "num_cards": "11",
        "num_payments": "25",
        "incomes": "516.14",
        "month": "201304",
        "cp_dest": "28007",
        "category": "es_hyper"
      },
      {
        "cp_origin": "28001",
        "num_cards": "6",
        "num_payments": "8",
        "incomes": "350.27",
        "month": "201304",
        "cp_dest": "28007",
        "category": "es_hyper"
      },
      {
        "cp_origin": "28050",
        "num_cards": "4",
        "num_payments": "8",
        "incomes": "313.96",
        "month": "201304",
        "cp_dest": "28007",
        "category": "es_hyper"
      },
      {
        "cp_origin": "28002",
        "num_cards": "8",
        "num_payments": "12",
        "incomes": "313.72",
        "month": "201304",
        "cp_dest": "28007",
        "category": "es_hyper"
      },
      {
        "cp_origin": "28300",
        "num_cards": "3",
        "num_payments": "10",
        "incomes": "287.4",
        "month": "201304",
        "cp_dest": "28007",
        "category": "es_hyper"
      },
      {
        "cp_origin": "28925",
        "num_cards": "3",
        "num_payments": "4",
        "incomes": "203.7",
        "month": "201211",
        "cp_dest": "28036",
        "category": "es_leisure"
      },
      {
        "cp_origin": "35011",
        "num_cards": "3",
        "num_payments": "5",
        "incomes": "187.95",
        "month": "201211",
        "cp_dest": "28036",
        "category": "es_leisure"
      },
      {
        "cp_origin": "28051",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "185.3",
        "month": "201211",
        "cp_dest": "28036",
        "category": "es_leisure"
      },
      {
        "cp_origin": "28036",
        "num_cards": "19",
        "num_payments": "20",
        "incomes": "2879.65",
        "month": "201212",
        "cp_dest": "28036",
        "category": "es_leisure"
      },
      {
        "cp_origin": "28020",
        "num_cards": "15",
        "num_payments": "16",
        "incomes": "1843.85",
        "month": "201212",
        "cp_dest": "28036",
        "category": "es_leisure"
      },
      {
        "cp_origin": "28043",
        "num_cards": "13",
        "num_payments": "18",
        "incomes": "1537.13",
        "month": "201212",
        "cp_dest": "28036",
        "category": "es_leisure"
      },
      {
        "cp_origin": "28022",
        "num_cards": "14",
        "num_payments": "16",
        "incomes": "1294.92",
        "month": "201212",
        "cp_dest": "28036",
        "category": "es_leisure"
      },
      {
        "cp_origin": "28050",
        "num_cards": "12",
        "num_payments": "15",
        "incomes": "1259.85",
        "month": "201212",
        "cp_dest": "28036",
        "category": "es_leisure"
      },
      {
        "cp_origin": "28005",
        "num_cards": "83",
        "num_payments": "98",
        "incomes": "5112.5",
        "month": "201212",
        "cp_dest": "28004",
        "category": "es_otherservices"
      },
      {
        "cp_origin": "28010",
        "num_cards": "110",
        "num_payments": "126",
        "incomes": "5011.75",
        "month": "201212",
        "cp_dest": "28004",
        "category": "es_otherservices"
      },
      {
        "cp_origin": "28003",
        "num_cards": "51",
        "num_payments": "56",
        "incomes": "3821.18",
        "month": "201212",
        "cp_dest": "28004",
        "category": "es_otherservices"
      },
      {
        "cp_origin": "28020",
        "num_cards": "43",
        "num_payments": "50",
        "incomes": "3735.71",
        "month": "201212",
        "cp_dest": "28004",
        "category": "es_otherservices"
      },
      {
        "cp_origin": "28029",
        "num_cards": "38",
        "num_payments": "50",
        "incomes": "3472.46",
        "month": "201212",
        "cp_dest": "28004",
        "category": "es_otherservices"
      },
      {
        "cp_origin": "28009",
        "num_cards": "36",
        "num_payments": "42",
        "incomes": "2996.5",
        "month": "201212",
        "cp_dest": "28004",
        "category": "es_otherservices"
      },
      {
        "cp_origin": "28002",
        "num_cards": "43",
        "num_payments": "51",
        "incomes": "2978.94",
        "month": "201212",
        "cp_dest": "28004",
        "category": "es_otherservices"
      },
      {
        "cp_origin": "28045",
        "num_cards": "55",
        "num_payments": "65",
        "incomes": "2966.83",
        "month": "201212",
        "cp_dest": "28004",
        "category": "es_otherservices"
      },
      {
        "cp_origin": "28028",
        "num_cards": "53",
        "num_payments": "58",
        "incomes": "2592.28",
        "month": "201212",
        "cp_dest": "28004",
        "category": "es_otherservices"
      },
      {
        "cp_origin": "28033",
        "num_cards": "36",
        "num_payments": "41",
        "incomes": "2571.18",
        "month": "201212",
        "cp_dest": "28004",
        "category": "es_otherservices"
      },
      {
        "cp_origin": "28022",
        "num_cards": "8",
        "num_payments": "8",
        "incomes": "350.67",
        "month": "201212",
        "cp_dest": "28013",
        "category": "es_sportsandtoys"
      },
      {
        "cp_origin": "28028",
        "num_cards": "5",
        "num_payments": "5",
        "incomes": "345.95",
        "month": "201212",
        "cp_dest": "28013",
        "category": "es_sportsandtoys"
      },
      {
        "cp_origin": "28100",
        "num_cards": "6",
        "num_payments": "6",
        "incomes": "344.87",
        "month": "201212",
        "cp_dest": "28013",
        "category": "es_sportsandtoys"
      },
      {
        "cp_origin": "28036",
        "num_cards": "6",
        "num_payments": "7",
        "incomes": "324.84",
        "month": "201212",
        "cp_dest": "28013",
        "category": "es_sportsandtoys"
      },
      {
        "cp_origin": "28903",
        "num_cards": "6",
        "num_payments": "6",
        "incomes": "323.53",
        "month": "201212",
        "cp_dest": "28013",
        "category": "es_sportsandtoys"
      },
      {
        "cp_origin": "28031",
        "num_cards": "4",
        "num_payments": "4",
        "incomes": "310.93",
        "month": "201212",
        "cp_dest": "28013",
        "category": "es_sportsandtoys"
      },
      {
        "cp_origin": "28050",
        "num_cards": "5",
        "num_payments": "5",
        "incomes": "298.92",
        "month": "201212",
        "cp_dest": "28013",
        "category": "es_sportsandtoys"
      },
      {
        "cp_origin": "28220",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "52.59",
        "month": "201303",
        "cp_dest": "28007",
        "category": "es_tech"
      },
      {
        "cp_origin": "28026",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "35.88",
        "month": "201303",
        "cp_dest": "28007",
        "category": "es_tech"
      },
      {
        "cp_origin": "28007",
        "num_cards": "96",
        "num_payments": "105",
        "incomes": "7035.65",
        "month": "201304",
        "cp_dest": "28007",
        "category": "es_tech"
      },
      {
        "cp_origin": "28038",
        "num_cards": "10",
        "num_payments": "13",
        "incomes": "1389.7",
        "month": "201304",
        "cp_dest": "28007",
        "category": "es_tech"
      },
      {
        "cp_origin": "28021",
        "num_cards": "7",
        "num_payments": "7",
        "incomes": "916.88",
        "month": "201304",
        "cp_dest": "28007",
        "category": "es_tech"
      },
      {
        "cp_origin": "28047",
        "num_cards": "5",
        "num_payments": "6",
        "incomes": "802.08",
        "month": "201304",
        "cp_dest": "28007",
        "category": "es_tech"
      },
      {
        "cp_origin": "28806",
        "num_cards": "4",
        "num_payments": "4",
        "incomes": "770.21",
        "month": "201304",
        "cp_dest": "28007",
        "category": "es_tech"
      },
      {
        "cp_origin": "28220",
        "num_cards": "10",
        "num_payments": "14",
        "incomes": "385.94",
        "month": "201301",
        "cp_dest": "28002",
        "category": "es_transportation"
      },
      {
        "cp_origin": "28660",
        "num_cards": "6",
        "num_payments": "9",
        "incomes": "369.93",
        "month": "201301",
        "cp_dest": "28002",
        "category": "es_transportation"
      },
      {
        "cp_origin": "28860",
        "num_cards": "7",
        "num_payments": "9",
        "incomes": "368.27",
        "month": "201301",
        "cp_dest": "28002",
        "category": "es_transportation"
      },
      {
        "cp_origin": "48992",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "339.5",
        "month": "201301",
        "cp_dest": "28002",
        "category": "es_transportation"
      },
      {
        "cp_origin": "28935",
        "num_cards": "4",
        "num_payments": "6",
        "incomes": "321.94",
        "month": "201301",
        "cp_dest": "28002",
        "category": "es_transportation"
      },
      {
        "cp_origin": "28400",
        "num_cards": "7",
        "num_payments": "7",
        "incomes": "321.88",
        "month": "201301",
        "cp_dest": "28002",
        "category": "es_transportation"
      },
      {
        "cp_origin": "31001",
        "num_cards": "6",
        "num_payments": "7",
        "incomes": "310.77",
        "month": "201301",
        "cp_dest": "28002",
        "category": "es_transportation"
      },
      {
        "cp_origin": "28036",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "806.64",
        "month": "201301",
        "cp_dest": "28046",
        "category": "es_travel"
      },
      {
        "cp_origin": "28002",
        "num_cards": "4",
        "num_payments": "7",
        "incomes": "406.41",
        "month": "201301",
        "cp_dest": "28046",
        "category": "es_travel"
      },
      {
        "cp_origin": "28006",
        "num_cards": "8",
        "num_payments": "182",
        "incomes": "7431.93",
        "month": "201302",
        "cp_dest": "28046",
        "category": "es_travel"
      },
      {
        "cp_origin": "28002",
        "num_cards": "4",
        "num_payments": "11",
        "incomes": "1826.8",
        "month": "201302",
        "cp_dest": "28046",
        "category": "es_travel"
      },
      {
        "cp_origin": "28006",
        "num_cards": "9",
        "num_payments": "163",
        "incomes": "9920.5",
        "month": "201303",
        "cp_dest": "28046",
        "category": "es_travel"
      },
      {
        "cp_origin": "28050",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "520.8",
        "month": "201303",
        "cp_dest": "28046",
        "category": "es_travel"
      },
      {
        "cp_origin": "28223",
        "num_cards": "4",
        "num_payments": "4",
        "incomes": "226.89",
        "month": "201304",
        "cp_dest": "28002",
        "category": "es_wellnessandbeauty"
      },
      {
        "cp_origin": "28804",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "171.27",
        "month": "201304",
        "cp_dest": "28002",
        "category": "es_wellnessandbeauty"
      },
      {
        "cp_origin": "28230",
        "num_cards": "5",
        "num_payments": "6",
        "incomes": "160.73",
        "month": "201304",
        "cp_dest": "28002",
        "category": "es_wellnessandbeauty"
      },
      {
        "cp_origin": "28047",
        "num_cards": "4",
        "num_payments": "8",
        "incomes": "159.17",
        "month": "201304",
        "cp_dest": "28002",
        "category": "es_wellnessandbeauty"
      },
      {
        "cp_origin": "28400",
        "num_cards": "4",
        "num_payments": "6",
        "incomes": "157.95",
        "month": "201304",
        "cp_dest": "28002",
        "category": "es_wellnessandbeauty"
      },
      {
        "cp_origin": "28320",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "156.17",
        "month": "201304",
        "cp_dest": "28002",
        "category": "es_wellnessandbeauty"
      },
      {
        "cp_origin": "28224",
        "num_cards": "4",
        "num_payments": "4",
        "incomes": "144.04",
        "month": "201304",
        "cp_dest": "28002",
        "category": "es_wellnessandbeauty"
      },
      {
        "cp_origin": "28109",
        "num_cards": "4",
        "num_payments": "4",
        "incomes": "132.19",
        "month": "201304",
        "cp_dest": "28002",
        "category": "es_wellnessandbeauty"
      },
      {
        "cp_origin": "28922",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "113.3",
        "month": "201304",
        "cp_dest": "28002",
        "category": "es_wellnessandbeauty"
      },
      {
        "cp_origin": "48011",
        "num_cards": "3",
        "num_payments": "3",
        "incomes": "111.24",
        "month": "201304",
        "cp_dest": "28002",
        "category": "es_wellnessandbeauty"
      }
    ];
  }]);
