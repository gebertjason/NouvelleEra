// 1. Scene Initialization
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ensure OrbitControls is imported correctly
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// 2. Lighting Setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
camera.add(pointLight);

// 3. Adding 3D Objects
const storeGeometry = new THREE.BoxGeometry(10, 10, 10);
const storeMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: true });
const store = new THREE.Mesh(storeGeometry, storeMaterial);
scene.add(store);

// Position the camera
camera.position.set(0, 0, 5);

// 4. Handling Window Resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

// 5. Animation Loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
  
  

