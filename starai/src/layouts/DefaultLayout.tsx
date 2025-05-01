import React from 'react';
interface Props {}
import { Outlet } from 'react-router';
import AnimatedBox from '@/components/AnimatedBox';
import NavigationAuthService from '@/components/NavigationAuthService';
import NavigationGeneralService from '@/components/NavigationGeneralService';
import RightSideBarToggle from '@/components/RightSideBarToggle';
const DefaultLayout = (props: Props) => {
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
                        <NavigationAuthService />
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
