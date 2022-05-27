import React, { FC } from 'react';

import { InfoPanel } from 'components/main/infoPanel/InfoPanel';
import { Slider } from 'components/main/slider/Slider';

export const Main: FC = () => (
  <div>
    <Slider />
    <InfoPanel />
  </div>
);
