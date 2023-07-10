import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./shared/components/Root";
import RootWithHeader from "./shared/components/RootWithHeader";
import ItemsPage from "./items/pages/ItemsPage";
import HomePage from "./shared/pages/HomePage";
// import ItemDetailPage from "./items/pages/ItemDetailPage"; //ceka loader
import UnderConstructionPage from "./shared/components/UnderConstructionPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />, // /home
            },
            {
                path: "items", ///browse
                element: <RootWithHeader />,
                children: [
                    { index: true, element: <ItemsPage /> },
                    // { path: ":itemId", element: <ItemDetailPage /> },
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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
