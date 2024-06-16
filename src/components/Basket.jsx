import { useState } from "react"
import { BasketItem } from "./BasketItem"

export const Basket = ({items, onAddCount, onRemoveCount, onRemoveItem, onCheck, hide=false}) => {

    return (
        <div>
            <h3>Basket</h3>
            {items.length ?
            <>
                {/* <button className={`${hide ? 'hide' : ''}`} onClick={onCheck}>Sale</button> */}
                <br />
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>SubTotal</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map(item =>
                            <BasketItem
                                key={item.id}
                                onAddCount={onAddCount}
                                onRemoveCount={onRemoveCount}
                                onRemoveItem={onRemoveItem}
                                hide={hide}
                                {...item}
                            />)
                        }
                    </tbody>
                </table>
            </>
            : "You have no item"}
        </div>
    )
}