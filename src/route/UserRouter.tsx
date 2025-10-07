import { lazy, Suspense } from "react"
const Hompage = lazy(()=> import('../features/user/component/Home'))



const userRoutes = [
    {
        path:'/',
        element:(
            <Hompage />
        )
    }
]

export default userRoutes