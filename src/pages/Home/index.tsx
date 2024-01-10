import { useContext } from "react";
import { AuthContext } from "../../shared/context/auth";

const Home: React.FC = () => {
    const { user, singIn } = useContext(AuthContext)

    return (
        <div>
            <h3 className="text-3xl font-bold underline">{user.email}</h3>
        </div>
    )
}

export default Home;