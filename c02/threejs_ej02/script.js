            const scene = new THREE.Scene(); 
            
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            
            const renderer = new THREE.WebGLRenderer();
            
            
            renderer.setSize( window.innerWidth, window.innerHeight );
            
			document.body.appendChild( renderer.domElement );
            
			
            const geometryC = new THREE.BoxGeometry(1, 1, 1);
			const material1 = new THREE.MeshBasicMaterial({color: 0x00ff00});
            const cube = new THREE.Mesh( geometryC, material1 );
            
            const geometryE = new THREE.SphereGeometry(1, 32, 16);
            const material2 = new THREE.MeshBasicMaterial({color: 0xff9900});
            const sphere = new THREE.Mesh( geometryE, material2 );
            
			scene.add(cube);
            scene.add(sphere);

            //Posición de la cámara en el eje z
			camera.position.z = 5;

            //Funcion para animar el cubo y hacer que este rote
			function animate() 
            {
                // requestAnimationFrame: Método que genera animaciones fluidas
                requestAnimationFrame(animate);

                //Rotar el cubo en el eje x y y
	            cube.rotation.x += 0.01;
	            cube.rotation.y += 0.01;

                sphere.rotation.x += 0.01;
	            sphere.rotation.y += 0.01;

                //.render: Renderiza una escena u otro tipo de objeto usando una cámara 
                //(scene: Object3D, camera: Cámara)
                renderer.render(scene, camera);
            }

            //Activar la funcion animate
            animate();