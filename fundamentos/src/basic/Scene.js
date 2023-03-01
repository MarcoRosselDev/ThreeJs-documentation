import * as THREE from "https://unpkg.com/three/build/three.module.js";
import cube from "./shapes/Cubo";

const scene = new THREE.Scene();
scene.add(cube);

export default scene;
