import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
const NavigationGeneralService = () => {
    const { t } = useTranslation();
    const serviceItems = ['accommodation', 'restaurant', 'attraction'];
    const menuItems = ['', 'post', ...serviceItems];
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
