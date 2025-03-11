import React from "react";
import ItemCard from "./itemCard.jsx";
import styles from "./itemCard.module.css";
import products from "./products.json";

const ItemContainer = () => {
    return (
        <div className={styles.itemContainer}>
            {products.map((product) => (
                <ItemCard 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
};

export default ItemContainer;
