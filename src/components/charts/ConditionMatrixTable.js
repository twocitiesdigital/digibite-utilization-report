import React, { useState } from 'react';
import RangeBarChart from './RangeBarChart';
import { conditionMatrixData } from '../data/metricsData';

function ConditionMatrixTable() {
  // State to track which plan type is selected
  const [selectedPlan, setSelectedPlan] = useState('Medicare');
  
  const planOptions = ['Medicare', 'Commercial', 'Individual', 'Medicaid'];
  
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-center mb-4">Condition-Specific Metrics by Plan Type</h3>
      
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {planOptions.map(plan => (
            <button
              key={plan}
              type="button"
              className={`px-6 py-2.5 text-sm font-medium ${selectedPlan === plan 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-700'} 
                ${plan === 'Medicare' ? 'rounded-l-lg' : ''} 
                ${plan === 'Medicaid' ? 'rounded-r-lg' : ''}
                border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-300 transition-colors duration-200`}
              onClick={() => setSelectedPlan(plan)}
            >
              {plan}
            </button>
          ))}
        </div>
      </div>
      
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                Chronic Condition
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                Dentist Utilization (%)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                Avg. Cost of Services ($)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                Dental Score (1-10)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                Dental & Medical Score (1-10)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {conditionMatrixData.map((condition, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {condition.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  <RangeBarChart 
                    condition={condition.name} 
                    metricType="dentistUtilization" 
                    selectedPlan={selectedPlan} 
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  <RangeBarChart 
                    condition={condition.name} 
                    metricType="avgCost" 
                    selectedPlan={selectedPlan} 
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  <RangeBarChart 
                    condition={condition.name} 
                    metricType="dentalScore" 
                    selectedPlan={selectedPlan} 
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  <RangeBarChart 
                    condition={condition.name} 
                    metricType="combinedScore" 
                    selectedPlan={selectedPlan} 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-gray-600 px-4">
        <p className="mb-1"><span className="font-semibold">Dental Score:</span> Measures overall dental health on a scale of 1-10 based on dental visit frequency, preventive care, and treatment outcomes.</p>
        <p className="mb-1"><span className="font-semibold">Dental & Medical Score:</span> Combines dental health metrics with medical condition management to provide a holistic health assessment on a scale of 1-10.</p>
        <p><span className="font-semibold">Chart Legend:</span> The bars show general population ranges (low to high) with the client population value indicated by the colored marker. Green markers indicate better than average performance, yellow markers indicate near-average performance, and red markers indicate values more than 10% worse than the population average.</p>
      </div>
    </div>
  );
}

export default ConditionMatrixTable;