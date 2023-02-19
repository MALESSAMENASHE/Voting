const findUserByEmail = (email) => {
    const users = getUsers();
    return users.filter((user) => user.email === email);
};

const getUsers = () => {
    const jsonData = localStorage.getItem("usersData");
    return JSON.parse(jsonData);
};

const getItemByKey = (key) => {
    const jsonData = localStorage.getItem(key);
    if (jsonData !== null) {
        return JSON.parse(jsonData);
    } else return null;
};

export { findUserByEmail, getItemByKey };
