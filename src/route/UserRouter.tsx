import { lazy, Suspense } from "react"
const Hompage = lazy(()=> import('../features/user/pages/Home'))



const userRoutes = [
    {
        path:'/',
        element:(
            <Hompage />
        )
    }
]

export default userRoutes