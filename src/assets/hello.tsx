import React from 'react';

interface Props {
  month: string;
  day: string;
  size: number;
}

const HelloIcon = (props: Props) => {
  const { month, day, size } = props;
  return (

    <svg width={`${size}`} height={`${size}`} viewBox="0 0 475 512" version="1.1">
      <g id="group">
        <path id="Tracé" d="M36.5 -0.5 L37.5 -0.5 37.5 138.5 473.5 138.5 C473.5 92.167 473.5 45.833 473.5 -0.5 L474.5 -0.5 474.5 139.5 C328.5 139.5 182.5 139.5 36.5 139.5 36.5 92.833 36.5 46.167 36.5 -0.5 Z" fill="#ef9fa4" fillOpacity="1" stroke="none" />
      </g>
      <g id="group-1">
        <path id="Tracé-1" d="M37.5 -0.5 L159.5 -0.5 C159.667 15.837 159.5 32.17 159 48.5 144.656 60.044 143.156 73.044 154.5 87.5 168.61 97.841 181.11 96.175 192 82.5 198.483 69.451 195.983 58.451 184.5 49.5 183.501 32.847 183.167 16.18 183.5 -0.5 L327.5 -0.5 C327.833 16.18 327.499 32.847 326.5 49.5 315.017 58.451 312.517 69.451 319 82.5 329.89 96.175 342.39 97.841 356.5 87.5 367.844 73.044 366.344 60.044 352 48.5 351.5 32.17 351.333 15.837 351.5 -0.5 L473.5 -0.5 473.5 138.5 C328.167 138.5 182.833 138.5 37.5 138.5 37.5 92.167 37.5 45.833 37.5 -0.5 Z" fill="#f61b29" fillOpacity="1" stroke="none" />
      </g>
      <g id="group-2">
        <path id="Tracé-2" d="M36.5 139.5 L474.5 139.5 474.5 511.5 C328.5 511.5 182.5 511.5 36.5 511.5 36.5 387.5 36.5 263.5 36.5 139.5 Z" fill="#e6eaed" fillOpacity="1" stroke="none" />
      </g>
      <defs>
        <text id="string" transform="matrix(1.0 0.0 0.0 1.0 145.0 201.0)" y="50" fontSize="80" fontFamily="Helvetica-Bold, Helvetica" textDecoration="none" x="40.0" fill="#000000">{month}</text>
      </defs>
      <use id="MONTH" xlinkHref="#string" />
      <defs>
        <text id="string-1" transform="matrix(1.0 0.0 0.0 1.0 167.0 294.0)" fill="#000000" x="1.0" y="122.0" fontSize="158" textDecoration="none" fontFamily="Helvetica-Bold, Helvetica">{day}</text>
      </defs>
      <use id="12" xlinkHref="#string-1" />
    </svg>

  );
};

export default HelloIcon;
