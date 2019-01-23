import React from "react";

const Partner = ({ match }) => {

    const { params } = match 

    return (
      <div style={styles.colour}>
        <p>Partner! Language: {params.lang} </p>
      </div>
    );
};

const styles = {}

styles.colour = {
    width: '400px',
    height: '300px',
    background: 'green',
    position: 'absolute'
}

export default Partner;