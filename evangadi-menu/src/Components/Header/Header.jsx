import { Component } from 'react'
import styles from './Header.module.css'
export default class Header extends Component {
  render() {
    return (
      <header className={styles.title}>
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>
    );
  }
}
