import React, { useState } from 'react';
import IPFSMedia from './ipfs-media';
import '../styles/style.css'

const IPFSAvatar = ({src, size, radius}) => {
    
    const [finalSrc, setFinalSrc] = useState();
    const [loaded, setLoaded] = useState(false);
    
    return (
        <div className="ipfs-wrapper" 
            style={{
                width:`${size}px`,
                height:`${size}px`
            }}
        >
            <IPFSMedia
                src={src}
                finalSrc={finalSrc}
                setFinalSrc={setFinalSrc}
                content={
                    <img 
                        className="ipfs-img"
                        src={finalSrc}
                        onLoad={() => setLoaded(true)}
                        style={{
                            width:`${size}px`,
                            height:`${size}px`,
                            borderRadius:`${radius}px`,
                            opacity: loaded ? 1 : 0,
                        }}
                    />
                }
                placeholder={
                    <div 
                        className="ipfs-placeholder"
                        style={{
                            width:`${size}px`,
                            height:`${size}px`,
                            borderRadius:`${radius}px`,
                            opacity: loaded ? 0 : 1,
                        }} 
                    />
                }
            />
        </div>
    )
}
export default IPFSAvatar;