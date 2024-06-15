import { useState } from 'react'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {
  const [count, setCount] = useState(0)

  const [basket, setBasket] = useState([]);
  const [hide, setHide] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "The Mysterious Island",
      price: 12.99,
      url: "https://example.com/books/mysterious",
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794", // Unsplash image
      isMore: false
    },
    {
      id: 2,
      title: "Adventures in Coding",
      price: 15.49,
      url: "https://example.com/books/adventures",
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c", // Unsplash image
      isMore: false
    },
    {
      id: 4,
      title: "Journey to the Stars",
      price: 18.75,
      url: "https://example.com/books/journey",
      imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334", // Unsplash image
      isMore: false
    },
    {
      id: 5,
      title: "Cooking for Beginners",
      price: 9.99,
      url: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe", // Unsplash image
      isMore: false
    },
    {
      id: 6,
      title: "Exploring the Universe",
      price: 20.00,
      url: "https://example.com/books/universe",
      imageUrl: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92", // Unsplash image
      isMore: false
    },
    {
      id: 7,
      title: "Deep Learning Essentials",
      price: 25.50,
      url: "https://example.com/books/deep-learning",
      imageUrl: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759", // Unsplash image
      isMore: false
    }
  ]);

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
