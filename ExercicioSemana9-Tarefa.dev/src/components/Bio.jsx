import React from "react";
<<<<<<< HEAD
export function Bio(props) {
  return (
    <div>
      <h3>Bio</h3>
      {props.children}
    </div>
  );
=======

export class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Bio</h3>
        {this.props.children}
      </div>
    );
  }
>>>>>>> a0259aeba3510e950ac5ecd8059ce7f565d874d7
}
