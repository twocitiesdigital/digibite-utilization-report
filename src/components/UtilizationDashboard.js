import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, ReferenceLine
} from 'recharts';

// Sample data - these would be replaced with real data in production
// Data for CAC and Sleep Apnea donut charts
const cacData = [
  { name: 'Has CAC', value: 436, color: '#ff6b6b' },
  { name: 'No CAC', value: 12022, color: '#74c0fc' }
];

const sleepApneaData = [
  { name: 'Has Sleep Apnea', value: 1247, color: '#9775fa' },
  { name: 'No Sleep Apnea', value: 11211, color: '#63e6be' }
];

const totalPopulation = {
  totalMembers: 12458,
  utilizingMembers: 9840,
  lastYear: {count: 8970, percentage: 72},
  lastTwoYears: {count: 10589, percentage: 85},
  lastThreeYears: {count: 11462, percentage: 92},
  chronicConditions: [
    {name: 'No Chronic Condition', members: 4020, lastYear: 76, lastTwoYears: 87, lastThreeYears: 94},
    {name: 'Hypertension', members: 3987, lastYear: 68, lastTwoYears: 82, lastThreeYears: 88},
    {name: 'Diabetes', members: 2242, lastYear: 65, lastTwoYears: 78, lastThreeYears: 85},
    {name: 'Cardiovascular Disease', members: 1869, lastYear: 62, lastTwoYears: 76, lastThreeYears: 82},
    {name: 'COPD', members: 1495, lastYear: 58, lastTwoYears: 72, lastThreeYears: 78},
    {name: 'Hyperlipidemia', members: 3488, lastYear: 70, lastTwoYears: 84, lastThreeYears: 90},
    {name: 'Atrial Fibrillation', members: 873, lastYear: 64, lastTwoYears: 77, lastThreeYears: 84},
    {name: 'Chronic Kidney Disease', members: 622, lastYear: 56, lastTwoYears: 70, lastThreeYears: 76},
    {name: 'Sleep Apnea', members: 1247, lastYear: 61, lastTwoYears: 75, lastThreeYears: 82}
  ]
};

const medicarePopulation = {
  totalMembers: 2741,
  utilizingMembers: 2055,
  lastYear: {count: 1918, percentage: 70},
  lastTwoYears: {count: 2248, percentage: 82},
  lastThreeYears: {count: 2467, percentage: 90},
  chronicConditions: [
    {name: 'No Chronic Condition', members: 686, lastYear: 78, lastTwoYears: 90, lastThreeYears: 96},
    {name: 'Hypertension', members: 1398, lastYear: 72, lastTwoYears: 85, lastThreeYears: 92},
    {name: 'Diabetes', members: 685, lastYear: 68, lastTwoYears: 80, lastThreeYears: 88},
    {name: 'Cardiovascular Disease', members: 767, lastYear: 65, lastTwoYears: 78, lastThreeYears: 85},
    {name: 'COPD', members: 493, lastYear: 62, lastTwoYears: 75, lastThreeYears: 82},
    {name: 'Hyperlipidemia', members: 1042, lastYear: 74, lastTwoYears: 87, lastThreeYears: 93},
    {name: 'Atrial Fibrillation', members: 356, lastYear: 66, lastTwoYears: 79, lastThreeYears: 86},
    {name: 'Chronic Kidney Disease', members: 274, lastYear: 60, lastTwoYears: 74, lastThreeYears: 81},
    {name: 'Sleep Apnea', members: 438, lastYear: 63, lastTwoYears: 77, lastThreeYears: 84}
  ]
};

const commercialPopulation = {
  totalMembers: 5232,
  utilizingMembers: 4290,
  lastYear: {count: 3924, percentage: 75},
  lastTwoYears: {count: 4603, percentage: 88},
  lastThreeYears: {count: 5022, percentage: 96},
  chronicConditions: [
    {name: 'No Chronic Condition', members: 1712, lastYear: 80, lastTwoYears: 92, lastThreeYears: 97},
    {name: 'Hypertension', members: 1413, lastYear: 70, lastTwoYears: 84, lastThreeYears: 91},
    {name: 'Diabetes', members: 785, lastYear: 67, lastTwoYears: 82, lastThreeYears: 89},
    {name: 'Cardiovascular Disease', members: 524, lastYear: 64, lastTwoYears: 79, lastThreeYears: 86},
    {name: 'COPD', members: 419, lastYear: 60, lastTwoYears: 75, lastThreeYears: 82},
    {name: 'Hyperlipidemia', members: 1308, lastYear: 72, lastTwoYears: 86, lastThreeYears: 92},
    {name: 'Atrial Fibrillation', members: 262, lastYear: 66, lastTwoYears: 80, lastThreeYears: 87},
    {name: 'Chronic Kidney Disease', members: 157, lastYear: 58, lastTwoYears: 73, lastThreeYears: 80},
    {name: 'Sleep Apnea', members: 523, lastYear: 65, lastTwoYears: 79, lastThreeYears: 86}
  ]
};

