import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { populationGroups } from '../data/populationData';

function PopulationDonutChart() {
  // Calculate total members from population groups
  const totalMembers = populationGroups.reduce((sum, group) => sum + group.value, 0);
  
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-center mb-2">Member Population Distribution</h3>
      <div className="flex flex-col items-center mb-6">
        <h4 className="text-lg font-semibold text-gray-800 text-center">Total Members</h4>
        <p className="text-4xl font-bold text-center text-gray-800">{totalMembers.toLocaleString()}</p>
        <p className="text-sm text-gray-600 mt-1">Across All Plan Types</p>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={populationGroups}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {populationGroups.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} members`, 'Population']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PopulationDonutChart;