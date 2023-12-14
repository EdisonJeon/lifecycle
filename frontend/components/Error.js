import React from "react";

export default class Error extends React.Component {
  render() {
    console.log("*** Error component *** fired.");
    const { error } = this.props;
    return (
      <>
        {error && <p id="error">*** {error} ***</p>}
      </>
    );
  }
}
