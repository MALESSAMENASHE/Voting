import logo from "../assets/images/lifestyle-logo.png";

const Logo = () => {
    return (
        <>
            <img
                style={{ height: "6rem", width: "6rem", margin: "1rem 1rem" }}
                src={logo}
                alt="logo"
                className="logo"
            />
            <h2 className="logo-motto">CHOOSE YOUR LIFE STYLE</h2>
        </>
    );
};
export default Logo;
