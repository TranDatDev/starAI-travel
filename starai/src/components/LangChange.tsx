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
import { toast } from 'sonner';

type Props = {};

export default function LangChange({}: Props) {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const changeLanguage = (lng: string) => {
        if (lng === currentLanguage) {
            return;
        }
        i18n.changeLanguage(lng);
        toast(t('change-language-noti'));
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <Icon icon="ion:language" className="mr-2" />
                    {languages.find((lang) => lang.code === currentLanguage)?.label || 'Language'}
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
