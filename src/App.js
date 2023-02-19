import { useState, useEffect } from "react";

import { PAGES} from "./constants";
import { Login, Vote, UserAfterVote, Admin } from "./pages";
import "./styles/App.css";

const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;

const App = () => {

  const [page, setPage] = useState('login');

  const [login, vote, userAfterVote, adminPage ] = PAGES;

  useEffect(() => {
    if (!userData) {
      setPage(login);
    } else {
      setPage(vote);
    }
  }, [login, vote]);
    switch (page) {
        case login:
            return <Login setPage={setPage} />;
        case vote:
            return <Vote setPage={setPage} />;
        case userAfterVote:
            return <UserAfterVote setPage={setPage} />;
        case adminPage:
            return <Admin setPage={setPage} />;
        default:
            return <Login setPage={setPage} />;
    }

};

export default App;
