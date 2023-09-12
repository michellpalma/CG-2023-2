//Anotaciones: https://www.htmlcsscolor.com/hex/FF9900 (pagina para colores)
//              https://threejs.org/docs/#manual/en/introduction/Installation (Pagina funciones)

//Se crea una nueva escena
const scene = new THREE.Scene(); 

//Se crea un nueva camara
//Perspectiva: (vertical, radio, cerca, lejos)
const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Ortogonal:(izquierda, derecha, arriba, abajo, cerca, lejos)
const camera2 = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 1000);

//Se crea un nuevo render
const renderer = new THREE.WebGLRenderer();
            
//Se ajusta el tamaño del render           
renderer.setSize( window.innerWidth, window.innerHeight );
            
//renderer.domElement: lienzo donde el renderizador dibuja su salida
document.body.appendChild( renderer.domElement );
            
//BoxGeometry:crea el cubo con sus dimensionjes	y se ajusta su material		
const geometryC = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh( geometryC, material1 );


//SphereGeometry:creala esfera con sus dimensionjes	y se ajusta su material	
const geometryE = new THREE.SphereGeometry(1, 32, 16);
const material2 = new THREE.MeshBasicMaterial({color: 0xff9900});
const sphere = new THREE.Mesh( geometryE, material2 );


//En la escena se añade el cubo y la esfera
scene.add(cube);
scene.add(sphere);

cube.position.set(-2, 0.5, 1);
cube.rotation.x += 1;


//Posición de la cámara en el eje z
camera1.position.z = 5;
camera2.position.z = 5;

function init() 
{
    currentCamera = camera1;
    window.addEventListener('keydown', toggleCamera);
}
function toggleCamera(event) 
{
    if (event.key === 'c' || event.key === 'C') {
        // Alternar entre cámaras
        if (currentCamera === camara1) 
        {
            currentCamera = camara2;
        } 
        else 
        {
            currentCamera = camara1;
        }
    }
}
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    currentCamera.aspect = newWidth / newHeight;
    currentCamera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});
init();

renderer.render(scene, currentCamera);
            