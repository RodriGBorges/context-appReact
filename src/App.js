import { useState } from 'react';
import './App.css';
import { AppRouter } from './routes/AppRouter';
import { UserContext } from './UserContext';

function App() {

  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>

        <AppRouter/>

    </UserContext.Provider>
  );
}

export default App;
