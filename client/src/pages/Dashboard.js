import { useEffect, useState } from 'react';
import { fetchLogs } from '../services/api';

const Dashboard = () => {
  const [logs, setLogs] = useState([]);
  const userId = '123'; // Replace with auth user ID

  useEffect(() => {
    fetchLogs(userId).then(res => setLogs(res.data));
  }, []);

  return (
    <div>
      <h2>Your Health Logs</h2>
      {logs.map((log, i) => (
        <div key={i}>
          <p>{log.date}: Mood - {log.mood}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
