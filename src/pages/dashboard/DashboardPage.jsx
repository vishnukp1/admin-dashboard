<<<<<<< HEAD
import { statsData } from '../../data/sampleData';
import DocumentsExpiryDetails from './components/DocumentsExpiryDetails';
import ExpiryGraph from './components/ExpiryGraph';
import ExpiringListTable from './components/ExpiringListTable';
import CountCard from './components/CountCard';

const DashboardPage = () => {
   return (
      <div className="flex flex-col gap-8 pb-10 w-[22.3rem] mr-0 sm:w-auto lg:mr-16">


         <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-8">
            <div className="w-full">
               <ExpiryGraph />
            </div>
            <div className="w-full">
               <ExpiringListTable />
            </div>
         </div>


         <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-8 items-start">

            <div className="w-full">
               <DocumentsExpiryDetails />
            </div>


            <div className="grid grid-cols-4 gap-6 w-full h-full">
               {statsData.map((stat) => (
                  <CountCard
                     key={stat.id}
                     title={stat.title}
                     count={stat.count}
                     icon={stat.icon}
                     iconBg={stat.iconBg}
                  />
               ))}
            </div>

         </div>
      </div>
   );
};

=======
import { statsData } from '../../data/sampleData';
import DocumentsExpiryDetails from './components/DocumentsExpiryDetails';
import ExpiryGraph from './components/ExpiryGraph';
import ExpiringListTable from './components/ExpiringListTable';
import CountCard from './components/CountCard';

const DashboardPage = () => {
   return (
      <div className="flex flex-col gap-8 pb-10 w-[22.3rem] mr-0 sm:w-auto lg:mr-16">


         <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-8">
            <div className="w-full">
               <ExpiryGraph />
            </div>
            <div className="w-full">
               <ExpiringListTable />
            </div>
         </div>


         <div className="grid grid-cols-1 2xl:grid-cols-[1fr_2fr] gap-8 items-start">

            <div className="w-full">
               <DocumentsExpiryDetails />
            </div>


            <div className="grid grid-cols-4 gap-6 w-full h-full">
               {statsData.map((stat) => (
                  <CountCard
                     key={stat.id}
                     title={stat.title}
                     count={stat.count}
                     icon={stat.icon}
                     iconBg={stat.iconBg}
                  />
               ))}
            </div>

         </div>
      </div>
   );
};

>>>>>>> e2afade72e57f13aea4d45b33c0e992989d3eb67
export default DashboardPage;