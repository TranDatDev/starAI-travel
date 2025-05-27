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
import { useTranslation } from 'react-i18next';
const Login = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { login: loginContext } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ✅ KHÔNG gọi handleLogin()
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = await login(email, password);
            const {
                access_token: token,
                id: userId,
                language: language,
                theme: theme,
                role: role,
            } = data;
            loginContext(token, userId, role, language, theme);
            window.location.href = '/';
            toast.success(t('authentication.login.login-success'));
        } catch (err) {
            toast.error('authentication.login.login-failure');
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
                                    {t('authentication.return-home')}
                                    <Icon
                                        icon="material-symbols:arrow-back-ios-new"
                                        className="ml-2"
                                    />
                                </Button>
                            </div>
                            <CardTitle>{t('authentication.login.title')}</CardTitle>
                            <CardDescription>
                                {t('authentication.login.description')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="py-2">
                                <label>{t('authentication.login.email')}</label>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="pt-2">
                                <label>{t('authentication.login.password')}</label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-end">
                                <Button type="submit" className="my-4">
                                    {t('authentication.login.button')}
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
                                    {t('authentication.login.register-link')}
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
