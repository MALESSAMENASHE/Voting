import { useState } from "react";

import { PAGES} from "./constants";
import { Users } from "./data";

import { Login, Vote, UserAfterVote, AdminPage } from "./pages";

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
            return <Landing setPage={setPage} />;
        case vote:
            return <Vote setPage={setPage} />;
        case userAfterVote:
            return <UserAfterVote setPage={setPage} />;
        case adminPage:
            return <AdminPage setPage={setPage} />;
        default:
            return <Landing setPage={setPage} />;
    }
};

export default App;
