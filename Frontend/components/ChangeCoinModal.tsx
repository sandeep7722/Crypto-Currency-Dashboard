import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCoin } from '../store/dataSlice';
import styles from '../styles/ChangeCoinModal.module.css';

const ChangeCoinModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coin, setCoin] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoin(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(setSelectedCoin(coin));
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} >Click Here to Change Coin</button>
      {isOpen && (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            
            <input type="text" value={coin} onChange={handleChange} placeholder="Enter coin name (Bitcoin/Ethereum/Litecoin/Solana/Polygon)" />
            <br/>

            <div className={styles.buttonContainer}>
            <button onClick={handleSubmit}>Submit</button>
            
            <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangeCoinModal;
