import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import getUuid from 'uuid-by-string';
import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'


const GOLDENRATIO = 1.61803398875

export default function Portfolio({ images }) {
  const location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  console.log("FRAMES", params)

  const [path, setPath] = useState();
  const { width } = useWindowDimensions();

  let z
  width < 480 ? z = 7.5 : z = 4.7;
  console.log('LOCATION', location)

  useEffect(() => {
    setPath(location.pathname)
  }, [location, params])

  const navigateToProject = (name) => {
    console.log(name)
    window.location.replace('/Project/1')
  }

  return (
    <>
      {path === '/Portfolio' && <HeadingContainer>
        <Heading>Portfolio</Heading>
      </HeadingContainer>}
      <Canvas gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
        <color attach="background" args={['#191920']} />
        <fog attach="fog" args={['#191920', 0, 15]} />
        <Environment preset="city" />
        <group position={[0, -0.5, 0]}>
          <Frames images={images} z={z} navigate={navigate} params={params} navToProject={navigateToProject}/>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={60}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#151515"
              metalness={0.5}
            />
          </mesh>
        </group>
      </Canvas>

    </>
  )
}

function Frames({ navToProject, params, navigate, z, images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()


  let zI = z === 4.7 ? zI = 1.75 : zI = 2.25
  console.log('NAV', navigate)

  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, zI))
      clicked.current.parent.getWorldQuaternion(q)

    } else {
      p.set(0, 0.6, z)
      q.identity()
    }
  })

  useFrame((state, dt) => {
    state.camera.position.lerp(p, THREE.MathUtils.damp(0, 1, 3, dt))
    state.camera.quaternion.slerp(q, THREE.MathUtils.damp(0, 1, 3, dt))
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (
        e.stopPropagation(),
        navigate(clicked.current === e.object ? '/Portfolio' : '/Portfolio/item/' + e.object.name)
      )}
      onPointerMissed={() => navigate('/Portfolio')}>
      {images.map((props) => <Frame key={props.url} navToProject={navToProject} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ navToProject, url, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const image = useRef()
  const frame = useRef()
  const name = getUuid(url)

  useCursor(hovered)
  useFrame((state) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    image.current.scale.x = THREE.MathUtils.lerp(image.current.scale.x, 0.85 * (hovered ? 0.85 : 1), 0.1)
    image.current.scale.y = THREE.MathUtils.lerp(image.current.scale.y, 0.9 * (hovered ? 0.905 : 1), 0.1)
    frame.current.material.color.lerp(c.set(hovered ? 'aqua' : 'white').convertSRGBToLinear(), 0.1)
  })
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text onClick={navToProject} maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}>
        {name}
        {'Read More'}
      </Text>
    </group>
  )
}

const Heading = styled.h1`
  position: absolute;
  color: white;
  font-size: 4em;
  z-index: 999999;
  letter-spacing: 0.2em;
  font-family: 'Rock Salt', sans-serif;

  @media screen and (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const HeadingContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 50px;

  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
  
`;
