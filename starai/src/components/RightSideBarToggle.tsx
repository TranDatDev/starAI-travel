import React from 'react';
import { useState } from 'react';
import RightSidebar from '@/components/RightSideBar';
import { Icon } from '@iconify/react';
interface Props {}

const RightSideBarToggle = (props: Props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="lg:hidden">
            <button onClick={() => setSidebarOpen(true)} className="">
                <Icon icon="material-symbols:menu" width={30} height={30} />
            </button>

            <RightSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
    );
};

export default RightSideBarToggle;
