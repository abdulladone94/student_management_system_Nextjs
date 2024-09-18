import { Announcements } from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import Image from 'next/image';
import Link from 'next/link';

const SingleTeacherPage = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 p-4 flex-1">
      {/* left */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user card */}
          <div className="bg-zozySky rounded-md py-6 px-4 gap-4 flex flex-1">
            <div className="w-1/3">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s"
                alt="proPic"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">John Bob</h1>
              <p className="text-sm text-gray-500">
                I'm dedicated individual who helps students learn and grow.
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="blood" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="date" width={14} height={14} />
                  <span>December 2024</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="mail" width={14} height={14} />
                  <span>john@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="phone" width={14} height={14} />
                  <span>+94 771231231</span>
                </div>
              </div>
            </div>
          </div>
          {/* small cards */}
          <div className="flex-1 flex justify-between flex-wrap gap-4">
            {/* card */}
            <div className="p-4 bg-white w-full md:w-[48%] xl:w-[47%] 2xl:w-[48%] gap-4 flex rounded-md">
              <Image
                src="/singleAttendance.png"
                alt="attendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* card */}
            <div className="p-4 bg-white w-full md:w-[48%] xl:w-[47%] 2xl:w-[48%] gap-4 flex rounded-md">
              <Image
                src="/singleBranch.png"
                alt="attendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* card */}
            <div className="p-4 bg-white w-full md:w-[48%] xl:w-[47%] 2xl:w-[48%] gap-4 flex rounded-md">
              <Image
                src="/singleLesson.png"
                alt="attendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* card */}
            <div className="p-4 bg-white w-full md:w-[48%] xl:w-[47%] 2xl:w-[48%] gap-4 flex rounded-md">
              <Image
                src="/singleClass.png"
                alt="attendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">5</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex flex-wrap text-xs gap-4 text-gray-500">
            <Link href="/" className="p-3 rounded-md bg-zozySkyLight">
              Teacher&apos;s Classes
            </Link>
            <Link href="/" className="p-3 rounded-md bg-zozyPurpleLight">
              Teacher&apos;s Students
            </Link>
            <Link href="/" className="p-3 rounded-md bg-ZozyYellowLight">
              Teacher&apos;s Lessons
            </Link>
            <Link href="/" className="p-3 rounded-md bg-pink-50">
              Teacher&apos;s Exams
            </Link>
            <Link href="/" className="p-3 rounded-md bg-zozySkyLight">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
