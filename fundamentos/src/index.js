import scene from "./basic/Scene.js";
import camera from "./basic/Camera.js";
import renderer from "./basic/Renderer.js";
import cube from "./basic/shapes/Cubo.js";

scene.add(cube);

camera.position.set(1, 1, 1);
camera.lookAt(0, 0, 0);

renderer.render(scene, camera); // esto toma una imagen de la escena
// console.log(scene, camera, renderer, cube);
