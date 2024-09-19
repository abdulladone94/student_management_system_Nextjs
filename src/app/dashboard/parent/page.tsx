import { Announcements } from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';

const TeacherPage = () => {
  return (
    <div className="p-4 gap-4 flex flex-col xl:flex-row flex-1">
      {/* left */}
      <div className="w-full xl:w-2/3 ">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Schedule (John Bob)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
