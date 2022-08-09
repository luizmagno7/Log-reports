import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../services/logSchema';

import styles from './Home.module.scss'
import Search from '../../components/Search'

/**
 * Pagination params
 * "page": 1,
 "per_page": 6,
 "total": 12,
 "total_pages": 2,
 "data": [
  */
type Log = {
  id: number,
  host: string,
  request: string,
  response: string,
  permanent: boolean,
  type: string,
  createdAt: string
}

const Home: React.FC = () => {

  const [logs, setLogs] = useState([])

  useEffect(() => {
    fetch("/api/log")
      .then((response) => response.json())
      .then((json) => setLogs(json.logs))
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <section>
          <header className={styles.headerContainer}>
            <h1 className="heading">Reports</h1>

            <Search />
          </header>

          <div className={styles.mainContent}>

            <table>
              <thead>
                <tr>
                  <th>
                    #
                  </th>
                  <th>Host</th>
                  <th>Request</th>
                  <th>Response</th>
                  <th>Permanent</th>
                  <th>Type</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log: Log) => (
                  <tr key={log.id}>
                    <td>{log.id}</td>
                    <td>{log.host}</td>
                    <td>{log.request}</td>
                    <td>{log.response}</td>
                    <td>{log.permanent}</td>
                    <td>{log.type}</td>
                    <td>{new Date(log.createdAt).toLocaleDateString()}</td>
                    <td><Link to={`/log/${log.id}`}>View</Link></td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;