import React from 'react';

interface Props {
    status: string
    size: string
}

const IndicatorIcon = (props: Props) => {
  const { status, size } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2Z" fill={status} />
    </svg>

  );
};

export default IndicatorIcon;
