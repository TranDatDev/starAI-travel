import React from 'react';
import { Icon } from '@iconify/react';

interface StarRatingOfficialProps {
    rating: number;
    maxStars?: number;
    size?: number;
    className?: string;
}

const StarRatingOfficial: React.FC<StarRatingOfficialProps> = ({
    rating,
    maxStars = 5,
    size = 40,
    className = '',
}) => {
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
        stars.push(
            <Icon
                key={i}
                icon={i <= rating ? 'line-md:star-filled' : 'line-md:star'}
                width={size}
                height={size}
                className={className}
                color="#facc15"
            />
        );
    }

    return <div className="flex items-center">{stars}</div>;
};

export default StarRatingOfficial;
