import React from "react";
import styles from "./itemCard.module.css";

const ItemCard = () => {
    return (
        <div className={styles.itemCard}>
            <img src="/image.png" alt="Item" />
            <div className={styles.itemDetails}>
                <p className={styles.itemPrice}>$999.99</p>
                <p className={styles.itemDescription}>yay.....</p>
            </div>
        </div>
    );
};

export default ItemCard;
