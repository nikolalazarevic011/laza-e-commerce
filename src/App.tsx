import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./shared/components/Root";
import RootWithHeader from "./shared/components/RootWithHeader";
import ItemsPage from "./items/pages/ItemsPage";
import HomePage from "./shared/pages/HomePage";
import ItemDetailPage, {
    loader as itemDetailLoader,
} from "./items/pages/ItemDetailPage"; //ceka loader
import UnderConstructionPage from "./shared/components/UnderConstructionPage";
import CreateItem from "./items/components/CreateItem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />, //later if logged in add header if not no header for home page?
        children: [
            {
                index: true,
                element: <HomePage />, // /home
            },
            {
                path: "items", // /browse
                element: <RootWithHeader />,
                children: [
                    { index: true, element: <ItemsPage /> },
                    {
                        path: ":itemId",
                        loader: itemDetailLoader,
                        element: <ItemDetailPage />,
                    },
                ],
            },
            {
                path: "categories",
                element: <UnderConstructionPage />,
            },
            {
                path: "about",
                element: <UnderConstructionPage />,
            },
            {
                path: "createitem",
                element: <CreateItem />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
