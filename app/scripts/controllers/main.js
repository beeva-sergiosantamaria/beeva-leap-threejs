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


    var container, stats,light;

    var camera, controls, scene, raycaster, renderer;

    var cross;

    var mouse = new THREE.Vector2(), INTERSECTED;

    var radius = 100, theta = 0;

    var colores = [0x0040FF,0xFF4000,0xfca000,0xDF0174,0x3ADF00];//azul, rojo, amarillo

    init();
    animate();

    function init() {


      //-------------------  CAMARA  -------------------

      camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 10000); //angulo, proporcion ancho/alto, campo cercano, campo lejano.
      camera.position.z = 100;

      //------------------- CONTROLES -------------------

      controls = new THREE.TrackballControls( camera );
      controls.rotateSpeed = 1.0;
      controls.zoomSpeed = 1.2;
      controls.panSpeed = 0.8;
      controls.noZoom = false;
      controls.noPan = false;
      controls.staticMoving = true;
      controls.dynamicDampingFactor = 0.3;

      //------------------- ESCENA -------------------

      scene = new THREE.Scene();

      //------------------- NIEBLA -------------------

      //scene.fog = new THREE.FogExp2( 0x767676, 0.002 );

      // -------------------  LUCES -------------------

      light = new THREE.DirectionalLight( 0xffffff );
      light.position.set( 1, 1, 1 );
      scene.add( light );

      //------------------- GEOMETRIA -------------------

      var geometry = new THREE.BoxGeometry( 20,40,5 );

      //------------------- TEXTURA -------------------

      var material = new THREE.MeshLambertMaterial( { color:0x04B486 } ); //material sin textura
      //var Textura = new THREE.ImageUtils.loadTexture("textures/brick_bump.jpg"); //carga de textura
      //var material = new THREE.MeshBasicMaterial({ map:Textura, side:THREE.DoubleSide });
      //var material = new THREE.MeshLambertMaterial({ map:Textura, side:THREE.DoubleSide }); //aplicacion de textura como material

      //------------------- OPACIDAD -------------------

      //material.transparent = true;
      //material.opacity = 0.5;

      //------------------- ELEMENTOS -------------------

      for( var i = 0; i < 1000; i ++ ) {
        var bolitas = new THREE.SphereGeometry(1, 10, 10);
        var materialbolitas = new THREE.MeshBasicMaterial({color: 0xffffff});
        var esfera = new THREE.Mesh(bolitas, materialbolitas);
        esfera.position.x = ( Math.random() - 0.5 ) * 1000;
        esfera.position.y = ( Math.random() - 0.5 ) * 1000;
        esfera.position.z = ( Math.random() - 0.5 ) * 1000;
        scene.add(esfera);
      }

      for ( var e = 0; e < 16; e ++ ) {

          var phi = (e*0.39)+50 + Math.PI; //calcular valor de PI para la circunferencia.
          //var rand = colores[Math.floor(Math.random() * colores.length)];//seleccion color aleatoriamente
          //var material = new THREE.MeshLambertMaterial( { color:rand} ); //material sin textura
          material.transparent = true;
          material.opacity = 0.3;

          //-------------------  ESTABLECE LA MALLA PARA LOS PARAMETROS DE GEOMETRIA Y MATERIAL -------------------

          var mesh = new THREE.Mesh(geometry, material);

          //-------------------  ESTABLECE LA POSICION EN COORDENADAS -------------------

          // -- circunferencia --//
          mesh.position.x = 110 * Math.sin(phi);
          mesh.position.y = 0;
          mesh.position.z = 110 * Math.cos(phi);

          //------------------- PATRON DE ROTACION DEL ELEMENTO -------------------

          mesh.rotation.y = (0.36*e);

          //------------------- PATRON DE ESCALADO DEL ELEMENTO -------------------

          //mesh.scale.x = Math.random() + 0.5;
          //mesh.scale.y = Math.random() + 0.5;
          //mesh.scale.z = Math.random() + 0.5;

          //-------------------  AÑADE EL ELEMENTO A LA ESCENA  -------------------

          scene.add(mesh);
      }

      // ------------------- RENDERIZADO DE ESCENA CON PARAMETROS DE COLOR DE FONDO Y TAMAÑO -------------------

      container = document.getElementById( 'container' );
      renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setClearColor( 0x000000 );
      //renderer.setClearColor( scene.fog.color, 1 );//añadir efecto niebla
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.sortObjects = false;
      // ------------------- ETIQUETA HTML EN LA QUE SE GENERA EL RENDERIZADO -------------------

      container.appendChild( renderer.domElement );


      // ------------------- AÑADIR STATS EN PANTALLA PARA MONITORIZAR -------------------

      container = document.getElementById( 'container' );
      stats = new Stats(); //mostrar rendimiento
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.top = '0px';
      container.appendChild( stats.domElement );

      //  -------------------  LISTENER PARA RENDERIZAR LA ESCENA SEGUN RESOLUCION DE PANTALLA -------------------

      document.addEventListener( 'mousemove', onDocumentMouseMove, false ); //escucha posicion y movimiento puntero

      window.addEventListener( 'resize', onWindowResize, false ); //escucha redimensionado pantalla

    }

// ------------------- DETECTA POSISION DEL PUNTERO (ojo!!, modifica innerheight) -------------------

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight; //evitar deformado de elementos en un windows resize
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

      render();

    }
    function onDocumentMouseMove( event ) {

      raycaster = new THREE.Raycaster();
      event.preventDefault();
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
      //console.log(mouse.x);

      // ------------------- DETECTOR DE COLISIONES -------------------

      //var vector = new THREE.Vector3( mouse.x, mouse.y, 1 ).unprojectVector( camera );
      //
      //raycaster.set( camera.position, vector.sub( camera.position ).normalize() );
      //
      //var intersects = raycaster.intersectObjects( scene.children );
      //
      //if ( intersects.length > 0 ) {
      //
      //  if ( INTERSECTED != intersects[ 0 ].object ) {
      //
      //    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      //
      //    INTERSECTED = intersects[ 0 ].object;
      //    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      //    INTERSECTED.material.emissive.setHex( 0xff0000 );
      //
      //  }
      //
      //} else {
      //
      //  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      //
      //  INTERSECTED = null;
      //
      //}

    }

// -------------------  ANIMACION -------------------
    function animate() {

      requestAnimationFrame( animate );
      render();
      stats.update();
      controls.update();

    }
// ------------------- FUNCION QUE DFINE LA RENDERIZACION -------------------
    function render() {
      // ------------------- MOVIMIENTO AUTOMATICO CAMARA -----------------------

      //theta += 0.1;
      //
      //camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
      //camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
      //camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
      //camera.lookAt( scene.position );

      renderer.render( scene, camera );
    }

  }]);
