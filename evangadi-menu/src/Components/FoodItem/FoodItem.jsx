import { Component } from "react";
import styles from "./FoodItem.module.css";

export default class FoodItem extends Component {
  render() {
    const { img, title, price, desc, category } = this.props;
    return (
      <>
        <div className={styles["single-food"]}>
          <div className={styles["img"]}>
            <img src={img} />
          </div>
          <div className={styles["title-price"]}>
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
          <div className={styles["cata"]}>{category}</div>
          <div className={styles["food-desc"]}>
            {desc.length > 250 ? desc.slice(0, 250) + "..." : desc}
          </div>
        </div>
      </>
    );
  }
}
