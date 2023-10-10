//Anotaciones: https://www.htmlcsscolor.com/hex/FF9900 (pagina para colores)
//Se crea una nueva escena
const scene = new THREE.Scene(); 
            
//Se crea un nueva camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            
//Se crea un nuevo render
const renderer = new THREE.WebGLRenderer();
            
//Se crea el tamaño del render: setSize(ancho,alto,booleano(cambio de estilo))
renderer.setSize( window.innerWidth, window.innerHeight );
            
//renderer.domElement: lienzo donde el renderizador dibuja su salida
document.body.appendChild( renderer.domElement );
            

function creaCubo(a, b)
{
    const x = 1/a;

    const geometry = new THREE.Geometry();

    // Define los vértices del cubo
    const vertices = [
        new THREE.Vector3(-x, -x, -x),
        new THREE.Vector3(x, -x, -x),
        new THREE.Vector3(x, x, -x),
        new THREE.Vector3(-x, x, -x),
        new THREE.Vector3(-x, -x, x),
        new THREE.Vector3(x, -x, x),
        new THREE.Vector3(x, x, x),
        new THREE.Vector3(-x, x, x)
    ];

    // Agrega los vértices a la geometría
    vertices.forEach(vertex => {
        geometry.vertices.push(vertex);
    });

    // Define las caras del cubo
    const faces = [
        new THREE.Face3(0, 1, 2),
        new THREE.Face3(0, 2, 3),
        new THREE.Face3(4, 6, 5),
        new THREE.Face3(4, 7, 6),
        new THREE.Face3(0, 4, 1),
        new THREE.Face3(1, 4, 5),
        new THREE.Face3(1, 5, 2),
        new THREE.Face3(2, 5, 6),
        new THREE.Face3(2, 6, 3),
        new THREE.Face3(3, 6, 7),
        new THREE.Face3(0, 3, 7),
        new THREE.Face3(0, 7, 4)
    ];

    // Agrega las caras a la geometría
    faces.forEach(face => {
        geometry.faces.push(face);
    });

    // Crea una instancia de THREE.Mesh utilizando la geometría
    const material = new THREE.MeshBasicMaterial( { color: b } );

    const cube = new THREE.Mesh(geometry, material);

    // Agrega el cubo a la escena
    scene.add(cube);
    
    return cube;
}

const cube1 = creaCubo(1, 0x00ff9900);
const cube2 = creaCubo(2, 0x00ff00);
const cube3 = creaCubo(4, 0xEDC0AD);

cube2.position.y = 1.5;
cube3.position.y = 2.25;

//Se posiciona la camara
camera.position.set(1.5, 1.25, 8);
scene.position.set(-1, 0, -1);

// Se hace el render
renderer.render( scene, camera );