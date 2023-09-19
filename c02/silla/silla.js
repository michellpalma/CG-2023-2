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
            
//Constantes de las dimensiones de la caja
const x=2; const y=2; const z=2

//Secrea el material con el que se va a trabajar
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );


//Se crea el respaldo con su geometria y se añade a la escena
const respaldoG = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
const respaldo = new THREE.Mesh(respaldoG, material);
scene.add(respaldo);
// Se posiciona con las transformaciones rotation y position
respaldo.rotation.set(4.9,0,0);
respaldo.position.set(0,0.5,0);

//Funcion para crear y escalar los cubos
function crearC (a, b, c)
{
    //BoxGeometry:crea el cubo con sus dimensionjes (Ancho, Altura, Profundidad)
    const geometryC = new THREE.BoxGeometry( x, y, z );
            
    //MeshBasicMaterial: Parametro opcional (color:0xffffff(blanca))
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

    //Mesh: geometría: (opcional), material: (opcional)
    const cubo = new THREE.Mesh( geometryC, material );
    
    //Se modifica lña escala de los cubos
    cubo.scale.set(a,b,c)

    return cubo;
}

//Se crea el asiento en el origen y se añade a la escena
asiento = crearC(0.4, 0.1, 0.4);
 scene.add( asiento );

//Se crean las patas de la silla, se añaden a la escena y se posicionan en los extremos del asiento
 pata1 = crearC(0.05, 0.5, 0.05);
 scene.add( pata1 );
 pata1.position.set(-0.35, -0.5, 0.35);

pata2 = crearC(0.05, 0.5, 0.05);
 scene.add( pata2 );
 pata2.position.set(0.35, -0.5, 0.35);

pata3 = crearC(0.05, 0.5, 0.05);
 scene.add( pata3 );
 pata3.position.set(-0.35, -0.5, -0.35);

pata4 = crearC(0.05, 0.5, 0.05);
 scene.add( pata4 );
 pata4.position.set(0.35, -0.5, -0.35);

//Se posiciona la camara
camera.position.set(1.5, 1, 4);
camera.rotation.set(0, 0.3, 0);

// Se hace el render
renderer.render( scene, camera );
            