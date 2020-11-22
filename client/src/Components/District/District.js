import React from 'react';
import styles from './District.module.css';
import { Link } from 'react-router-dom';


function District() {
  return (
    <div className={styles.boxMapWrapper}>
      <div className={styles.boxMap}>
        <div className={styles.map}>
          <div className={styles.mapItem1}>
            <span className={styles.district}>Приморский</span>
          </div>
          <div className={styles.mapItem2}>
            <span className={styles.district}>Петроградский</span>
          </div>
          <Link className={styles.testLink} to="/map">
            <div className={styles.mapItem3} onClick={null}>
              <span className={styles.district}>Василеостровский</span>
            </div>
          </Link>
          <div className={styles.mapItem4}>
            <span className={styles.district}>Центральный</span>
          </div>
          <div className={styles.mapItem5}>
            <span className={styles.district}>Адмиралтейский</span>
          </div>
          <div className={styles.mapItem6}>
            <span className={styles.district}>Кировский</span>
          </div>
          <div className={styles.mapItem7}>
            <span className={styles.district}>Московский</span>
          </div>
          <div className={styles.mapItem8}>
            <span className={styles.district}>Фрунзенский</span>
          </div>
          <div className={styles.mapItem9}>
            <span className={styles.district}>Невский</span>
          </div>
          <div className={styles.mapItem10}>
            <span className={styles.district}>Красногвардейский</span>
          </div>
          <div className={styles.mapItem11}>
            <span className={styles.district}>Калининский</span>
          </div>
          <div className={styles.mapItem12}>
            <span className={styles.district}>Выборгский</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default District;
