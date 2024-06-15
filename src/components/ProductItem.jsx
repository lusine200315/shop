export const ProductItem = ({id, title, price, imageUrl, onMove} ) => {
    return (
    <div>
        <img src={imageUrl} alt="" />
        <p>{title}</p>
        <p><strong>{price} USD</strong></p>
        <button onClick={() => onMove(id)}>Move</button>
    </div>
    )
}