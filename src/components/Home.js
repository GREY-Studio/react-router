import React from "react";

const Home = () => {
    return (
      <div style={styles.colour}>
        <p>Home!</p>
      </div>
    );
};

const styles = {}

styles.colour = {
    width: '400px',
    height: '300px',
    background: 'blue',
    position: 'absolute'
}

export default Home;