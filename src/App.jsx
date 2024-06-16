import { useEffect, useState } from 'react'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {
  const [basket, setBasket] = useState([]);
  const [hide, setHide] = useState(false);

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3004/products')
    .then(res => res.json())
    .then(res => {
      setProducts(res)
    })
  }, []);

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => acc + item.price * item.count, 0));
  }, [basket]);


  const addItem = id => {
    let founded = products.find(product => product.id == id);
    let isExsist = basket.some(item => item.id == id);

    if(isExsist) {
      setBasket(
        basket.map(item =>
          item.id == founded.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      )
    } else {
      setBasket([...basket, {...founded, count: 1}]);
    }
  }

  const removeCount = id => {
    let founded = basket.find(product => product.id == id);
    if(founded.count > 1) {
      setBasket(
        basket.map(item =>
          item.id == founded.id
            ? { ...item, count: item.count - 1 }
            : item
        )
      )
    } 
  }

  const removeItem = id => {
    setBasket(basket.filter(item => item.id != id));
  }

  const checkBasketItemsCount = () => {
    setBasket(
      basket.map(item => ({
        ...item,
        isMore: item.count > 3
      }))
    );
    setHide(!hide);
  }

  
  return (
    <>
      <h2>Total: {total} USD</h2>
      <div className='row'>
          <ProductList
            items={products}
            onMove={addItem}
          />
          <Basket
            items={basket}
            onAddCount={addItem}
            onRemoveCount={removeCount}
            onRemoveItem={removeItem}
            onCheck={checkBasketItemsCount}
            hide={hide}
          />
      </div>        
    </>
  )
}

export default App
