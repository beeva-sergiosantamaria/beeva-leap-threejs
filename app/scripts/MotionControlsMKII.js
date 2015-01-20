/**
 * @author jbouny / http://github.com/jbouny
 */

// This control perform rotation on one object by using gyroscope data.
// It only works on devices and browsers providing the deviceorientation event (smartphones, tablets).
// It permits to control the 3D camera with a natural way, by moving the device around oneself.
// One application can be augmented reality.

THREE.MotionControls = function ( object3D ) {

	this.object3D = object3D;
	this.object3D.rotation.order = "YXZ";
	this.orientation = new THREE.Euler( 0, 0, 0 );
	this.DEG2RAD = Math.PI / 180;
	this.anglesOrder = [];
	this.anglesOffset = [];
	this.anglesCoef = [];
	this.initial;
	
	var scope = this;
	
	this.onDeviceOrientation = function( event ) {
		if( event.alpha !== null && event.beta !== null && event.gamma !== null ) {
			console.log(event);
			var levent = event;
			levent.alpha = -80;
			if(levent.alpha < 0)
				levent.alpha = 360 + levent.alpha;
			if(levent.beta < 0)
				levent.beta = 360 + levent.beta;
			if(levent.gamma < 0)
				levent.gamma = 360 + levent.gamma;
			if(!scope.initial){
				scope.initial = levent;
				scope.orientation.set( 0,0,0 );
				return;
			}
			var rotation = [
				levent.beta - scope.initial.beta,
				levent.alpha - scope.initial.alpha,
				levent.gamma - scope.initial.gamma
			];


			for( var i = 0; i < 3; ++i ){
				rotation[i] = ( rotation[scope.anglesOrder[i]]) * scope.DEG2RAD;
			}
			
			scope.orientation.set( rotation[0], rotation[1], rotation[2] );
		}
	};
	
	this.onOrientationChange = function( event ) {	
		/* Here, manage angles by taking care about the screen orientation
		 * Soon, we can hope the Orientation API in browsers to lock it:
		 * http://www.w3.org/TR/screen-orientation/
		 *
		 * Moreover, each browser manage angles differently, so these parameters don't work with every browsers
		 * Parameters tested (23/02/2014) on browsers: 23/02/2014
		 * - Firefox stable : Wrong angles
		 * - Firefox beta : OK, best experience (data are already filtered)
		 * - Chrome beta : OK but many noise and unstable
		 * - Opera beta : OK but many noise and unstable
		 */
	
		switch( window.orientation )
		{

			case 90:
				scope.anglesOrder = [ 2, 1, 0 ];
				scope.anglesOffset = [ 90, -90, 0 ];
				scope.anglesCoef = [ 1, 1, -1 ];
				break;
			
			case -90:
				scope.anglesOrder = [ 2, 1, 0 ];
				scope.anglesOffset = [ 90, 90, 0 ];
				scope.anglesCoef = [ -1, 1, 1 ];
				break;
				
			default:
				scope.anglesOrder = [ 2, 1, 0 ];
				scope.anglesOffset = [ 90, 90, 0 ];
				scope.anglesCoef = [ -1, 1, 1 ];
				break;
		}
	};
	
	window.addEventListener( 'deviceorientation', this.onDeviceOrientation, false );
	window.addEventListener( 'orientationchange', this.onOrientationChange, false );
	
	window.orientation = 90;
	this.onOrientationChange();
	
	if(window.screen.mozLockOrientation ) { 
		window.screen.mozLockOrientation( 'portrait-primary' );
   
		window.screen.onorientationchange = function () {
			window.screen.mozUnlockOrientation();
			window.screen.mozLockOrientation( 'portrait-primary' );
		};
	   
		document.addEventListener( 'visibilityChange', function (e) {
			if( !document.hidden ) {
				window.screen.mozUnlockOrientation();
				window.screen.mozLockOrientation( 'portrait-primary' );
			}
		});
	}
};

THREE.MotionControls.prototype.update = function() {
	console.log(this.orientation.x);
	if(this.orientation.x > 1)
		this.orientation.x = 0;
	this.object3D.rotation.set( -this.orientation.x/6, this.orientation.y/6, this.orientation.z/6 );
};