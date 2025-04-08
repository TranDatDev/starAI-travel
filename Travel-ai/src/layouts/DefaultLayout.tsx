import React from 'react';

interface Props {}
import { Outlet, Link } from 'react-router';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useTranslation } from 'react-i18next';
import AnimatedBox from '@/components/AnimatedBox';
const DefaultLayout = (props: Props) => {
    const { t } = useTranslation();
    const menuItems = ['', 'accommodation', 'attraction', 'restaurant'];
    return (
        <AnimatedBox>
            <div>
                <header className="mt-2 mb-10 flex items-center justify-between">
                    <h1 className="font-bold text-4xl">STARAI</h1>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {menuItems.map((item) => {
                                const path = item ? `/${item}` : '/';
                                const labelKey = `link.${item || 'home'}`;

                                return (
                                    <NavigationMenuItem key={path}>
                                        <NavigationMenuLink
                                            asChild
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            <Link to={path}>{t(labelKey)}</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                );
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link to="/login">{t('link.login')}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link to="/register">{t('link.register')}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
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
