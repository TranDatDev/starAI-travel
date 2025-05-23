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
import { useAuth } from '@/contexts/AuthContext';

type Props = {};

export default function LangChange({}: Props) {
    const { t, i18n } = useTranslation();
    const { updateLanguage } = useAuth();
    const currentLanguage = i18n.language;
    const changeLanguage = async (lng: string) => {
        if (lng === currentLanguage) return;
        await i18n.changeLanguage(lng);
        updateLanguage(lng);
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
