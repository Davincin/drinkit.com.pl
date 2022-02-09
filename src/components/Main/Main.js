import { useEffect } from "react";

const Main = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main id="main">
            {props.children}
        </main>
    );
}
 
export default Main;