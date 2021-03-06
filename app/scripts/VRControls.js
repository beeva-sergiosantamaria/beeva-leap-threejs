/**
 * Created by sergiosantamaria on 23/12/14.
 */

THREE.VRControls = function ( object, callback ) {

  var vrInput;

  var onVRDevices = function ( devices ) {

    for ( var i = 0; i < devices.length; i ++ ) {

      var device = devices[ i ];

      if ( device instanceof PositionSensorVRDevice ) {

        vrInput = devices[ i ];
        return; // We keep the first we encounter

      }

    }

    if ( callback !== undefined ) {

      callback( 'HMD not available' );

    }

  };

  if ( navigator.getVRDevices !== undefined ) {

    navigator.getVRDevices().then( onVRDevices );

  } else if ( callback !== undefined ) {

    callback( 'Your browser is not VR Ready' );

  }

  this.update = function () {

    if ( vrInput === undefined ) return;

    var orientation = vrInput.getState().orientation;

    if ( orientation !== null ) {

      object.quaternion.set( orientation.x, orientation.y, orientation.z, orientation.w );

    }

  };

  this.zeroSensor = function () {

    if ( vrInput === undefined ) return;

    vrInput.zeroSensor();

  };

};
