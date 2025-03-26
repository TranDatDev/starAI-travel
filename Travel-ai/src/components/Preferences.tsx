import React from 'react';

import LangChange from './LangChange';
import { ModeToggle } from './mode-toggle';
interface Props {}

export const Preferences = (props: Props) => {
    return (
        <div className="fixed bottom-4 right-4">
            <div className="flex space-x-2">
                <ModeToggle />
                <LangChange />
            </div>
        </div>
    );
};
