import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
interface Props {}
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import DefaultLayout from '@/layouts/DefaultLayout';
import Accommodation from '@/pages/Explore/Accommodation';
import Attraction from '@/pages/Explore/Attraction';
import Restaurant from '@/pages/Explore/Restaurant';
import DetailInfo from '@/components/DetailInfo';
const AppRoutes = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="accommodation" element={<Accommodation />} />
                    <Route
                        path="accommodation/:id"
                        element={<DetailInfo service="accommodation" />}
                    />
                    <Route path="attraction" element={<Attraction />} />
                    <Route path="attraction/:id" element={<DetailInfo service="attraction" />} />
                    <Route path="restaurant" element={<Restaurant />} />
                    <Route path="restaurant/:id" element={<DetailInfo service="restaurant" />} />
                </Route>
                {/* <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route> */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
