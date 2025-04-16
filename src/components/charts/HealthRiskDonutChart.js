import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';

function HealthRiskDonutChart({ data, title, description }) {
  // Calculate total members from data
  const totalMembers = data.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate percentage for the first item (the condition we're highlighting)
  const percentage = ((data[0].value / totalMembers) * 100).toFixed(1);
  
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
      <div className="flex flex-col items-center mb-4 bg-blue-50 py-3 px-4 rounded-lg border border-blue-200">
        <h4 className="text-lg font-semibold text-blue-800 text-center">Prevalence</h4>
        <p className="text-4xl font-bold text-center text-blue-800">{percentage}%</p>
        <p className="text-sm text-blue-600 mt-1">{description}</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
            label={({name, percent}) => `${name}: ${(percent * 100).toFixed(1)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} members`, 'Population']} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HealthRiskDonutChart;