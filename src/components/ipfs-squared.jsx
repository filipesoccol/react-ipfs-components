import React, { useState } from 'react';
import IPFSMedia from './ipfs-media';
import '../styles/style.css'

const IPFSSquared = ({src, width, height}) => {

    const [finalSrc, setFinalSrc] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errored, setError] = useState(false);
    
    return (
        <div className="ipfs-wrapper" 
            style={{
                width:`${width}px`,
                height:`${height}px`
            }}
        >
            {errored ? (
                <button onClick={() => setError(false)}>
                    Reload
                </button>
            ) : (
                <IPFSMedia
                    src={src}
                    finalSrc={finalSrc}
                    setFinalSrc={setFinalSrc}
                    content={
                        <img 
                            className="ipfs-img"
                            src={finalSrc}
                            onLoad={() => setLoaded(true)}
                            onError={() => setError(true)}
                            style={{
                                width:`${width}px`,
                                height:`${height}px`,
                                opacity: loaded ? 1 : 0,
                            }} 
                        />
                    }
                    placeholder={
                        <div 
                            className="ipfs-placeholder"
                            style={{
                                width:`${width}px`,
                                height:`${height}px`,
                                opacity: loaded ? 0 : 1,
                            }} 
                        />
                    }
                />
            )}
        </div>
    )
}
export default IPFSSquared;