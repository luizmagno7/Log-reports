import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import ReactJson from 'react-json-view'

import AuthContext from '../../contexts/Auth';
import '../../services/logSchema';

import styles from "./Log.module.scss"

const Log: React.FC = () => {
    const context = useContext(AuthContext);

    console.log(context);
    const { id } = useParams()

    const [log, setLog] = useState([])
    const [colorScheme, setColorScheme] = useState('dark')

    useEffect(() => {

        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setColorScheme('light')
        }

        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
            setColorScheme('light')
            if (!event.matches) {
                setColorScheme('dark')
            }
        });

        fetch(`/api/log/${id}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.log.hasOwnProperty("request")) {
                    json.log.request = JSON.parse(json.log.request)
                }

                if (json.log.hasOwnProperty("response")) {
                    json.log.response = JSON.parse(json.log.response)
                }

                setLog(json)  
            })
    }, [])

    return (
        <div className={styles.container}>
            <main className={styles.main}>

                <section>
                    <header className={styles.headerContainer}>
                        <h1 className="heading">Log report - {id}</h1>

                        <Link to="/">Back</Link>
                    </header>

                    <div className={styles.mainContent}>
                        <ReactJson src={log} theme={(colorScheme == 'dark') ? 'harmonic': 'shapeshifter:inverted'} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Log;