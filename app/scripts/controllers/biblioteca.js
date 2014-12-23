/**
 * Created by sergiosantamaria on 23/12/14.
 */
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

    init();
    animate();

    function init() {

      //var colores = [0x0040FF,0xffffff,0xfca000,0x3ADF00,0xFF4000,0xDF0174,0xBDBDBD,0x61380B,0xfca009,0xfca010];//azul, blanco, amarillo, verde, rojo, rosa, gris, marron, amarillo, amarillo
      var colores = [0x0040FF,0xFF4000,0xfca000,0xDF0174,0x3ADF00];//azul, rojo, amarillo

      //-------------------  SITUAR CAMARA  -------------------

      camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000); //angulo, proporcion ancho/alto, campo cercano, campo lejano.
      camera.position.z = 400;

      //------------------- DEFINIR CONTROLES -------------------

      //controls = new THREE.OrbitControls( camera );
      //controls.addEventListener( 'change', render );//actualizar render cuando se cambia la perspectiva

      controls = new THREE.TrackballControls( camera );
      controls.rotateSpeed = 1.0;
      controls.zoomSpeed = 1.2;
      controls.panSpeed = 0.8;
      controls.noZoom = false;
      controls.noPan = false;
      controls.staticMoving = true;
      controls.dynamicDampingFactor = 0.3;

      //------------------- CREAR LA ESCENA PARA EL RENDERIZADO -------------------

      scene = new THREE.Scene();

      //------------------- AÑADIR EFECTO NIEBLA (OPCIONAL) -------------------

      //scene.fog = new THREE.FogExp2( 0x767676, 0.002 );

      // -------------------  DEFINO LAS LUCES (ambiental y direccional) -------------------

      light = new THREE.DirectionalLight( 0xffffff );
      light.position.set( 1, 1, 1 );
      scene.add( light );
      //
      //light = new THREE.DirectionalLight( 0x002288 );
      //light.position.set( -1, -1, -1 );
      //scene.add( light );
      //
      //light = new THREE.AmbientLight( 0x222222 );
      //scene.add( light );

      //------------------- DEFINIR LA GEOMETRIA DE LOS ELEMENTOS -------------------

      var geometry = new THREE.BoxGeometry( 20,40,5 );

      //var points = [];
      //for ( var i = 0; i < 10; i ++ ) {
      //  points.push( new THREE.Vector3( Math.sin( i * 20 )+60, 0, 50) );
      //
      //}
      //var geometry = new THREE.LatheGeometry( points );
      //var material = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
      //var lathe = new THREE.Mesh( geometry, material );
      //scene.add( lathe );

      //-------------------DEFINIR LA TEXTURA DE LOS ELEMENTOS (material simple o material con una textura, con o sin transparencia)-------------------

      //var material = new THREE.MeshLambertMaterial( { color:0xfca000 } ); //material sin textura
      //var Textura = new THREE.ImageUtils.loadTexture("textures/brick_bump.jpg"); //carga de textura
      //var material = new THREE.MeshBasicMaterial({ map:Textura, side:THREE.DoubleSide });
      //var material = new THREE.MeshLambertMaterial({ map:Textura, side:THREE.DoubleSide }); //aplicacion de textura como material

      //------------------- OPACIDAD -------------------
      //material.transparent = true;
      //material.opacity = 0.5;

      //------------------- FOR PARA CREAR TANTOS ELEMENTOS COMO SE QUIERA -------------------

      for ( var e = 0; e < 16; e ++ ) { //filas
        //for ( var i = 0; i < 5; i ++ ) {//columnas
        var rand = colores[Math.floor(Math.random() * colores.length)];//seleccion color aleatoriamente
        var material = new THREE.MeshLambertMaterial( { color:rand} ); //material sin textura
        var phi = (e + 12) * 0.250 + Math.PI; //calcular valor de PI para la circunferencia.
        //material.transparent = true;
        //material.opacity = 0.5;

        //-------------------  ESTABLECE LA MALLA PARA LOS PARAMETROS DE GEOMETRIA Y MATERIAL -------------------

        var mesh = new THREE.Mesh(geometry, material);

        //-------------------  ESTABLECE LA POSICION EN COORDENADAS -------------------
        //-- Posicion aleatoria -- //
        //mesh.position.x = ( Math.random() - 0.5 ) * 100;
        //mesh.position.y = ( Math.random() - 0.5 ) * 100;
        //mesh.position.z = ( Math.random() - 0.5 ) * 100;
        // -- posicion fija --//
        //mesh.position.x = 30*e;
        //mesh.position.y = 0;
        //mesh.position.z = 480-(30*e);
        // -- circunferencia --//
        mesh.position.x = 110 * Math.sin(phi);
        mesh.position.y = 0;
        mesh.position.z = 110 * Math.cos(phi);
        // -- esfera -- //
        //var sphere = new THREE.Object3D();
        //vector = new THREE.Vector3();
        //phi = Math.acos(-1 + ( 2 * i ) / (VIZ.count - 1));
        //theta = Math.sqrt((VIZ.count - 1) * Math.PI) * phi;
        //sphere.position.x = 800 * Math.cos(theta) * Math.sin(phi);
        //sphere.position.y = 800 * Math.sin(theta) * Math.sin(phi);
        //sphere.position.z = 800 * Math.cos(phi);
        //vector.copy(sphere.position).multiplyScalar(2);
        //sphere.lookAt(vector);
        //d['sphere'] = sphere;
        // -- helice -- //
        //var helix = new THREE.Object3D();
        //vector = new THREE.Vector3();
        //phi = (i + 12) * 0.250 + Math.PI;
        //helix.position.x = 1000 * Math.sin(phi);
        //helix.position.y = - (i * 8) + 500;
        //helix.position.z = 1000 * Math.cos(phi);
        //vector.x = helix.position.x * 2;
        //vector.y = helix.position.y;
        //vector.z = helix.position.z * 2;
        //helix.lookAt(vector);
        //d['helix'] = helix;
        // -- por capas --//
        //var grid = new THREE.Object3D();
        //grid.position.x = (( i % 5 ) * 400) - 800;
        //grid.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
        //grid.position.z = (Math.floor( i / 25 )) * 1000 - 2000;
        //d['grid'] = grid;

        //------------------- PATRON DE ROTACION DEL ELEMENTO -------------------
        //mesh.rotation.x = Math.random() * 2 * Math.PI;
        //mesh.rotation.y = Math.random() * 2 * Math.PI;
        //mesh.rotation.z = Math.random() * 2 * Math.PI;
        mesh.rotation.y = (0.24*e);

        //------------------- PATRON DE ESCALADO DEL ELEMENTO -------------------
        //mesh.scale.x = Math.random() + 0.5;
        //mesh.scale.y = Math.random() + 0.5;
        //mesh.scale.z = Math.random() + 0.5;

        //-------------------  GENERA MATRIZ  -------------------

        //mesh.updateMatrix();
        //mesh.matrixAutoUpdate = false;

        //-------------------  AÑADE EL ELEMENTO A LA ESCENA  -------------------

        scene.add(mesh);
        //}
      }

      // ------------------- RENDERIZADO DE ESCENA CON PARAMETROS DE COLOR DE FONDO Y TAMAÑO -------------------

      container = document.getElementById( 'container' );
      renderer = new THREE.WebGLRenderer( { antialias: false } );
      renderer.setClearColor( 0x585858 );
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
