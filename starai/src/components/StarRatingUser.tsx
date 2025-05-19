import { Icon } from '@iconify/react';

interface StarRatingProps {
    rating: number;
    maxStars?: number;
    size?: number;
    className?: string;
    isFractional?: boolean;
}

const StarRatingUser: React.FC<StarRatingProps> = ({
    rating,
    maxStars = 5,
    size = 24,
    className = '',
    isFractional = true,
}) => {
    const stars = [];

    for (let i = 1; i <= maxStars; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(
                <Icon key={i} icon="mdi:star" width={size} height={size} className={className} />
            );
        } else if (isFractional && i - rating < 1 && i - rating > 0) {
            stars.push(
                <Icon
                    key={i}
                    icon="mdi:star-half"
                    width={size}
                    height={size}
                    className={className}
                />
            );
        } else {
            stars.push(
                <Icon
                    key={i}
                    icon="mdi:star-outline"
                    width={size}
                    height={size}
                    className={className}
                />
            );
        }
    }

    return <div className="flex items-center">{stars}</div>;
};

export default StarRatingUser;
