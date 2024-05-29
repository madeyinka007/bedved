import { Outlet } from "react-router-dom"
import { Suspense } from "react"

const Layout = () => {
    return (
        <>
            <div className="page_wrapper">
                {/* <Suspense fallback={
                    <div id="preloader">
                        <div className="circle-border">
                            <div className="circle-core"></div>
                        </div>
                    </div>
                }> */}
                <Outlet />
                {/* </Suspense> */}
            </div>
        </>
    )
}

export default Layout