import React, { Component } from 'react';  //eslint-disable-line
import { history } from '../../redux/store';

class Footer extends Component {
  /**
   * Render Footer
   * @return {JSX} Rendered Footer
   */

  render() {
    return (
      <footer className='footer'>
        <h3>Footer</h3>
      </footer>
    );
  }
}
export default Footer;
