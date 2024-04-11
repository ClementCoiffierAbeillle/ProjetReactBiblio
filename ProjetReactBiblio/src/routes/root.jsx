import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import ErrorPage from "../pages/404.jsx";
import Home from "../pages/home.jsx";
import MentionLegales from "../pages/mentionsLegales.jsx";
import DetailLivre from "../pages/detailLivre.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/mentions-legales", element: <MentionLegales /> },
            { path: "/detail-livre", element: <DetailLivre /> },
        ],
    },
]);

export default router;