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
import { languages } from '@/locales/i18n';
type Props = {};

export default function LangChange({}: Props) {
    const { i18n } = useTranslation();
    const defaultLanguage = i18n.language;
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Icon icon="ion:language" className="mr-2" />
                    {languages.find((lang) => lang.code === defaultLanguage)?.label || 'Language'}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top">
                {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} onClick={() => changeLanguage(lang.code)}>
                        {lang.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
