import React from 'react';

function SummaryTable({ population, title }) {
  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Population Overview</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Total Members:</span>
              <span>{population.totalMembers.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Members Utilizing Dental Services:</span>
              <span>{population.utilizingMembers.toLocaleString()} ({Math.round(population.utilizingMembers/population.totalMembers*100)}%)</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Utilization Timeline</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Last Year:</span>
              <span>{population.lastYear.count.toLocaleString()} ({population.lastYear.percentage}%)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Last 2 Years:</span>
              <span>{population.lastTwoYears.count.toLocaleString()} ({population.lastTwoYears.percentage}%)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Last 3 Years:</span>
              <span>{population.lastThreeYears.count.toLocaleString()} ({population.lastThreeYears.percentage}%)</span>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-4">Chronic Condition Utilization</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Chronic Condition</th>
              <th className="py-2 px-4 border-b text-right">Members</th>
              <th className="py-2 px-4 border-b text-right">Last Year (%)</th>
              <th className="py-2 px-4 border-b text-right">Last 2 Years (%)</th>
              <th className="py-2 px-4 border-b text-right">Last 3 Years (%)</th>
            </tr>
          </thead>
          <tbody>
            {population.chronicConditions.map((condition, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="py-2 px-4 border-b">{condition.name}</td>
                <td className="py-2 px-4 border-b text-right">{condition.members.toLocaleString()}</td>
                <td className="py-2 px-4 border-b text-right">{condition.lastYear}%</td>
                <td className="py-2 px-4 border-b text-right">{condition.lastTwoYears}%</td>
                <td className="py-2 px-4 border-b text-right">{condition.lastThreeYears}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SummaryTable;