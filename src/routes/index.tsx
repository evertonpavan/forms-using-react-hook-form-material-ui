import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import CreateDiscountCoupon from "../pages/DiscountCoupons/create";
import DiscountCoupons from "../pages/DiscountCoupons/list";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/discount-coupons" element={<DiscountCoupons />} />
                <Route path="/discount-coupons/create" element={<CreateDiscountCoupon />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;