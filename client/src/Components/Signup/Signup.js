import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {fetchAddUserAC} from '../../redux/actionCreators';

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
      <form onSubmit={ handleSubmit }>
        <h1>Fill in to create an account</h1>

        <label>Email</label>
        <input required
            type='email'
            ref={ email }
            placeholder='something@gmail.com'
        />
        <br/>

        <label>Password</label>
        <input required
            type='password'
            ref={ password }
            placeholder='Insert your password here'
        />
        <br/>

        <label>Name</label>
        <input required
            ref={ name }
            placeholder='Your beautiful name'
        />
        <br/>

        <label>Phone</label>
        <input required
        type='tel' 
        pattern='^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$'
            ref={ phone }
            placeholder='Phone number'
        />
        <br/>

        <button type="submit">SignUp</button>
      </form>
  );

};


