const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.name = "cubo";

export default cube;

// MeshBasicMaterial --> emite luz
// MeshStandardMaterial --> nesecita de un tipo de luz para verce
