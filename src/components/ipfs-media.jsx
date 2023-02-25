import React, {useEffect, useState} from 'react';
import '../styles/style.css';
import {FetchContent} from 'ipfs-public-fetcher';

const IPFSMedia = ({ content, placeholder, src, finalSrc, setFinalSrc}) => {

  useEffect(() => {
    setFinalSource()
  }, [src]);

  const setFinalSource = async () => {
    setFinalSrc(await FetchContent(src))
  }

  return (
    <>
      {finalSrc ? content : null}
      {placeholder}
    </>
  )
}

export default IPFSMedia;