import React, {useEffect, useState} from 'react';
import '../styles/style.css';
import IPFSFetcher from 'ipfs-public-fetcher';

const IPFSMedia = ({ content, placeholder, src, finalSrc, setFinalSrc}) => {

  useEffect(() => {
    setFinalSource()
  }, [src]);

  const setFinalSource = async () => {
    setFinalSrc(await IPFSFetcher.FetchContent(src))
  }

  return (
    <div>
      {finalSrc && content}
      {!finalSrc && placeholder}
    </div>
  )
}

export default IPFSMedia;