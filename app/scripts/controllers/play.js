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

      var container, container2,  stats, controls, controller, projector;
      var camera, scene, raycaster, renderer, light;

      var objects = [], objectsControls = [];
      var coords1, coords2, coords3;

      var lastControlsIndex = -1, controlsIndex = -1, index = -1;


      init();
      animateX();
    //animate();

      function changeControlsIndex() {
        if (lastControlsIndex == controlsIndex) {
          if (index != controlsIndex && controlsIndex > -2) {
            // new object or camera to control
            if (controlsIndex > -2) {
              if (index > -1) objects[index].material.color.setHex(0xefefef);
              index = controlsIndex;
              if (index > -1) objects[index].material.color.setHex(0xff0000);
            }
          };
        };
        lastControlsIndex = controlsIndex;
      };

      function transform(tipPosition, w, h) {
        var width = 150;
        var height = 150;
        var minHeight = 100;

        var ftx = tipPosition[0];
        var fty = tipPosition[1];
        ftx = (ftx > width ? width - 1 : (ftx < -width ? -width + 1 : ftx));
        fty = (fty > 2*height ? 2*height - 1 : (fty < minHeight ? minHeight + 1 : fty));
        var x = THREE.Math.mapLinear(ftx, -width, width, 0, w);
        var y = THREE.Math.mapLinear(fty, 2*height, minHeight, 0, h);
        return [x, y];
      };

      function showCursor(frame) {
        var hl = frame.hands.length;
        var fl = frame.pointables.length;

        if (hl == 1 && fl == 1) {
          var f = frame.pointables[0];
          var cont = $(renderer.domElement);
          var offset = cont.offset();
          var coords = transform(f.tipPosition, cont.width(), cont.height());
          $("#cursor").css('left', offset.left + coords[0] - (($("#cursor").width() - 1)/2 + 1));
          $("#cursor").css('top', offset.top + coords[1] - (($("#cursor").height() - 1)/2 + 1));
        } else {
          $("#cursor").css('left', -1000);
          $("#cursor").css('top', -1000);
        };
      };

      function focusObject(frame) {
        var hl = frame.hands.length;
        var fl = frame.pointables.length;

        if (hl == 1 && fl == 1) {
          var f = frame.pointables[0];
          var cont = $(renderer.domElement);
          var coords = transform(f.tipPosition, cont.width(), cont.height());
          var vpx = (coords[0]/cont.width())*2 - 1;
          var vpy = -(coords[1]/cont.height())*2 + 1;
          var vector = new THREE.Vector3(vpx, vpy, 0.5);
          projector.unprojectVector(vector, camera);
          var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
          var intersects = raycaster.intersectObjects(objects);
          if (intersects.length > 0) {
            var i = 0;
            while(!intersects[i].object.visible) i++;
            var intersected = intersects[i];
            return objects.indexOf(intersected.object);
          } else {
            return -1;
          };
        };

        return -2;
      };

      function render() {
        renderer.render(scene, camera);
      };

      function onWindowResize() {
        camera.aspect = $(window).width()/$(window).height();
        camera.updateProjectionMatrix();
        renderer.setSize($(window).width(), $(window).height());
        render();
      };
      function init() {

        container2 = document.createElement( 'div' );
        document.body.appendChild( container2 );

        container = document.getElementById( 'container' );
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 8000 );
        camera.position.z = 250;

        //controller = new Leap.Controller();

        controls = new THREE.LeapCameraControls(camera);
        controls.rotateEnabled  = true;
        controls.rotateSpeed    = 3;
        controls.rotateHands    = 1;
        controls.rotateFingers  = [2, 3];

        controls.zoomEnabled    = true;
        controls.zoomSpeed      = 6;
        controls.zoomHands      = 1;
        controls.zoomFingers    = [4, 5];
        controls.zoomMin        = 50;
        controls.zoomMax        = 2000;

        controls.panEnabled     = true;
        controls.panSpeed       = 2;
        controls.panHands       = 2;
        controls.panFingers     = [6, 12];
        controls.panRightHanded = false; // for left-handed person

        scene = new THREE.Scene();

        //scene.fog = new THREE.FogExp2( 0x767676, 0.002 );
        projector = new THREE.Projector();

        var origin = new THREE.Vector3(0, 0, 0);


        coords1 = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), origin, 75, 0xcccccc);
        coords2 = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), origin, 75, 0xcccccc);
        coords3 = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), origin, 75, 0xcccccc);
        scene.add(coords1);
        scene.add(coords2);
        scene.add(coords3);

        var lineGeometry = new THREE.Geometry();
        var vertArray = lineGeometry.vertices;
        vertArray.push(new THREE.Vector3(1000, 0, 0), origin, new THREE.Vector3(0, 1000, 0), origin, new THREE.Vector3(0, 0, 1000));
        lineGeometry.computeLineDistances();
        var lineMaterial = new THREE.LineDashedMaterial({color: 0xcccccc, dashSize: 1, gapSize: 2});
        var coords = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(coords);


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


          var objectControls = new THREE.LeapObjectControls(camera, object);

          objectControls.rotateEnabled  = true;
          objectControls.rotateSpeed    = 3;
          objectControls.rotateHands    = 1;
          objectControls.rotateFingers  = [2, 3];

          objectControls.scaleEnabled   = true;
          objectControls.scaleSpeed     = 3;
          objectControls.scaleHands     = 1;
          objectControls.scaleFingers   = [4, 5];

          objectControls.panEnabled     = true;
          objectControls.panSpeed       = 3;
          objectControls.panHands       = 2;
          objectControls.panFingers     = [6, 12];
          objectControls.panRightHanded = false; // for left-handed person

          scene.add(object);
          objects.push(object);
          objectsControls.push(objectControls);

          //object.updateMatrix();
          //object.matrixAutoUpdate = false;


        }


        // light
        light = new THREE.PointLight(0xefefef);
        light.position = camera.position;
        scene.add(light);

        renderer.render(scene, camera);


        /*controller.connect();*/


    }


    //

      function animateX(){
        // leap loop
        Leap.loop(function(frame) {
          // show cursor
          showCursor(frame);

          // set correct camera control
          controlsIndex = focusObject(frame);
          if (index == -1) {
            controls.update(frame);
          } else {
            objectsControls[index].update(frame);
          };

          // custom modifications (here: show coordinate system always on target and light movement)
          console.log(controls.target);
          coords1.position = controls.target;
          coords2.position = controls.target;
          coords3.position = controls.target;
          light.position   = camera.position;

          render();
        });

        // detect controls change
        setInterval(changeControlsIndex, 250);
      }

    function animate() {

      requestAnimationFrame( animate );
      controls.update();
      renderer.render( scene, camera );
      //render();

    }
  }]);
