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
const AppRoutes = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="accommodation" element={<Accommodation />} />
                    <Route path="attraction" element={<Attraction />} />
                    <Route path="restaurant" element={<Restaurant />} />
                </Route>
                {/* <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route> */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
