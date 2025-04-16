import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { utilizationData } from '../data/populationData';

function UtilizationBarChart() {
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-center mb-4">Dental Utilization by Population (%)</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={utilizationData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(value) => [`${value}%`, 'Utilization']} />
          <Legend />
          <Bar dataKey="lastYear" name="Last Year" fill="#8884d8" />
          <Bar dataKey="lastTwoYears" name="Last 2 Years" fill="#82ca9d" />
          <Bar dataKey="lastThreeYears" name="Last 3 Years" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UtilizationBarChart;