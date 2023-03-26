import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/style.css';
import { FetchContent } from 'ipfs-public-fetcher';

const IPFSMedia = ({ src, finalSrc, setFinalSrc, content, placeholder, loaded }) => {
  useEffect(() => {
    const setFinalSource = async () => {
      setFinalSrc(await FetchContent(src));
    };
    setFinalSource();
  }, [src, setFinalSrc]);

  return (
    <>
      {finalSrc ? content : null}
      {!loaded ? placeholder : null}
    </>
  );
};

IPFSMedia.propTypes = {
  src: PropTypes.string.isRequired,
  setFinalSrc: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  finalSrc: PropTypes.string,
  content: PropTypes.node,
  placeholder: PropTypes.node,
};

export default IPFSMedia;