const scene = new THREE.Scene(); //Se crea una nueva escena
            
//Se crea un nueva camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();//Se crea un nuevo render
renderer.setSize( window.innerWidth, window.innerHeight );//Se crea el tamaño del render
document.body.appendChild( renderer.domElement );//renderer.domElement
            
const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-10, 0, 0),
    new THREE.Vector3(-5, 5, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(5, -5, 0),
    new THREE.Vector3(10, 0, 0)
]);

// Crear la geometría del tubo utilizando TubeGeometry
const tubeGeometry = new THREE.TubeGeometry(curve, 64, 1, 8, 8, false);

// Crear un material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Crear una malla utilizando la geometría y el material
const tube = new THREE.Mesh(tubeGeometry, material);

// Añadir la malla a la escena
scene.add(tube);

//Posición de la cámara en el eje z
camera.position.z = 20;

//Funcion para animar el cubo y hacer que este rote
function animate() 
{
    // requestAnimationFrame: Método que genera animaciones fluidas
    requestAnimationFrame( animate );

    //Rotar el tubo en el eje x y y
    tube.rotation.x += 0.01;
    tube.rotation.y += 0.01;

    //.render: Renderiza una escena u otro tipo de objeto usando una cámara 
    //(scene: Object3D, camera: Cámara)
    renderer.render( scene, camera );
}

animate();

// Renderizar la escena renderer.render(scene, camera);


            
            