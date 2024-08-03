'use client';
import { Provider } from 'react-redux';
import store from '../store';
import DataTable from '../components/DataTable';
import ChangeCoinModal from '../components/ChangeCoinModal';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles.container}>
      
        <h1 className={styles.title}>Fomo Factory Crypto Dashboard</h1>
        <ChangeCoinModal />
        <DataTable />
      </div>
    </Provider>
  );
}
