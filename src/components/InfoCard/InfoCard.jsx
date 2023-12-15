import React from "react";

export default class InfoCard extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <>
        <p>
          {info.label}: {info.value}
        </p>
      </>
    );
  }
}
