import { lazy, Suspense } from "react"
const Hompage = lazy(()=> import('../features/user/pages/Home'))
const ProductsPage = lazy(()=> import('../features/user/component/Products'))



const userRoutes = [
    {
        path:'/',
        element:(
            <Hompage />
        )
    },
    {
        path:'/products',
        element:(
            <ProductsPage />
        )
    }
]

export default userRoutes