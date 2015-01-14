var step = (camera.position.z == 0 ? Math.pow(10, (Math.log(camera.near) + Math.log(camera.far))/Math.log(10))/10.0 : camera.position.z);

function zoom(zoom){
    var z = zoom;
    var zDelta = z;
    var t = new THREE.Vector3().subVectors(camera.position, new THREE.Vector3(0, 0, 0));
    var lengthDelta = 2 * THREE.Math.mapLinear(zDelta, -400, 400, -step, step);
    t.normalize().multiplyScalar(lengthDelta);
    camera.position.sub(t);
}

function pan(pan){
    var v = camera.localToWorld(new THREE.Vector3(panTransform(pan[0]), panTransform(pan[1]), panTransform(pan[2])));
    v.sub(camera.position);
    camera.position.sub(v);
}

function panTransform(delta) {
    return 2 * THREE.Math.mapLinear(delta, -400, 400, -step, step);
}