import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
interface Props {}

const NavigationGeneralService = (props: Props) => {
    const { t } = useTranslation();
    const serviceItems = ['accommodation', 'attraction', 'restaurant'];
    const menuItems = ['', ...serviceItems];
    return (
        <div>
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
        </div>
    );
};

export default NavigationGeneralService;
