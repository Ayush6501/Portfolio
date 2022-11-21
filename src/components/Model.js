import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// Auto-generated by: https://github.com/pmndrs/gltfjsx
export default function Model({ url, url2, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(url)
  const { nodes: n2, materials: m2 } = useGLTF(url2)
  const { nodes: n3, materials: m3 } = useGLTF(props.url3)
  const { nodes: n4, materials: m4 } = useGLTF(props.url4)


  const White = <meshStandardMaterial attach="material" color={0x000000} />;

  useFrame((state) => {
    group.current.children.forEach((child, index) => {
      child.position.y += Math.sin(index * 1000 + state.clock.elapsedTime) / 50
      child.rotation.x += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 2000
      child.rotation.y += (Math.cos(index * 1000 + state.clock.elapsedTime) * Math.PI) / 3000
      child.rotation.z += (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 4000
    })
  })

  return (
    <group ref={group} {...props} dispose={null}>
      {/*<mesh*/}
      {/*  material={materials.M_Curly}*/}
      {/*  geometry={nodes.Curly.geometry}*/}
      {/*  position={[0.8, -10.96, 2.16]}*/}
      {/*  rotation={[1.76, 0.07, -0.19]}*/}
      {/*/>*/}
      <mesh
        material={materials.M_DNA}
        geometry={nodes.DNA.geometry}
        position={[25.9, -20.6, -17.01]}
        rotation={[1.26, 0.91, -1.86]}
      />
      <mesh
        material={materials.M_Headphone}
        geometry={nodes.Headphones.geometry}
        position={[20.22, 1.99, 4.03]}
        rotation={[1.55, 0.32, -0.76]}
      />
      <mesh
        material={materials.M_Notebook}
        geometry={nodes.Notebook.geometry}
        position={[-21.4, -5.96, -13.21]}
        rotation={[1.83, 50.23, 30.91]}
      />
      <mesh
        material={materials.M_Rocket}
        geometry={nodes.Rocket003.geometry}
        position={[17.58, 15.26, -25.21]}
        rotation={[1.14, 0.81, 0.44]}
      />
      <mesh
        material={materials.M_Table}
        geometry={n2.Python_Python_0.geometry}
        position={[-12.17, 8.1, -12.07]}
        rotation={[1.55, 0.05, 0.45]}
        scale={[0.2, 0.2, 0.2]}
      />
      <mesh
        material={materials.M_Table}
        geometry={n3.Icosphere_1.geometry}
        position={[0.59, 5.79, -27.84]}
        rotation={[0.98, 0.15, -1.24]}
        scale={[5.0, 5.0, 5.0]}
      />
      <mesh
        material={materials.M_Headset}
        geometry={nodes.VR_Headset.geometry}
        position={[6.92, -15.17, 27.59]}
        rotation={[1.29, 0.08, -0.64]}
        scale={[5, 5, 5]}
      />
      <mesh
        material={m4.material}
        geometry={n4.Object_5.geometry}
        position={[-11.64, -17.96, 17.51]}
        rotation={[-20.72, 10.8, -52.71]}
        scale={[0.8, 0.8, 0.8]}
      />
    </group>
  )
}
