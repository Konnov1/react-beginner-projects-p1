import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
  fetch('https://reqres.in/api/users')
  .then(res => res.json())
  .then(json => {
    setUsers(json.record.data); 
  })
    .catch((err) => {
      console.warn(err);
      alert('Ошибка при получении пользователей');
    })
    .finally(() => setLoading(false));
 }, []);

  return (
    <div className="App">
      <Users users={users} isLoading={isLoading}/>
      {/* <Success /> */}
    </div>
  );
}

export default App;