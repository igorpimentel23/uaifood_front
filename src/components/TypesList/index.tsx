import React, { useEffect, useState } from 'react';

interface TypeProps {
  types: { type: string }[];
}

const TypesList: React.FC<TypeProps> = types => {
  const [starsArr, setStarsArr] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (types) {
      const n = types.types.length;
      const aux = [];
      if (n === 1 && types.types[0].type === '') {
        aux.push(<p key={1}>Sem categorias</p>);
      } else {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < n; i++) {
          aux.push(
            <label
              key={types.types[i].type}
              htmlFor={types.types[i].type}
              className="d-flex align-items-center fw-light fs-sm color-darkGray"
            >
              <input
                type="checkbox"
                name={types.types[i].type}
                className="mr-2"
              />
              {types.types[i].type}
            </label>,
          );
        }
      }
      setStarsArr(aux);
    }
  }, [types]);

  return <div>{starsArr}</div>;
};

export default TypesList;
