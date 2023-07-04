import { useDispatch } from "react-redux";

import { login } from "../../redux/slices/Auth";

const HomePage = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        console.log(import.meta.env.VITE__AUTH_URL);
        const data = {
            username: "admin",
            password: "1234"
        };
        dispatch(login(data));
    };
    return (
        <div>
            <button onClick={onClick}>login</button>
        </div>
    );
};

export default HomePage;
