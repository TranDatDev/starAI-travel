import LangChange from './LangChange';
import { ModeToggle } from './mode-toggle';

export const Preferences = () => {
    return (
        <div className="fixed bottom-4 right-4 z-20">
            <div className="flex space-x-2">
                <ModeToggle />
                <LangChange />
            </div>
        </div>
    );
};
