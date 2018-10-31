import React from "react";
import { unstable_createResource } from "react-cache";

const Images = unstable_createResource(
  src =>
    new Promise(resolve => {
      const image = new Image();
      image.src = src;
      image.onload = () => resolve(src);
    })
);

export default function Img({ src, ...props }) {
  return <img src={Images.read(src)} {...props} />;
}
