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
            
const x=2
const y=2			
const z=2

const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );


const respaldoG = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);

const respaldo = new THREE.Mesh(respaldoG, material);
scene.add(respaldo);
respaldo.rotation.set(5,0,0);
respaldo.position.set(0,0.5,0);

function crearC (a, b, c)
{
    //BoxGeometry:crea el cubo con sus dimensionjes (Ancho, Altura, Profundidad)
    const geometryC = new THREE.BoxGeometry( x, y, z );
            
    //MeshBasicMaterial: Parametro opcional (color:0xffffff(blanca))
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    //Mesh: geometría: (opcional), material: (opcional)
    const nombre = new THREE.Mesh( geometryC, material );
    
   nombre.scale.set(a,b,c)

    return nombre;
}

asiento = crearC(0.4, 0.1, 0.4);

 //En la escena se añade la funcion del cubo
 scene.add( asiento );
    
 //asiento.scale.set(0.05, 0.5, 0.05);
/*pata1 = crearC(0.05, 0.05, 0.5);
pata2 = crearC(0.05, 0.05, 0.5);
pata3 = crearC(0.05, 0.05, 0.5);
pata4 = crearC(0.05, 0.05, 0.5);*/

camera.position.z = 6;
//camera.position.x = 2;
camera.position.y = 1;
//pata1.position.set(1,1,1)

renderer.render( scene, camera );
            