const individualPopulation = {
  totalMembers: 2242,
  utilizingMembers: 1660,
  lastYear: {count: 1525, percentage: 68},
  lastTwoYears: {count: 1839, percentage: 82},
  lastThreeYears: {count: 2040, percentage: 91},
  chronicConditions: [
    {name: 'No Chronic Condition', members: 942, lastYear: 74, lastTwoYears: 88, lastThreeYears: 95},
    {name: 'Hypertension', members: 627, lastYear: 65, lastTwoYears: 79, lastThreeYears: 86},
    {name: 'Diabetes', members: 404, lastYear: 62, lastTwoYears: 76, lastThreeYears: 83},
    {name: 'Cardiovascular Disease', members: 314, lastYear: 59, lastTwoYears: 73, lastThreeYears: 80},
    {name: 'COPD', members: 269, lastYear: 55, lastTwoYears: 69, lastThreeYears: 76},
    {name: 'Hyperlipidemia', members: 561, lastYear: 67, lastTwoYears: 81, lastThreeYears: 88},
    {name: 'Atrial Fibrillation', members: 135, lastYear: 61, lastTwoYears: 75, lastThreeYears: 82},
    {name: 'Chronic Kidney Disease', members: 90, lastYear: 53, lastTwoYears: 67, lastThreeYears: 74},
    {name: 'Sleep Apnea', members: 179, lastYear: 58, lastTwoYears: 72, lastThreeYears: 79}
  ]
};

const medicaidPopulation = {
  totalMembers: 2242,
  utilizingMembers: 1835,
  lastYear: {count: 1614, percentage: 72},
  lastTwoYears: {count: 1906, percentage: 85},
  lastThreeYears: {count: 2040, percentage: 91},
  chronicConditions: [
    {name: 'No Chronic Condition', members: 680, lastYear: 76, lastTwoYears: 89, lastThreeYears: 96},
    {name: 'Hypertension', members: 549, lastYear: 67, lastTwoYears: 81, lastThreeYears: 88},
    {name: 'Diabetes', members: 368, lastYear: 64, lastTwoYears: 78, lastThreeYears: 85},
    {name: 'Cardiovascular Disease', members: 269, lastYear: 61, lastTwoYears: 75, lastThreeYears: 82},
    {name: 'COPD', members: 224, lastYear: 57, lastTwoYears: 71, lastThreeYears: 78},
    {name: 'Hyperlipidemia', members: 561, lastYear: 69, lastTwoYears: 83, lastThreeYears: 90},
    {name: 'Atrial Fibrillation', members: 112, lastYear: 63, lastTwoYears: 77, lastThreeYears: 84},
    {name: 'Chronic Kidney Disease', members: 89, lastYear: 55, lastTwoYears: 69, lastThreeYears: 76},
    {name: 'Sleep Apnea', members: 157, lastYear: 60, lastTwoYears: 74, lastThreeYears: 81}
  ]
};

const populationGroups = [
  { name: 'Medicare', value: 2741, color: '#8884d8' },
  { name: 'Commercial', value: 5232, color: '#82ca9d' },
  { name: 'Individual', value: 2242, color: '#ffc658' },
  { name: 'Medicaid', value: 2242, color: '#ff8042' }
];

const utilizationData = [
  { name: 'Medicare', lastYear: 70, lastTwoYears: 82, lastThreeYears: 90 },
  { name: 'Commercial', lastYear: 75, lastTwoYears: 88, lastThreeYears: 96 },
  { name: 'Individual', lastYear: 68, lastTwoYears: 82, lastThreeYears: 91 },
  { name: 'Medicaid', lastYear: 72, lastTwoYears: 85, lastThreeYears: 91 },
];

