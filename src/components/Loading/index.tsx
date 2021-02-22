import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface LoadingProps {
  loadingStyle?: object;
}

const Loading: React.FC<LoadingProps> = ({ loadingStyle = {} }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center w-100 color-light-gray"
      style={loadingStyle}
    >
      <FontAwesomeIcon icon={faSpinner} style={{ fontSize: 56 }} pulse />
    </div>
  );
};

export default Loading;
