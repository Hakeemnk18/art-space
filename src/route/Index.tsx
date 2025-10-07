import App from "../App";
import userRoutes from "./UserRouter";
import RouteError from "../features/shared/component/404"

const allRoutes = [
    {
      path: '/',
      element: <App />, 
      errorElement: <RouteError />,
      children: [
        ...userRoutes,
      ],
    },
]

export default allRoutes