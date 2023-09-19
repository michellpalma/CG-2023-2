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
            
			
//BoxGeometry:crea el cubo con sus dimensionjes (Ancho, Altura, Profundidad)
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
            
//MeshBasicMaterial: Parametro opcional (color:0xffffff(blanca))
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            

function crear (x, y, z)
{
    //Mesh: geometría: (opcional), material: (opcional)
    nombre = new THREE.Mesh( geometry, material );
    nombre.scale(x,y,z);
    
    //En la escena se añade la funcion del cubo
	scene.add( nombre );

    return nombre;
}

crear(0.4, 0.4, 0.1);

camera.position.z = 5;

renderer.render( scene, camera );
            