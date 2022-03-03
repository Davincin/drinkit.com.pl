import { useEffect } from "react";
import './Main.sass'

const Main = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main id="main" className="main">
            {props.children}
        </main>
    );
}
 
export default Main;