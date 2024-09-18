import Image from 'next/image';

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
          {/* small card */}
          <div className="flex-1">small card</div>
        </div>
        {/* bottom */}
        <div>schedule</div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3">R</div>
    </div>
  );
};

export default SingleTeacherPage;
