const geometry = new THREE.PlaneGeometry(3, 3);
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometry, material);

plane.rotation.x += Math.PI * 0.5;
// plane.position.set();

export default plane;
