import React from 'react';
import './App.css';
import { UserContext, initialContext } from "./context"
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Git from "./photo/git.png"

function App() {
  const [name , setName] = React.useState(initialContext.name);
  const [photo , setPhoto] = React.useState(initialContext.photo);
  const [following, setFollowing] = React.useState(initialContext.following);
  const [followers, setFollowers] = React.useState(initialContext.followers);
  return (
    <UserContext.Provider value={{name, photo, following, followers, setName, setPhoto, setFollowing, setFollowers}}>
    <div className="App">
      <Header />
      <main>
        <Main />
        <img src={Git} alt="photos" className="git"/>
      </main>
      <Footer />
    </div>
    </UserContext.Provider>
  );
}

export default App;
