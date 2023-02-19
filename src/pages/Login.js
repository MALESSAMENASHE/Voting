import { useState } from "react";

import { validateEmail } from "../utils/validateEmail";
import { PAGES } from "../constants";

import { FormRow, Modal, findUserByEmail, Logo } from "../components";
import Wrapper from "../styles/styled/Login.styled";

const [, voting] = PAGES;

const Login = ({ setPage }) => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({ ...values, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const { email, password } = values;

        if (!email || validateEmail(email)) {
            const msg = "Please enter a valid email";
            handleError(msg, setEmailError);
        } else {
            setEmailError(false);
        }

        if (!password) {
            const msg = "Please enter a password";
            handleError(msg, setPasswordError);
        } else {
            setPasswordError(false);
        }

        if (!email || validateEmail(email) || !password) {
            setIsLoading(false);
            setIsError(true);
            return;
        } else {
            const user = findUserByEmail(email);
            if (user.length === 0) {
                console.log(user);
                setIsLoading(false);
                handleError("Incorrect Email or Password", setIsError);
            } else if (
                user[0].email === email &&
                user[0].password === password
            ) {
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                setPage(voting);
            } else if (user.email !== email || user.password !== password) {
                setIsLoading(false);
                handleError("Incorrect Email or Password", setIsError);
            }
        }
    };

    const handleError = (msg, setMethod) => {
        setMethod(true);
        const messages = errorMessages;
        messages.push(msg);
        setErrorMessages(messages);
    };

    const closeModal = () => {
        setIsError(false);
        setErrorMessages([]);
    };

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo/>
                <FormRow
                    error={emailError}
                    type="email"
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                />
                <FormRow
                    error={passwordError}
                    type="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                />
                <button
                    type="submit"
                    className="btn btn-block"
                    disabled={isLoading}
                >
                    {isLoading ? "loading..." : "Log In"}
                </button>
            </form>
            {isError && (
                <Modal closeModal={closeModal} messages={errorMessages} />
            )}
        </Wrapper>
    );
};

export default Login;
