import React from 'react';
import * as THREE from "three";
import RenderPixelatedPass from "./shaders/renderPixelatePass";
import PixelatePass from './shaders/pixelatePass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import EffectComposer from 'three/examples/jsm/postprocessing/EffectComposer.js'

export default class Scene extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        let screenResolution = new THREE.Vector2( window.innerWidth, window.innerHeight )
        let renderResolution = screenResolution.clone().divideScalar( 6 )
        renderResolution.x |= 0
        renderResolution.y |= 0

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor( 0xffffff, 0 )
        renderer.setSize( window.innerWidth, window.innerHeight );
        const div = document.getElementById('three');
        div.appendChild(renderer.domElement);
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
        var animate = function () {
        requestAnimationFrame( animate );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        let composer = new EffectComposer( renderer );
        // composer.addPass( new RenderPass( scene, camera ) )
        composer.addPass( new RenderPixelatedPass( renderResolution, scene, camera ) );
        let bloomPass = new UnrealBloomPass( screenResolution, .4, .1, .9 )
        composer.addPass( bloomPass )
        composer.addPass( new PixelatePass( renderResolution ) )
        renderer.render( scene, camera );
        };
        animate();
        // === THREE.JS EXAMPLE CODE END ===
    };

    render() {
        return (
            <div class="canvasContainer">
                <canvas ref={this.canvasRef} />
            </div>
        );
    }
}