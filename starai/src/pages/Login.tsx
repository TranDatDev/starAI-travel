import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '@/contexts/AuthContext';
import { login } from '@/services/auth/authService';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Icon } from '@iconify/react/dist/iconify.js';
import AnimatedBox from '@/components/AnimatedBox';
const Login = () => {
    const navigate = useNavigate();
    const { login: loginContext } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ✅ KHÔNG gọi handleLogin()
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = await login(email, password);
            const { access_token: token, id: userId, language: language, theme: theme } = data;
            loginContext(token, userId, language, theme);
            window.location.href = '/';
            toast.success('Đăng nhập thành công!');
        } catch (err) {
            toast.error('Không đúng email hoặc mật khẩu');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <AnimatedBox>
                <form onSubmit={handleLogin}>
                    <Card className="w-[40vw]">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <h1 className="font-bold text-3xl py-4">STRARAI</h1>
                                <Button variant="link" type="button" onClick={() => navigate('/')}>
                                    Quay lại trang chủ
                                    <Icon
                                        icon="material-symbols:arrow-back-ios-new"
                                        className="ml-2"
                                    />
                                </Button>
                            </div>
                            <CardTitle>Đăng nhập</CardTitle>
                            <CardDescription>
                                Nhập thông tin xác thực của bạn ở dưới đây
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="py-2">
                                <label>Email</label>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="pt-2">
                                <label>Password</label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-end">
                                <Button type="submit" className="my-4">
                                    Đăng nhập
                                </Button>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex items-center justify-center w-full">
                                <Button
                                    variant="link"
                                    type="button"
                                    onClick={() => navigate('/register')}
                                >
                                    Bạn chưa có tài khoản?
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </form>
            </AnimatedBox>
        </div>
    );
};

export default Login;
