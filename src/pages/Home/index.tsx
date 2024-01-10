import { useContext } from "react";
import { AuthContext } from "../../shared/context/auth";

const Home: React.FC = () => {
    const { user, singIn } = useContext(AuthContext)

    return (
        <div>
            <button className="btn btn-primary">{user.email}</button>
        </div>
    )
}

export default Home;