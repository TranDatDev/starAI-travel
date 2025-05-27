import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import DefaultLayout from '@/layouts/DefaultLayout';
import Accommodation from '@/pages/Explore/Accommodation';
import Attraction from '@/pages/Explore/Attraction';
import Restaurant from '@/pages/Explore/Restaurant';
import DetailInfo from '@/components/DetailInfo';
import PrivateRoute from '@/components/PrivateRoute';
import UserDetail from '@/components/user/UserDetail';
import PostPage from '@/pages/Explore/Post';
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="post" element={<PostPage />} />
                    <Route path="accommodation" element={<Accommodation />} />
                    <Route
                        path="accommodation/:id"
                        element={<DetailInfo service="accommodation" />}
                    />
                    <Route path="attraction" element={<Attraction />} />
                    <Route path="attraction/:id" element={<DetailInfo service="attraction" />} />
                    <Route path="restaurant" element={<Restaurant />} />
                    <Route path="restaurant/:id" element={<DetailInfo service="restaurant" />} />
                    <Route
                        path="user/:id"
                        element={
                            <PrivateRoute>
                                <UserDetail />
                            </PrivateRoute>
                        }
                    />
                </Route>
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
