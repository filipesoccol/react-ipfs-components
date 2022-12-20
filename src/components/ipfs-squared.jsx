import React, { useState } from 'react';
import IPFSMedia from './ipfs-media';
import '../styles/style.css'

const IPFSSquared = ({src, width, height}) => {

    const [finalSrc, setFinalSrc] = useState();
    
    return (
        <IPFSMedia
            src={src}
            finalSrc={finalSrc}
            setFinalSrc={setFinalSrc}
            content={<img 
                src={finalSrc}
                style={{
                    width:`${width}px`,
                    height:`${height}px`
                }} 
            />}
            placeholder={<div 
                className="placeholder"
                style={{
                    width:`${width}px`,
                    height:`${height}px`
                }} 
            />}
        />
    )
}
export default IPFSSquared;