interface RightSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}
import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const serviceItems = ['accommodation', 'attraction', 'restaurant'];
    const menuItems = ['', ...serviceItems];
    return (
        <div
            className={`
                fixed top-0 right-0 h-full w-64 bg-[var(--secondary)] shadow-lg 
                transform transition-transform duration-300 ease-in-out z-10
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                ${isOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}
            `}
        >
            <div className="p-4 flex justify-end items-center border-b">
                <button onClick={onClose} className="text-[var(--secondary-foreground)]">
                    ✕
                </button>
            </div>
            <div className="p-4 text-[var(--secondary-foreground)] flex flex-col gap-4">
                {menuItems.map((item) => {
                    const path = item ? `/${item}` : '/';
                    const labelKey = `link.${item || 'home'}`;

                    return (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `block p-2 rounded-md transition-all font-semibold ${
                                    isActive
                                        ? 'bg-[var(--secondary-foreground)] text-[var(--secondary)]'
                                        : 'text-[var(--secondary-foreground)]'
                                }`
                            }
                        >
                            {t(labelKey)}
                        </NavLink>
                    );
                })}
                <NavLink
                    key={'/login'}
                    to="/login"
                    className={({ isActive }) =>
                        `block p-2 rounded-md transition-all font-semibold ${
                            isActive
                                ? 'bg-[var(--secondary-foreground)] text-[var(--secondary)]'
                                : 'text-[var(--secondary-foreground)]'
                        }`
                    }
                >
                    {t('link.login')}
                </NavLink>

                <NavLink
                    key={'/register'}
                    to="/register"
                    className={({ isActive }) =>
                        `block p-2 rounded-md transition-all font-semibold ${
                            isActive
                                ? 'bg-[var(--secondary-foreground)] text-[var(--secondary)]'
                                : 'text-[var(--secondary-foreground)]'
                        }`
                    }
                >
                    {t('link.register')}
                </NavLink>
            </div>
        </div>
    );
};

export default RightSidebar;