// General population metrics data for comparison
const generalPopulationMetrics = {
  dentistUtilization: {
    'No Chronic Condition': {average: 75, low: 68, high: 82},
    'Hypertension': {average: 65, low: 58, high: 70},
    'Diabetes': {average: 60, low: 53, high: 66},
    'Cardiovascular Disease': {average: 56, low: 49, high: 62},
    'COPD': {average: 53, low: 46, high: 58},
    'Hyperlipidemia': {average: 68, low: 61, high: 73},
    'Atrial Fibrillation': {average: 58, low: 51, high: 64},
    'Chronic Kidney Disease': {average: 50, low: 43, high: 56},
    'Sleep Apnea': {average: 55, low: 48, high: 61},
    '2 or more conditions': {average: 54, low: 47, high: 60},
    '3 or more conditions': {average: 50, low: 43, high: 55}
  },
  avgCost: {
    'No Chronic Condition': {average: 380, low: 320, high: 420},
    'Hypertension': {average: 410, low: 350, high: 460},
    'Diabetes': {average: 430, low: 370, high: 480},
    'Cardiovascular Disease': {average: 450, low: 390, high: 500},
    'COPD': {average: 460, low: 400, high: 520},
    'Hyperlipidemia': {average: 400, low: 340, high: 450},
    'Atrial Fibrillation': {average: 440, low: 380, high: 490},
    'Chronic Kidney Disease': {average: 470, low: 410, high: 530},
    'Sleep Apnea': {average: 450, low: 390, high: 510},
    '2 or more conditions': {average: 480, low: 420, high: 540},
    '3 or more conditions': {average: 510, low: 450, high: 570}
  },
  dentalScore: {
    'No Chronic Condition': {average: 7.5, low: 6.8, high: 8.1},
    'Hypertension': {average: 6.7, low: 6.0, high: 7.3},
    'Diabetes': {average: 6.2, low: 5.5, high: 6.8},
    'Cardiovascular Disease': {average: 5.8, low: 5.1, high: 6.4},
    'COPD': {average: 5.4, low: 4.7, high: 6.0},
    'Hyperlipidemia': {average: 6.9, low: 6.2, high: 7.5},
    'Atrial Fibrillation': {average: 6.0, low: 5.3, high: 6.6},
    'Chronic Kidney Disease': {average: 5.1, low: 4.4, high: 5.7},
    'Sleep Apnea': {average: 5.7, low: 5.0, high: 6.3},
    '2 or more conditions': {average: 5.3, low: 4.6, high: 5.9},
    '3 or more conditions': {average: 4.8, low: 4.1, high: 5.4}
  },
  combinedScore: {
    'No Chronic Condition': {average: 8.0, low: 7.3, high: 8.6},
    'Hypertension': {average: 6.4, low: 5.7, high: 7.0},
    'Diabetes': {average: 5.8, low: 5.1, high: 6.4},
    'Cardiovascular Disease': {average: 5.3, low: 4.6, high: 5.9},
    'COPD': {average: 4.9, low: 4.2, high: 5.5},
    'Hyperlipidemia': {average: 6.7, low: 6.0, high: 7.3},
    'Atrial Fibrillation': {average: 5.6, low: 4.9, high: 6.2},
    'Chronic Kidney Disease': {average: 4.6, low: 3.9, high: 5.2},
    'Sleep Apnea': {average: 5.4, low: 4.7, high: 6.0},
    '2 or more conditions': {average: 4.8, low: 4.1, high: 5.4},
    '3 or more conditions': {average: 4.2, low: 3.5, high: 4.8}
  }
};

