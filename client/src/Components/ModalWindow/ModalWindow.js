import React from 'react';
import styles from './ModalWindow.module.css'

function ModalWindow(props) {
  const getDataFromForm = (event) =>{
    event.preventDefault()
    console.log(event.target.image.value)

  }
  return (
    <>
      <div className={styles.contener}>
        <div className={styles.donwloadform}>
          <form onSubmit={getDataFromForm}>
            <button className={styles.donwload}>Загрузить</button>
            <input className={styles.inpdonwload} type="text" name="image" placeholder="" />
            <button className={styles.close} onClick={props.closeModal}>X</button>
          </form>
        </div>
        <div className={styles.saveform}>
          <form>
            <textarea
              className={styles.textdescription}
              name="text"
              cols="30"
              rows="5"
               placeholder=""
            ></textarea>
            <button className={styles.save}>Cохранить</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalWindow;
