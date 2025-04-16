import React from 'react';
import { generalPopulationMetrics } from '../data/metricsData';
import { conditionMatrixData } from '../data/metricsData';

// Compact range bar visualization
function RangeBarChart({ condition, metricType, selectedPlan }) {
  const generalMetrics = generalPopulationMetrics[metricType][condition];
  const clientValue = conditionMatrixData.find(c => c.name === condition)[metricType][selectedPlan];
  
  // Determine if client value is better than average
  const isBetter = metricType === 'avgCost' ? 
    clientValue < generalMetrics.average : 
    clientValue > generalMetrics.average;
    
  // Determine if client value is more than 10% worse than average
  const isSignificantlyWorse = metricType === 'avgCost' ?
    clientValue > generalMetrics.average * 1.1 :
    clientValue < generalMetrics.average * 0.9;
  
  // Format value based on metric type
  const formatValue = (value) => {
    if (metricType === 'avgCost') return `${value}`;
    if (metricType.includes('Score')) return value.toFixed(1);
    return `${value}%`;
  };
  
  // Calculate percentage for positioning client marker
  const calculatePosition = () => {
    const range = generalMetrics.high - generalMetrics.low;
    if (range === 0) return 50;
    
    // Limit position within the bar
    let position = ((clientValue - generalMetrics.low) / range) * 100;
    position = Math.min(Math.max(position, 0), 100);
    return position;
  };
  
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-1">
        <span className="text-xs text-gray-500">Pop. Avg({formatValue(generalMetrics.average)})</span>
        <span className={`text-xs font-semibold ${isSignificantlyWorse ? 'text-red-600' : isBetter ? 'text-green-600' : 'text-yellow-600'}`}>
          {formatValue(clientValue)}
        </span>
      </div>
      <div className="relative w-full h-6 mb-2">
        {/* Main bar */}
        <div className="absolute w-full h-6 border border-gray-300 bg-gray-100 rounded-md overflow-hidden">
          {/* Progress bar for visual effect */}
          <div 
            className="h-full bg-blue-50" 
            style={{ width: `100%` }}
          ></div>
        </div>
        
        {/* Range markers */}
        <div className="absolute top-0 left-0 w-full flex justify-between px-2 text-xs">
          <span className="mt-1 text-gray-500">Low ({formatValue(generalMetrics.low)})</span>
          <span className="mt-1 text-gray-500">High ({formatValue(generalMetrics.high)})</span>
        </div>
        
        {/* Client value marker */}
        <div 
          className={`absolute top-0 w-0.5 h-6 ${isSignificantlyWorse ? 'bg-red-500' : isBetter ? 'bg-green-500' : 'bg-yellow-500'}`} 
          style={{ left: `${calculatePosition()}%` }}
        ></div>
        <div 
          className={`absolute -top-1 w-2 h-2 rounded-full ${isSignificantlyWorse ? 'bg-red-500' : isBetter ? 'bg-green-500' : 'bg-yellow-500'}`}
          style={{ left: `calc(${calculatePosition()}% - 3px)` }}
        ></div>
      </div>
    </div>
  );
}

export default RangeBarChart;