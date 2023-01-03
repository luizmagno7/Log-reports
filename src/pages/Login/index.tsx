import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from "./Login.module.scss"
import Input from './../../components/Input';
import Button from './../../components/Button';
import useAuth from './../../hooks/useAuth';

const Login: React.FC = () => {
    //const context = useContext(AuthContext);
    const auth = useAuth()
    let navigate = useNavigate();

    //console.log(user);
    function handleLogin(event:any) {
        event.preventDefault();

        auth.login( { user: "luiz magno", token: "teste"});

        navigate("/", {replace: true})
    }

    useEffect(() => {
        console.info('[hook]', auth)
        if (!!auth.isAuthenticated) {
            navigate("/", {replace: true})
        }
    }, [])


    return (
        <div>
            <main>
                <section className={ styles.mainContent }>
                    <h1 className={ styles.title }>Login</h1>

                    <form onSubmit={handleLogin}>
                        
                        <Input id='email' name='email' type='email' placeholder='E-mail' />  

                        <Input id='password' name='password' type='password' placeholder='Password' />

                        <footer>
                            <Button type="submit">Enviar</Button>
                        </footer>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Login;