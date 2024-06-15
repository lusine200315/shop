export const BasketItem = ({id, title, price, count, hide, onAddCount, onRemoveCount, onRemoveItem}) => {

    return (
        <tr>
            <td>{title}</td>
            <td>{`${price}USD`}</td>
            <td>{count}</td>
            <td>{`${hide ? price*(count-1) : price * count} USD`}</td>
            <td style={{display: 'flex', gap: '10px'}}>
                <button onClick={() => onAddCount(id)}>+</button>
                <button onClick={() => onRemoveCount(id)}>-</button>
                <button onClick={() => onRemoveItem(id)}>x</button>
            </td>
        </tr>
    )
}