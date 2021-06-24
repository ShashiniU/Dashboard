import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(months, cases) {
  return { months, cases };
}

const data = [
  createData('March20', 20),
  createData('Apr20', 50),
  createData('May20', 140),
  createData('Jun20', 500),
  createData('Jul20', 800),
  createData('Aug20', 20000),
  createData('Sep20', 30000),
  createData('Oct20', 40000),
  createData('Nov20', 45000),
  createData('Dec20', 50000),
  createData('Jan21', 130000),
  createData('Feb21', 165000),
  createData('Mar21', 170000),
  createData('Apr21', 240000),
  createData('May21', 256000),
  createData('Jun', undefined),

  
 
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Corona (Covid-19) Situational Analysis Dashboard of Sri Lanka</Title>
      <br></br>
      <br></br>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="months" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              No of cases
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="cases" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}