// Enhanced condition data with additional metrics
const conditionMatrixData = [
  { 
    name: 'No Chronic Condition', 
    dentistUtilization: { Medicare: 78, Commercial: 80, Individual: 74, Medicaid: 76 },
    avgCost: { Medicare: 356, Commercial: 412, Individual: 389, Medicaid: 327 },
    dentalScore: { Medicare: 7.4, Commercial: 7.8, Individual: 7.2, Medicaid: 7.1 },
    combinedScore: { Medicare: 8.1, Commercial: 8.4, Individual: 7.8, Medicaid: 7.5 }
  },
  { 
    name: 'Hypertension', 
    dentistUtilization: { Medicare: 72, Commercial: 70, Individual: 65, Medicaid: 67 },
    avgCost: { Medicare: 389, Commercial: 428, Individual: 402, Medicaid: 342 },
    dentalScore: { Medicare: 6.8, Commercial: 7.1, Individual: 6.5, Medicaid: 6.4 },
    combinedScore: { Medicare: 6.5, Commercial: 6.9, Individual: 6.2, Medicaid: 6.1 }
  },
  { 
    name: 'Diabetes', 
    dentistUtilization: { Medicare: 68, Commercial: 67, Individual: 62, Medicaid: 64 },
    avgCost: { Medicare: 412, Commercial: 447, Individual: 418, Medicaid: 365 },
    dentalScore: { Medicare: 6.3, Commercial: 6.7, Individual: 6.0, Medicaid: 5.9 },
    combinedScore: { Medicare: 5.9, Commercial: 6.3, Individual: 5.7, Medicaid: 5.6 }
  },
  { 
    name: 'Cardiovascular Disease', 
    dentistUtilization: { Medicare: 65, Commercial: 64, Individual: 59, Medicaid: 61 },
    avgCost: { Medicare: 436, Commercial: 468, Individual: 431, Medicaid: 378 },
    dentalScore: { Medicare: 5.9, Commercial: 6.2, Individual: 5.6, Medicaid: 5.5 },
    combinedScore: { Medicare: 5.4, Commercial: 5.8, Individual: 5.2, Medicaid: 5.1 }
  },
  { 
    name: 'COPD', 
    dentistUtilization: { Medicare: 62, Commercial: 60, Individual: 55, Medicaid: 57 },
    avgCost: { Medicare: 448, Commercial: 482, Individual: 445, Medicaid: 392 },
    dentalScore: { Medicare: 5.5, Commercial: 5.9, Individual: 5.2, Medicaid: 5.1 },
    combinedScore: { Medicare: 5.0, Commercial: 5.3, Individual: 4.8, Medicaid: 4.7 }
  },
  { 
    name: 'Hyperlipidemia', 
    dentistUtilization: { Medicare: 74, Commercial: 72, Individual: 67, Medicaid: 69 },
    avgCost: { Medicare: 375, Commercial: 422, Individual: 398, Medicaid: 345 },
    dentalScore: { Medicare: 7.0, Commercial: 7.3, Individual: 6.7, Medicaid: 6.6 },
    combinedScore: { Medicare: 6.8, Commercial: 7.1, Individual: 6.5, Medicaid: 6.4 }
  },
  { 
    name: 'Atrial Fibrillation', 
    dentistUtilization: { Medicare: 66, Commercial: 66, Individual: 61, Medicaid: 63 },
    avgCost: { Medicare: 428, Commercial: 458, Individual: 424, Medicaid: 372 },
    dentalScore: { Medicare: 6.1, Commercial: 6.5, Individual: 5.8, Medicaid: 5.7 },
    combinedScore: { Medicare: 5.7, Commercial: 6.0, Individual: 5.4, Medicaid: 5.3 }
  },
  { 
    name: 'Chronic Kidney Disease', 
    dentistUtilization: { Medicare: 60, Commercial: 58, Individual: 53, Medicaid: 55 },
    avgCost: { Medicare: 465, Commercial: 493, Individual: 452, Medicaid: 398 },
    dentalScore: { Medicare: 5.2, Commercial: 5.6, Individual: 4.9, Medicaid: 4.8 },
    combinedScore: { Medicare: 4.7, Commercial: 5.1, Individual: 4.5, Medicaid: 4.4 }
  },
  { 
    name: 'Sleep Apnea', 
    dentistUtilization: { Medicare: 63, Commercial: 65, Individual: 58, Medicaid: 60 },
    avgCost: { Medicare: 442, Commercial: 472, Individual: 438, Medicaid: 385 },
    dentalScore: { Medicare: 5.8, Commercial: 6.1, Individual: 5.5, Medicaid: 5.4 },
    combinedScore: { Medicare: 5.5, Commercial: 5.9, Individual: 5.3, Medicaid: 5.2 }
  },
  { 
    name: '2 or more conditions', 
    dentistUtilization: { Medicare: 60, Commercial: 62, Individual: 56, Medicaid: 58 },
    avgCost: { Medicare: 475, Commercial: 498, Individual: 460, Medicaid: 405 },
    dentalScore: { Medicare: 5.4, Commercial: 5.7, Individual: 5.1, Medicaid: 5.0 },
    combinedScore: { Medicare: 4.9, Commercial: 5.2, Individual: 4.7, Medicaid: 4.6 }
  },
  { 
    name: '3 or more conditions', 
    dentistUtilization: { Medicare: 55, Commercial: 57, Individual: 52, Medicaid: 54 },
    avgCost: { Medicare: 512, Commercial: 535, Individual: 492, Medicaid: 438 },
    dentalScore: { Medicare: 4.9, Commercial: 5.2, Individual: 4.6, Medicaid: 4.5 },
    combinedScore: { Medicare: 4.3, Commercial: 4.7, Individual: 4.1, Medicaid: 4.0 }
  },
];

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

