import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../../Context/context';;
import Swal from 'sweetalert2';

export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { state, dispatch } = useContext(GlobalContext)

    const loginUser = (e) => {
        e.preventDefault();
        if (!email || !password) {
                   alert('Please enter both email and password.');
                     return;
            }
        const payload = { email, password }

        axios.post('/api/login', payload)
            .then((json) => {
                Cookies.set('token', json.data.token)
                dispatch({
                    type: "USER_LOGIN",
                    token: json.data.token
                })
                Swal.fire({
                                title: 'LogIn Successful!',
                                text: 'You have successfully Log up.',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })

            })
            .catch(err => console.log(err))

    }

    return (
        <div className="flip-card__front">
            <div className="title">Log in</div>
            <form className="flip-card__form" onSubmit={loginUser}>
                <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="flip-card__btn">Submit</button>
            </form>
        </div>
    );
}
