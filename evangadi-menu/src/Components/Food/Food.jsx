import { Component } from "react";
import styles from './Food.module.css'
import FoodItem from "../FoodItem/FoodItem";
import { menu } from '../../Constant/data'

export default class Food extends Component {
  render() {
      return (
        <div className={styles["foods-container"]}>
          {menu?.map((item, index) => {
            const { img, title, price, desc, category } = item;
            return (
              <FoodItem
                key={index}
                title={title}
                category={category}
                img={img}
                price={price}
                desc={desc}
              />
            );
          })}
        </div>
      );
  }
}
