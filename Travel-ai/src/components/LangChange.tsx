import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';
type Props = {};

export default function LangChange({}: Props) {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Icon icon="ion:language" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('vi')}>Tiếng Việt</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
