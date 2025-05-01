import React from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CurrencyConverter from './CurrencyConverter';
interface CardSingleDetailProps {
    title: string;
    description: string;
    value: string | number;
    isCurrency?: boolean;
    isPhoneNumber?: boolean;
}

const CardSingleDetail: React.FC<CardSingleDetailProps> = ({
    title,
    description,
    value,
    isCurrency = false,
    isPhoneNumber = false,
}) => {
    return (
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {isCurrency && typeof value === 'number' ? (
                    <CurrencyConverter amount={value} />
                ) : isPhoneNumber ? (
                    <a href={`tel:${value}`} className="text-blue-500 underline">
                        {value}
                    </a>
                ) : (
                    <p>{value}</p>
                )}
            </CardContent>
        </Card>
    );
};

export default CardSingleDetail;
