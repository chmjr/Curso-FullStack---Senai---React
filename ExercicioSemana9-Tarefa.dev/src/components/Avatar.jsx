import React from "react";
<<<<<<< HEAD
export function Avatar(props) {
  return <img src={props.src} className="img-thumbnail" alt={props.alt} />;
=======

export class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        src={this.props.src}
        className="img-thumbnail"
        alt={this.props.alt}
      />
    );
  }
>>>>>>> a0259aeba3510e950ac5ecd8059ce7f565d874d7
}
