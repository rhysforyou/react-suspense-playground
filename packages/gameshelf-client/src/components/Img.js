import React from 'react';
import PropTypes from 'prop-types';
import { unstable_createResource } from 'react-cache';

const Images = unstable_createResource(
  src =>
    new Promise(resolve => {
      const image = new Image();
      image.src = src;
      image.onload = () => resolve(src);
    })
);

export default function Img({ src, alt, ...props }) {
  return <img src={Images.read(src)} alt={alt} {...props} />;
}

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
