
import { ASSETMNGMT, ASSETS, BUSINESS, FOLDERS, HOME, LINECHART, MONEYFLOW, OFFICER, PROFILE } from '../assets';


// 1. Sidebar Menu Data
export const sidebarLinks = [
  { id: 1, icon: HOME, label: 'Dashboard', active: true },
  { id: 2, icon: BUSINESS, label: 'Company', active: false },
  { id: 3, icon: PROFILE, label: 'Profile', active: false },
  { id: 4, icon: ASSETS, label: 'Documents', active: false },
  { id: 5, icon: MONEYFLOW, label: 'Reports', active: false },
  { id: 6, icon: LINECHART, label: 'Analytics', active: false },
];

// 2. Chart Data for "Documents Expiring" graph
export const chartData = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 25 },
  { name: 'Mar', value: 18 },
  { name: 'Apr', value: 20 },
  { name: 'May', value: 15 },
  { name: 'Jun', value: 45 },
  { name: 'Jul', value: 12 },
  { name: 'Aug', value: 25 },
  { name: 'Sep', value: 8 },
  { name: 'Oct', value: 20 },
  { name: 'Nov', value: 12 },
  { name: 'Dec', value: 18 },
];

// 3. Stats Cards Data
export const statsData = [
  {
    id: 1,
    title: 'Total Employees',
    count: 3,
    icon: OFFICER,
    iconBg: 'bg-orange-400'
  },
  {
    id: 2,
    title: 'Total Employees',
    count: 5,
    icon: ASSETMNGMT,
    iconBg: 'bg-yellow-400'
  },
  {
    id: 3,
    title: 'Total Employees',
    count: 0,
    icon: FOLDERS,
    iconBg: 'bg-pink-400'
  },
  {
    id: 4,
    title: 'Total Employees',
    count: 0,
    icon: FOLDERS,
    iconBg: 'bg-pink-400'
  },
];