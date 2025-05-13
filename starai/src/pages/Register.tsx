import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { register } from '@/services/auth/authService'; // Giả sử bạn đã có API này
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
import { Label } from '@/components/ui/label';
const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Mật khẩu không khớp');
            return;
        }

        try {
            await register(email, password); // Gọi API register
            console.log(register);
            toast.success('Đăng ký thành công!');
            navigate('/login'); // Điều hướng về trang đăng nhập
        } catch (err) {
            toast.error('Đăng ký thất bại. Vui lòng thử lại.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <AnimatedBox>
                <form onSubmit={handleRegister}>
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
                            <CardTitle>Đăng ký</CardTitle>
                            <CardDescription>Tạo tài khoản mới của bạn</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <section className="flex flex-col gap-8">
                                <div>
                                    <Label className="mb-2">Email</Label>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label className="mb-2">Password</Label>
                                    <Input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label className="mb-2">Nhập lại mật khẩu</Label>
                                    <Input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-end">
                                    <Button type="submit" className="my-4">
                                        Đăng ký
                                    </Button>
                                </div>
                            </section>
                        </CardContent>
                        <CardFooter>
                            <div className="flex items-center justify-center w-full">
                                <Button
                                    variant="link"
                                    type="button"
                                    onClick={() => navigate('/login')}
                                >
                                    Đã có tài khoản?
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </form>
            </AnimatedBox>
        </div>
    );
};

export default Register;
