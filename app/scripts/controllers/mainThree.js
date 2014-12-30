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

      //controller = new Leap.Controller();

      camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000 );
      camera.position.z = 250;
      //camera.setLens(70);

      //controls = new THREE.LeapPaddleControls( camera , controller );

      //controls = new THREE.LeapTrackballControls( camera , controller );
      //controls.rotationSpeed            = 10;
      //controls.rotationDampening        = .98;
      //controls.zoom                     = 40;
      //controls.zoomDampening            = .6;
      //controls.zoomCutoff               = .9;
      //controls.zoomEnabled              = true;
      //
      //controls.minZoom                  = 20;
      //controls.maxZoom                  = 80;

      controls = new THREE.TrackballControls( camera );
      controls.rotateSpeed = 1.0;
      controls.zoomSpeed = 1.2;
      controls.panSpeed = 0.8;
      controls.noZoom = false;
      controls.noPan = false;
      controls.staticMoving = true;
      controls.dynamicDampingFactor = 0.3;

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

      for ( var i = 0; i < 754; i ++ ) {

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

      //controller.connect();

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

      var vector = new THREE.Vector3(mouse.x, mouse.y, 1).unproject(camera);

      raycaster.set(camera.position, vector.sub(camera.position).normalize());

      var intersects = raycaster.intersectObjects(scene.children);

      if (intersects.length > 0) {

        if (INTERSECTED != intersects[0].object) {

          if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

          INTERSECTED = intersects[0].object;
          INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
          INTERSECTED.material.emissive.setHex(0xff0000);

        }

      } else {

        if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

        INTERSECTED = null;

      }

      renderer.render(scene, camera);
    }
  }]);
