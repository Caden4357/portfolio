'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Link from 'next/link'
function Box(props: JSX.IntrinsicElements['mesh']) {
    return (
        <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
            <boxGeometry 
            args={[5, 5, 5]}
            />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}

export default function BigBox() {
    return (
        <div>
            <Link className='' href={'/myInfo'}>Click here to enter</Link>
        </div>
    )
}
