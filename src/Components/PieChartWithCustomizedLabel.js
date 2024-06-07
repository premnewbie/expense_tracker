import * as React from 'react';

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function PieChartWithCustomizedLabel({data}) {
  
  const sizing = {
    margin: { right: 5 },
    width: 250,
    height: 250,
    legend: { hidden: true },
  };

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
  
  const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (<>
      <PieChart
        series={[
          {
            outerRadius: 100,
            data,
            arcLabel: getArcLabel,
            arcLabelMinAngle: 45,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontSize: 14,
          },
        }}
        {...sizing}
      />
    </>
  );
}
