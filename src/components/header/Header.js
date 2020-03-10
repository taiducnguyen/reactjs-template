import React, { Component, } from 'react';  //eslint-disable-line
import { history } from '../../redux/store';
class HeaderView extends Component {
  /**
   * Render Header
   * @return {JSX} Rendered Header
   */

  render() {
    return (
      <header className='header'>
        <ul className='topRightMenu'>
          <li onClick={() => history.push('/')}> Home</li>
          <li onClick={() => history.push('/about')}> About </li>
          <li onClick={() => history.push('/postPage')}> Call API </li>
        </ul>
      </header>
    );
  }
}
export default HeaderView;
