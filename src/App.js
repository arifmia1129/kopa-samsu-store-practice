import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import Navbar from './Navbar/Navbar';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }


  const addToCart = (gun) => {
    setCart([...cart, gun]);
  }


  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/kopa-samsu-practice/main/public/data.json")
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])
  return (
    <div className="App">
      <Navbar openModal={openModal} cart={cart} />

      <div className='card-container'>
        {
          guns.map(gun => <Card key={gun.id} gun={gun} addToCart={addToCart} />)
        }
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        {
          cart.map((c, index) => <h4 style={{ padding: 10 }} key={index}>{index + 1}. {c.name}</h4>)
        }
      </Modal>
    </div>
  );
}

export default App;