// Compact range bar visualization
function RangeBarChart({ condition, metricType, selectedPlan }) {
  const generalMetrics = generalPopulationMetrics[metricType][condition];
  const clientValue = conditionMatrixData.find(c => c.name === condition)[metricType][selectedPlan];
  
  // Determine if client value is better than average
  const isBetter = metricType === 'avgCost' ? 
    clientValue < generalMetrics.average : 
    clientValue > generalMetrics.average;
  
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
        <span className={`text-xs font-semibold ${isBetter ? 'text-green-600' : 'text-yellow-600'}`}>
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
          className={`absolute top-0 w-0.5 h-6 ${isBetter ? 'bg-green-500' : 'bg-yellow-500'}`} 
          style={{ left: `${calculatePosition()}%` }}
        ></div>
        <div 
          className={`absolute -top-1 w-2 h-2 rounded-full ${isBetter ? 'bg-green-500' : 'bg-yellow-500'}`}
          style={{ left: `calc(${calculatePosition()}% - 3px)` }}
        ></div>
      </div>
    </div>
  );
}

function ConditionMatrixTable() {
  // State to track which plan type is selected
  const [selectedPlan, setSelectedPlan] = React.useState('Medicare');
  
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
        <p><span className="font-semibold">Chart Legend:</span> The bars show general population ranges (low to high) with the client population value indicated by the colored marker. Green markers indicate better than average performance.</p>
      </div>
    </div>
  );
}

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

function UtilizationDashboard() {
  const [activeTab, setActiveTab] = React.useState('overview');
  
  // Format current date as Month DD, YYYY
  const formatCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <header className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">DigiBite</h1>
            <p className="text-gray-600">Insights Report</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-semibold">Report Date: {formatCurrentDate()}</p>
            <p className="text-gray-600">Data Period: 2022-2025</p>
          </div>
        </div>
      </header>
      
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800">Dental Utilization (Last Year)</h3>
            <p className="text-3xl font-bold mt-2">72%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800">Members with Chronic Conditions</h3>
            <p className="text-3xl font-bold mt-2">8,438</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800">Utilization Growth (3-Year)</h3>
            <p className="text-3xl font-bold mt-2">+20%</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Population Insights Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Population Overview</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Total Members:</span>
                <span>{totalPopulation.totalMembers.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Members Utilizing Dental Services:</span>
                <span>{totalPopulation.utilizingMembers.toLocaleString()} ({Math.round(totalPopulation.utilizingMembers/totalPopulation.totalMembers*100)}%)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Utilization Timeline</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Last Year:</span>
                <span>{totalPopulation.lastYear.count.toLocaleString()} ({totalPopulation.lastYear.percentage}%)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Last 2 Years:</span>
                <span>{totalPopulation.lastTwoYears.count.toLocaleString()} ({totalPopulation.lastTwoYears.percentage}%)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Last 3 Years:</span>
                <span>{totalPopulation.lastThreeYears.count.toLocaleString()} ({totalPopulation.lastThreeYears.percentage}%)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <PopulationDonutChart />
          <UtilizationBarChart />
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">AI-Detected Health Risk Indicators</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <HealthRiskDonutChart 
            data={cacData} 
            title="Carotid Artery Calcification (CAC)" 
            description="Members with dental x-ray detected calcification" 
          />
          <HealthRiskDonutChart 
            data={sleepApneaData} 
            title="Sleep Apnea Risk" 
            description="Members with dental x-ray detected indicators for sleep apnea" 
          />
        </div>
        
        <ConditionMatrixTable />
      </div>
      
      <nav className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <ul className="flex flex-wrap">
          <li className="mr-2">
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('overview')}
            >
              All Populations
            </button>
          </li>
          <li className="mr-2">
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'medicare' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('medicare')}
            >
              Medicare
            </button>
          </li>
          <li className="mr-2">
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'commercial' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('commercial')}
            >
              Commercial
            </button>
          </li>
          <li className="mr-2">
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'individual' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('individual')}
            >
              Individual
            </button>
          </li>
          <li>
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'embedded' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('embedded')}
            >
              Medicaid
            </button>
          </li>
        </ul>
      </nav>
      
      {activeTab === 'overview' && <SummaryTable population={totalPopulation} title="All Populations - Detailed Utilization" />}
      {activeTab === 'medicare' && <SummaryTable population={medicarePopulation} title="Medicare Population - Detailed Utilization" />}
      {activeTab === 'commercial' && <SummaryTable population={commercialPopulation} title="Commercial Population - Detailed Utilization" />}
      {activeTab === 'individual' && <SummaryTable population={individualPopulation} title="Individual Population - Detailed Utilization" />}
      {activeTab === 'embedded' && <SummaryTable population={medicaidPopulation} title="Medicaid Population - Detailed Utilization" />}
      
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>DigiBite 2.0 Analytics Platform | Data as of {formatCurrentDate()}</p>
        <p className="mt-1">This report is for demonstration purposes only.</p>
      </footer>
    </div>
  );
}

export default UtilizationDashboard;