import mc from "./app.module.scss";
import Home from "../../home/Home";

const App = () => {

    return (
        <div className={mc.container}>
            <Home/>
        </div>
    );
};

export default App;
