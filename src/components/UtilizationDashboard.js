import React, { useState } from 'react';

// Import chart components
import HealthRiskDonutChart from './charts/HealthRiskDonutChart';
import PopulationDonutChart from './charts/PopulationDonutChart';
import UtilizationBarChart from './charts/UtilizationBarChart';
import ConditionMatrixTable from './charts/ConditionMatrixTable';
import SummaryTable from './charts/SummaryTable';

// Import data
import { 
  cacData, 
  sleepApneaData, 
  totalPopulation, 
  medicarePopulation, 
  commercialPopulation, 
  individualPopulation, 
  medicaidPopulation 
} from './data/populationData';

function UtilizationDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
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