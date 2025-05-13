import React from 'react';
interface Props {}
import { Outlet } from 'react-router';
import AnimatedBox from '@/components/AnimatedBox';
import NavigationAuthService from '@/components/NavigationAuthService';
import NavigationGeneralService from '@/components/NavigationGeneralService';
import RightSideBarToggle from '@/components/RightSideBarToggle';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { getUserAvatarById } from '@/services/user/userService';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router';
const DefaultLayout = (props: Props) => {
    const { isAuthenticated, userId, logout } = useAuth();
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    useEffect(() => {
        if (isAuthenticated) {
            const fetchAvatar = async () => {
                try {
                    const url = await getUserAvatarById(userId!);
                    setAvatarUrl(url);
                } catch (error) {
                    console.error('Failed to fetch avatar:', error);
                }
            };
            fetchAvatar();
        }
    }, [isAuthenticated]);
    const navigate = useNavigate();
    return (
        <AnimatedBox>
            <div className="mb-10">
                <header className="sticky top-0 bg-[var(--background)] py-4 mb-4 flex items-center justify-between z-50 ">
                    <h1 className="font-bold text-4xl">STARAI</h1>
                    <RightSideBarToggle />
                    <div className="hidden lg:block">
                        <NavigationGeneralService />
                    </div>
                    <div className="hidden lg:block">
                        {isAuthenticated ? (
                            <div className="flex items-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center">
                                        <Avatar>
                                            <AvatarImage src={avatarUrl || '/avatar'} />
                                            <AvatarFallback>U</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>User Menu</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            onClick={() => {
                                                if (userId) {
                                                    navigate(`/user/${userId}`);
                                                }
                                            }}
                                        >
                                            Account
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={logout} className="text-red-500">
                                            Logout
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ) : (
                            <NavigationAuthService />
                        )}
                    </div>
                </header>
                <main>
                    {' '}
                    <Outlet />
                </main>
            </div>
        </AnimatedBox>
    );
};

export default DefaultLayout;
