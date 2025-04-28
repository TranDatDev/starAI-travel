import React from 'react';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from '@/components/ui/sidebar';

interface Props {}

const AppSidebar = (props: Props) => {
    return (
        <div>
            <Sidebar>
                <SidebarHeader />
                <SidebarContent>
                    <SidebarGroup />
                    <SidebarGroup />
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
        </div>
    );
};

export default AppSidebar;
