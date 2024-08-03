import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchCoinData } from '../store/dataSlice';
import styles from '../styles/DataTable.module.css';

const DataTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { coinData, selectedCoin, loading } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchCoinData(selectedCoin));
    const interval = setInterval(() => {
      dispatch(fetchCoinData(selectedCoin));
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch, selectedCoin]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Sr.No</th>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Symbol</th>
            <th className={styles.tableHeader}>Rate</th>
            <th className={styles.tableHeader}>Volume</th>
            <th className={styles.tableHeader}>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((data, index) => (
            <tr key={index}>
              <td className={styles.tableData}>{index+1}</td>
              <td className={styles.tableData}>{data.name}</td>
              <td className={styles.tableData}>{data.symbol}</td>
              <td className={styles.tableData}>{data.rate}</td>
              <td className={styles.tableData}>{data.volume}</td>
              <td className={styles.tableData}>{data.cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
