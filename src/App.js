import React, { useEffect, useState } from 'react'

/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';
import Login from "./components/Login";

import { auth, storeUserInfo, updateUser } from "./lib/firebase";
import Upload from "./components/Upload";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(false);
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
      }
      setUser(newUser);
    });
  }, []);

  const logout = () => {
    auth.signOut();
  };

  const HeaderContent = () => {
    if (user) {
      return (
        <div class="navbar-end">
          <div class="navbar-item">
          <Upload userImage={user.image} onSletctedImage={handleImageChanged} />
            {user.name}
          </div>
          <div class="navbar-item">
            <button class="button is-danger is-light is-small" onClick={logout} > Logout</button>
          </div>
        </div >
      )
    } else {
      return (<Login />)
    }
  }
  const handleImageChanged = async downloadUrl => {
    await updateUser(user, downloadUrl);
  }
  return (
    <div className="container is-fluid">
      <header className="navbar">
        {loading ? (
          <p>
            LOADING.....
          </p>
        ) : (
          <HeaderContent />
        )}
      </header>
      <div>
        {user && <Todo />}
      </div>
    </div>
  );
}

export default App;
