/**
*
* Image
*
*/

import React from 'react';

import styles from './styles.css';

class Image extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <img className={styles.image} src={this.props.src} />
    );
  }
}

export default Image;
