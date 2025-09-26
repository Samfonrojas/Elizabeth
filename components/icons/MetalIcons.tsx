
import React from 'react';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
};

export const GoldIcon: React.FC = () => (
  <svg {...iconProps}>
    <path d="M2 20h20v-4H2v4zm2-6h16V9H4v5zM2 4v4h20V4H2z" />
  </svg>
);

export const CopperIcon: React.FC = () => (
  <svg {...iconProps}>
    <path d="M17 4v3h-3V4h3m0 17v-3h-3v3h3M4 7V4h3v3H4m0 17v-3h3v3H4m-2-9h3v-3H2v3m17 0v-3h3v3h-3m-4 0h-3V9h-4v3H6v4h3v3h4v-3h3v-4z"/>
  </svg>
);

export const DiamondIcon: React.FC = () => (
  <svg {...iconProps}>
    <path d="M12 2L2 8.5l10 13.5L22 8.5L12 2zm0 2.33L19.53 12H4.47L12 4.33z" />
  </svg>
);

export const RhodiumIcon: React.FC = () => (
  <svg {...iconProps}>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z M12 6a1 1 0 1 0 1 1a1 1 0 0 0-1-1zm0 10a1 1 0 1 0 1 1a1 1 0 0 0-1-1zm-4-5a1 1 0 1 0 1 1a1 1 0 0 0-1-1zm8 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1z" />
  </svg>
);

export const ColtanIcon: React.FC = () => (
  <svg {...iconProps}>
    <path d="M16 4h-4L2 12l10 8h4l10-8L16 4zm-4 1.5L19.5 12 12 18.5V5.5zm-2 13L4.5 12 10 5.5v13z"/>
  </svg>
);

export const CassiteriteIcon: React.FC = () => (
  <svg {...iconProps}>
    <path d="M12 2L3 8v8l9 6 9-6V8l-9-6zm-7 7.5L12 5l7 4.5v5L12 19l-7-4.5v-5z" />
  </svg>
);
