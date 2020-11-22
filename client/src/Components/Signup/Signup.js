import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchAddUserAC } from "../../redux/actionCreators";
import styles from "./Signup.module.css";

export const Signup = () => {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const phone = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value,
      name: name.current.value,
      phone: phone.current.value,
    };

    dispatch(fetchAddUserAC(user));
  };

  return (
    <div className={styles.mainPage}>
      <div className={styles.aboutUs}>
        <h1>СУББОТНИК</h1>
        <p className={styles.textAboutUs}>
          — сознательный организованный бесплатный труд на благо общества в
          свободное от работы время
        </p>
      </div>
      <div className={styles.formBox}>
        <form onSubmit={handleSubmit}>
          <span>Зарегистрируйтесь</span>
          <input
            required
            className={styles.mainInput}
            ref={name}
            type="text"
            placeholder="Имя"
          />
          <input
            required
            type="email"
            ref={email}
            className={styles.mainInput}
            type="email"
            placeholder="Email"
          />
          <input
            required
            type="password"
            ref={password}
            className={styles.mainInput}
            type="password"
            placeholder="Пароль"
          />
          <input
            required
            className={styles.mainInput}
            type="tel"
            pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
            ref={phone}
            type="text"
            placeholder="Телефон"
          />
          <div className={styles.btns}>
            <button className={styles.registrationBtn} type="submit">
              Регистрация
            </button>
            <button className={styles.loginBtn}>Войти</button>
          </div>
        </form>
      </div>
    </div>
  );
};
