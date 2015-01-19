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
    this.initial;
    this.DEG2RAD = Math.PI / 180;
    this.anglesOrder = [];
    this.anglesOffset = [];
    this.anglesCoef = [];
    this.sings = [];

    var scope = this;

    this.onDeviceOrientation = function( event ) {
        if( event.alpha !== null && event.beta !== null && event.gamma !== null ) {

            var rotation = [
                event.beta,
                event.alpha,
                event.gamma
            ];

            for( var i = 0; i < 3; ++i )
                rotation[i] = ( rotation[scope.anglesOrder[i]] * scope.anglesCoef[i] + scope.anglesOffset[i] ) * scope.DEG2RAD;

            scope.orientation.set( rotation[0], rotation[1], rotation[2] );
        }
    };

    this.onOrientationChange = function( event ) {

        console.error("ORIENTATION ", window.orientation);
        switch( window.orientation )
        {
            case 90:
                scope.anglesOrder = [ 2, 1, 0 ];
                scope.anglesOffset = [ 90, -90, 0 ];
                scope.anglesCoef = [ 1, 1, -1 ];
                //this.initial.z = -this.initial.z;
                //this.initial.x = -this.initial.x;
                break;

            case -90:
                scope.anglesOrder = [ 2, 1, 0 ];
                scope.anglesOffset = [ 90, 90, 0 ];
                scope.anglesCoef = [ -1, 1, 1 ];
                //this.initial.z = -this.initial.z;
                //this.initial.x = -this.initial.x;
                break;

            default:
                scope.anglesOrder = [ 2, 1, 0 ];
                scope.anglesOffset = [ 90, -90, 0 ];
                scope.anglesCoef = [ 1, 1, -1 ];
                break;
        }
    };

    window.addEventListener( 'deviceorientation', this.onDeviceOrientation, false );
    window.addEventListener( 'orientationchange', this.onOrientationChange, false );

    window.orientation = 90;
    this.onOrientationChange();

};

THREE.MotionControls.prototype.update = function() {
    var rotation = new THREE.Euler( 0, 0, 0 );
    if(!this.initial) {
        if (this.orientation.x != 0 && this.orientation.y != 0) {
            this.initial = new THREE.Euler(0, 0, 0);
            this.initial.copy(this.orientation);
            console.error("Initial, ", this.orientation);
            this.sings = [
                this.orientation.x > 0 ? 1: -1,
                this.orientation.y > 0 ? 1: -1,
                this.orientation.z > 0 ? 1: -1
            ];
        }
    }
    else{
        var auxSings = [
            this.orientation.x > 0 ? 1: -1,
            this.orientation.y > 0 ? 1: -1,
            this.orientation.z > 0 ? 1: -1
        ];
        if(auxSings[0] != this.sings[0]){
            //console.error("-X");
        }
        if(auxSings[1] != this.sings[1]){
            this.initial.x = this.initial.x * this.sings[1];
            //console.error("-Y");
        }
        if(auxSings[2] != this.sings[2]){
            //console.error("-Z");
        }

        if(this.orientation.y > (3.14 - this.initial.y))
            this.orientation.y = this.orientation.y - 3.14;
        console.log(this.orientation);

        rotation.set(this.orientation.x , this.orientation.y - this.initial.y , this.orientation.z - this.initial.z );
        this.object3D.rotation.set( -rotation.x/6, rotation.y/6, rotation.z/6 );
    }
};
