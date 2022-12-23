import React, { useState } from 'react';
import IPFSMedia from './ipfs-media';
import '../styles/style.css'

const IPFSAvatar = ({src, size, radius}) => {

    const [finalSrc, setFinalSrc] = useState();
    
    return (
        <IPFSMedia
            src={src}
            finalSrc={finalSrc}
            setFinalSrc={setFinalSrc}
            content={<img 
                src={finalSrc}
                style={{
                    width:`${size}px`,
                    height:`${size}px`,
                    borderRadius:`${radius}px`
                }}
            />}
            placeholder={<div 
                className="placeholder"
                style={{
                    width:`${size}px`,
                    height:`${size}px`,
                    borderRadius:`${radius}px`
                }} 
            />}
        />
    )
}
export default IPFSAvatar;