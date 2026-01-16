import { createBrowserRouter } from "react-router-dom";
import Root from "../../src/Layout/Root/Root";
import Home from "../Pages/Home/Home"
import ContactPage from "../Pages/ContactPage/ContactPage"
import ResumePage from "../Pages/ResumePage/ResumePage";
import ProjectPage from "../Pages/ProjectPage/ProjectPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contactPage",
                element: <ContactPage />,
            },
            {
                path: "/resume",
                element: <ResumePage />,
            },
            {
                path: "/projects",
                element: <ProjectPage />,
            },
        ],
    },
]);

export default router;