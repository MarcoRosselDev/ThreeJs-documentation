import scene from "./basic/Scene.js";
import camera from "./basic/Camera.js";
import renderer from "./basic/Renderer.js";
import cube from "./basic/shapes/Cubo.js";

scene.add(cube);

camera.position.set(1, 1, 1);
camera.lookAt(0, 0, 0);

// renderer.render(scene, camera); // esto toma una imagen de la escena
// console.log(scene, camera, renderer, cube);

setInterval(() => {
  cube.rotation.y += 0.01; // esto esta en radianes y un radian = 180 grados, por eso se trabajara con decimas de readianes
  renderer.render(scene, camera);
}, 1000 / 60);
