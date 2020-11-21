import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {fetchAddUserAC} from '../../redux/actionCreators';
import styles from './Signup.module.css'

export const Signup = () => {

  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const avatar = useRef();
  const bio = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value,
      avatar: avatar.current.value,
      bio: bio.current.value,
    };

    dispatch(fetchAddUserAC(user));
  };

  return 

};


{/* <div className={styles.mainPage}>
<div className={styles.aboutUs}>
  <h1>СУББОТНИК</h1>
  <p className={styles.textAboutUs}>
    — сознательный организованный бесплатный труд
    на благо общества в свободное от работы время
  </p>
</div>
<div className={styles.formBox}>
  <form onSubmit={handleSubmit}>
    <span>Зарегистрируйтесь</span>
    <input className={styles.mainInput} type="text" placeholder="Имя"/>
    <input  type='email' ref={ email } className={styles.mainInput} type="email" placeholder="Email"/>
    <input type='password' ref={ password } className={styles.mainInput} type="password" placeholder="Пароль"/>
    <input className={styles.mainInput} type="text" placeholder="Телефон"/>
    <button className={styles.registrationBtn} type="submit">Регистрация</button>
    <button className={styles.loginBtn}>Войти</button>
  </form>
 
</div>

</div> */}
