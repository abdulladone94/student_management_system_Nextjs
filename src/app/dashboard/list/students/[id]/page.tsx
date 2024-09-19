import { Announcements } from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import Performance from '@/components/Performance';
import Image from 'next/image';
import Link from 'next/link';

const SingleStudentPage = () => {
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRFgM8MLoagyyy3OdqgE6Ok2xz-2WbtsgmSw&s"
                alt="proPic"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">William Smith</h1>
              <p className="text-sm text-gray-500">
                I'm dedicated passionate individual who master in Chemistry.
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="blood" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="date" width={14} height={14} />
                  <span>January 2024</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="mail" width={14} height={14} />
                  <span>smith@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="phone" width={14} height={14} />
                  <span>+94 776786786</span>
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
                <h1 className="text-xl font-semibold">80%</h1>
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
                <h1 className="text-xl font-semibold">4th</h1>
                <span className="text-sm text-gray-400">Grade</span>
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
                <h1 className="text-xl font-semibold">12</h1>
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
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex flex-wrap text-xs gap-4 text-gray-500">
            <Link href="/" className="p-3 rounded-md bg-zozySkyLight">
              Student&apos;s Lessons
            </Link>
            <Link href="/" className="p-3 rounded-md bg-zozyPurpleLight">
              Student&apos;s Teachers
            </Link>
            <Link href="/" className="p-3 rounded-md bg-ZozyYellowLight">
              Student&apos;s Result
            </Link>
            <Link href="/" className="p-3 rounded-md bg-pink-50">
              Student&apos;s Exams
            </Link>
            <Link href="/" className="p-3 rounded-md bg-zozySkyLight">
              Student&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
