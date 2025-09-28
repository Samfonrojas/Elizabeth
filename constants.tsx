import React from 'react';
import type { Metal } from './types';
import { CopperIcon, DiamondIcon, RhodiumIcon, ColtanIcon, CassiteriteIcon } from './components/icons/MetalIcons';

export const METALS: Metal[] = [
  {
    symbol: 'Au',
    name: 'Oro',
    description: 'El metal precioso por excelencia, una reserva de valor global y símbolo de riqueza.',
    icon: <img src="/Gemini_Generated_Image_rm7bfcrm7bfcrm7b.png" alt="Gold bars" className="w-12 h-12 object-contain" />,
  },
  {
    symbol: 'Rh',
    name: 'Rodio',
    description: 'Uno de los metales más raros y valiosos del mundo, crucial en catalizadores automotrices.',
    icon: <RhodiumIcon />,
  },
  {
    symbol: 'C',
    name: 'Diamantes',
    description: 'Gemas de dureza y brillo inigualables, símbolos de lujo, eternidad y valor industrial.',
    icon: <DiamondIcon />,
  },
  {
    symbol: '(Nb,Ta)₂O₅',
    name: 'Coltán',
    description: 'Mineral metálico raro, esencial para la fabricación de dispositivos electrónicos modernos.',
    icon: <ColtanIcon />,
  },
  {
    symbol: 'Cu',
    name: 'Cobre',
    description: 'Conductor eléctrico y térmico excepcional, fundamental para la industria global.',
    icon: <CopperIcon />,
  },
  {
    symbol: 'SnO₂',
    name: 'Casiterita',
    description: 'La principal mena de estaño, vital para aleaciones, soldaduras y la industria conservera.',
    icon: <CassiteriteIcon />,
  },
];