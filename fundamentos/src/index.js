import scene from "./basic/Scene.js";
import camera from "./basic/Camera.js";
import renderer from "./basic/Renderer.js";
import cube from "./basic/shapes/Cubo.js";
import light from "./basic/Light.js";
import resize from "./basic/Resize.js";
import plane from "./basic/shapes/Plane.js";
import loopMachine from "./basic/LoopMachine.js";

scene.add(cube);
scene.add(light);
scene.add(plane);

camera.position.set(2, 2, 2);
camera.lookAt(cube.position);
plane.position.set(-1, -1, -1);

// renderer.render(scene, camera); // esto toma una imagen de la escena
// console.log(scene, camera, renderer, cube);

loopMachine.addCallback(() => {
  cube.rotation.y += 0.01; // esto esta en radianes y un radian = 180 grados, por eso se trabajara con decimas de readianes
  renderer.render(scene, camera);
});

resize.start(renderer);
loopMachine.start();
