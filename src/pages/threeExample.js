import * as React from 'react'
import * as THREE from "three"
import { Canvas, useFrame, useThree, boxGeometry, meshStandardMaterial } from "@react-three/fiber"
import { Environment, useTexture } from "@react-three/drei"
import { Physics, useSphere } from "@react-three/cannon"
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing"

import Layout from '../components/layout'

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
const baubleMaterial = new THREE.MeshStandardMaterial({ color: "white", roughness: 0, envMapIntensity: 1 })

const threeExample = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    )
}
  
export default threeExample

// function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props }) {
//   const texture = useTexture("/cross.jpg")
//   const [ref, api] = useSphere(() => ({ args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(20), rfs(20), rfs(20)] }))
//   useFrame((state) => {
//     for (let i = 0; i < 40; i++) {
//       // Get current whereabouts of the instanced sphere
//       ref.current.getMatrixAt(i, mat)
//       // Normalize the position and multiply by a negative force.
//       // This is enough to drive it towards the center-point.
//       api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0])
//     }
//   })
//   debugger;
//   return <instancedMesh ref={ref} castShadow receiveShadow args={[null, null, 40]} geometry={sphereGeometry} material={baubleMaterial} material-map={texture} />
// }

// function Pointer() {
//   const viewport = useThree((state) => state.viewport)
//   const [, api] = useSphere(() => ({ type: "Kinematic", args: [3], position: [0, 0, 0] }))
//   return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0))
// }