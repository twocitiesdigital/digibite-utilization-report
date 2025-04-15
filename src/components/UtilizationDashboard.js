import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, 
  LineChart, Line,
  ComposedChart, Area
} from 'recharts';

// Sample data - these would be replaced with real data in production
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

const conditionDataByYear = [
  { name: 'No Chronic Condition', Medicare: 78, Commercial: 80, Individual: 74, Medicaid: 76 },
  { name: 'Hypertension', Medicare: 72, Commercial: 70, Individual: 65, Medicaid: 67 },
  { name: 'Diabetes', Medicare: 68, Commercial: 67, Individual: 62, Medicaid: 64 },
  { name: 'CVD', Medicare: 65, Commercial: 64, Individual: 59, Medicaid: 61 },
  { name: 'COPD', Medicare: 62, Commercial: 60, Individual: 55, Medicaid: 57 },
  { name: 'Hyperlipidemia', Medicare: 74, Commercial: 72, Individual: 67, Medicaid: 69 },
  { name: 'Atrial Fibrillation', Medicare: 66, Commercial: 66, Individual: 61, Medicaid: 63 },
  { name: 'CKD', Medicare: 60, Commercial: 58, Individual: 53, Medicaid: 55 },
  { name: 'Sleep Apnea', Medicare: 63, Commercial: 65, Individual: 58, Medicaid: 60 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c', '#d0ed57', '#83a6ed'];

function PopulationDonutChart() {
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-center mb-4">Member Population Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={populationGroups}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={2}
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

function ChronicConditionBarChart() {
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-center mb-4">Condition-Specific Utilization - Last Year (%)</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={conditionDataByYear}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" width={120} />
          <Tooltip formatter={(value) => [`${value}%`, 'Utilization']} />
          <Legend />
          <Bar dataKey="Medicare" fill="#8884d8" />
          <Bar dataKey="Commercial" fill="#82ca9d" />
          <Bar dataKey="Individual" fill="#ffc658" />
          <Bar dataKey="Medicaid" fill="#ff8042" />
        </BarChart>
      </ResponsiveContainer>
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
  
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <header className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">DigiBite 2.0</h1>
            <p className="text-gray-600">Dental Utilization Insights Report</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-semibold">Report Date: April 10, 2025</p>
            <p className="text-gray-600">Data Period: 2022-2025</p>
          </div>
        </div>
      </header>
      
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800">Total Members</h3>
            <p className="text-3xl font-bold mt-2">12,458</p>
          </div>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <PopulationDonutChart />
          <UtilizationBarChart />
        </div>
        
        <ChronicConditionBarChart />
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
        <p>DigiBite 2.0 Analytics Platform | Data as of April 2025</p>
        <p className="mt-1">This report is for demonstration purposes only.</p>
      </footer>
    </div>
  );
}

export default UtilizationDashboard;