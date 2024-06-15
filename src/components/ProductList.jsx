import { ProductItem } from "./ProductItem"

export const ProductList = ({items, onMove}) => {
    return (
        <div>
            <h3>ProductList</h3>
            <div className="list">
                {
                    items.map(item => <ProductItem key={item.id} {...item} onMove={onMove}/>)
                }
            </div>
        </div>
    )
}