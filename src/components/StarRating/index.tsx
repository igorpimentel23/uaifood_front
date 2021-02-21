import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface RatingProps {
  stars: number;
}

const StarRating: React.FC<RatingProps> = ({ stars = 0 }) => {
  const [starsArr, setStarsArr] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const aux = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 5; i++) {
      if (i <= stars) {
        aux.push(<FaStar key={i} size={14} />);
      } else {
        aux.push(<FaRegStar key={i} size={14} />);
      }
    }
    setStarsArr(aux);
  }, [stars]);

  return <div>{starsArr}</div>;
};

export default StarRating;
