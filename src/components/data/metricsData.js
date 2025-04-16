// General population metrics data for comparison
export const generalPopulationMetrics = {
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
export const conditionMatrixData = [
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