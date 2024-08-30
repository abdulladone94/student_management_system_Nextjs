import CountChart from '@/components/CountChart';
import UserCards from '@/components/UserCards';

const AdminPage = () => {
  return (
    <div className="p-4 gap-4 flex flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="student" />
          <UserCards type="teacher" />
          <UserCards type="parent" />
          <UserCards type="staff" />
        </div>
        {/* middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* bottom charts */}
        <div></div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
