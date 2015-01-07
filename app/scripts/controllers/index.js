/**
 * Created by sergiosantamaria on 7/01/15.
 */

'use strict';

angular.module('pruebaApp')

  .controller('fondoController', ['$scope',function() {

    var camera, scene, renderercube, vectorcubo, cubo, geometry, material;
    var controls;

    init();

    function init() {
      camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 200000 );
      camera.position.z = 5000;

      controls = new THREE.TrackballControls( camera );

      controls.rotateSpeed = 0.2;
      controls.zoomSpeed = 0.2;
      controls.panSpeed = 0.2;

      scene = new THREE.Scene();

      var light = new THREE.DirectionalLight( 0xffffff );
      light.position.set( 1, 1, 1 );
      scene.add( light );

      light = new THREE.DirectionalLight( 0x002288 );//azul
      light.position.set( -1, -1, -1 );
      scene.add( light );

      light = new THREE.AmbientLight( 0x858586 );//gris oscuro
      scene.add( light );

      geometry = new THREE.OctahedronGeometry( 60000,6 );

      var Textura = new THREE.ImageUtils.loadTexture("textures/text3.jpg"); //carga de textura
      material = new THREE.MeshLambertMaterial({ map:Textura, side:THREE.DoubleSide }); //aplicacion de textura como material
      //material = new THREE.MeshLambertMaterial( { color: 0xAEB404 } );
      //material.transparent = true;
      //material.opacity = 0.2;

      cubo = new THREE.Mesh( geometry,material );
      vectorcubo = new THREE.Vector3();

      cubo.position.x = 110;
      cubo.position.y = 110;
      cubo.position.z = 110;

      //object.rotation.y = (0.36*i);

      vectorcubo.x = cubo.position.x * 2;
      vectorcubo.y = cubo.position.y * 2;
      vectorcubo.z = cubo.position.z * 2;
      //object.lookAt(vector);

      cubo.updateMatrix();
      cubo.matrixAutoUpdate = false;

      scene.add( cubo );

      var container = document.getElementById( 'fondo' );
      renderercube = new THREE.WebGLRenderer( {antialias: true} );
      renderercube.setClearColor( 0x000000 );
      //renderer.setClearColor( scene.fog.color, 1 );//añadir efecto niebla
      renderercube.setSize( window.innerWidth, window.innerHeight );
      renderercube.sortObjects = false;
      container.appendChild(renderercube.domElement);

      function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderercube.setSize( window.innerWidth, window.innerHeight );

        render();

      }
      function animate() {

        requestAnimationFrame( animate );

        controls.update();

      }

      function render() {

        renderercube.render( scene, camera );
      }
    }
  }]);
