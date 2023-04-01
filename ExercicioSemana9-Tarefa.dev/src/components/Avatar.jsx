import React from "react";

export function Avatar(props) {
  return <img src={props.src} className="img-thumbnail" alt={props.alt} />;
}
