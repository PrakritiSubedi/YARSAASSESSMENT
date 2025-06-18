import React from 'react'; 
const statsData = [ 
{ 
label: 'Active Users', 
value: 24, 
change: '+12%', 
changeColor: 'text-green-600', 
}, 
{ 
label: 'Total Logins', 
value: 156, 
change: '+8%', 
changeColor: 'text-blue-600', 
}, 
{ 
label: 'WiFi Connections', 
value: 89, 
change: '+15%', 
changeColor: 'text-purple-600', 
}, 
{ 
label: 'Failed Attempts', 
value: 7, 
change: '-23%', 
changeColor: 'text-red-600', 
}, 
]; 
const recentActivities = [ 
{ 
id: 1, 
initials: 'JD', 
name: 'John Doe', 
ip: '192.168.1.45', 
icon: 'login', 
action: 'Login', 
status: 'Success', 
statusColor: 'bg-green-100 text-green-700', 
time: '10:30 AM', 
}, 
{ 
id: 2, 
initials: 'JS', 
name: 'Jane Smith', 
ip: '192.168.1.46', 
icon: 'wifi', 
action: 'WiFi Connect', 
status: 'Success', 
statusColor: 'bg-green-100 text-green-700', 
time: '10:25 AM', 
}, 
{ 
id: 3, 
initials: 'MJ', 
name: 'Mike Johnson', 
ip: '192.168.1.47', 
icon: 'login', 
action: 'Login', 
status: 'Success', 
statusColor: 'bg-green-100 text-green-700', 
time: '10:20 AM', 
}, 
]; 
function AdminDashboard() { 
return ( 
<div className="min-h-screen bg-white flex flex-col max-w-md mx-auto rounded-2xl 
shadow-lg overflow-hidden"> 
{/* Header */} 
<header className="bg-red-600 p-5 rounded-t-2xl text-white flex items-center gap-3"> 
<button aria-label="Go back" className="material-icons cursor-pointer select-none 
text-2xl"> 
arrow_back 
</button> 
<div> 
<h1 className="font-semibold text-lg">Admin Dashboard</h1> 
<p className="text-sm opacity-80">User Activity Overview</p> 
</div> 
</header> 
{/* Stats cards */} 
<section className="p-5 grid grid-cols-2 gap-4"> 
{statsData.map(({ label, value, change, changeColor }) => ( 
<div key={label} className="border rounded-lg p-4 flex flex-col gap-2"> 
<span className="text-xs text-gray-500 uppercase">{label}</span> 
<div className="flex items-center justify-between"> 
<strong className="text-2xl">{value}</strong> 
<span className={`text-sm font-medium ${changeColor}`}>{change}</span> 
</div> 
</div> 
))} 
</section> 
{/* Recent Activity */} 
<section className="px-5 pb-6 flex flex-col gap-4 flex-grow overflow-y-auto"> 
<div className="flex items-center justify-between mb-2"> 
<h2 className="font-semibold text-lg text-gray-900">Recent Activity</h2> 
<div className="flex gap-3 text-gray-700"> 
<button 
aria-label="Filter activity" 
className="material-icons cursor-pointer select-none text-xl hover:text-red-600 transition" 
type="button" 
> 
filter_list 
</button> 
<button 
aria-label="Export activity" 
className="material-icons cursor-pointer select-none text-xl hover:text-red-600 transition" 
type="button" 
> 
download 
</button> 
</div> 
</div> 
{/* Activity cards */} 
{recentActivities.map(({ id, initials, name, ip, icon, action, status, statusColor, time }) => ( 
<div 
key={id} 
className="border rounded-lg p-4 flex items-center justify-between gap-4 shadow-sm" 
> 
<div className="flex items-center gap-4 flex-1 min-w-0"> 
{/* User initials circle */} 
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 
text-gray-700 font-semibold select-none"> 
{initials} 
</div> 
<div className="flex flex-col min-w-0 overflow-hidden"> 
<strong className="truncate">{name}</strong> 
<span className="text-xs text-gray-500 truncate">{ip}</span> 
<div className="flex items-center gap-1 mt-1 opacity-70"> 
<span 
className="material-icons text-sm select-none" 
title={action} 
aria-hidden="true" 
> 
{icon} 
</span> 
<span className="text-xs truncate">{action}</span> 
</div> 
</div> 
</div> 
<div className="flex flex-col items-end min-w-max"> 
<span 
className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor} select-none`} 
aria-label={`${status} status`} 
> 
{status} 
</span> 
<time className="text-xs text-gray-400 mt-1">{time}</time> 
</div> 
</div> 
))} 
</section> 
</div> 
); 
} 
export default AdminDashboard; 