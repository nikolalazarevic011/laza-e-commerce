import { Outlet } from "react-router-dom";
import MainHeader from "./Navigation/MainHeader";

const Root: React.FC = () => {
    return (
        <>
            <MainHeader />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;
