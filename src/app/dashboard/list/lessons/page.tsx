import FormModal from '@/components/FormModal';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import { classesData, lessonsData, role } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: 'Subject Name',
    accessor: 'subject',
  },
  {
    header: 'Class',
    accessor: 'class',
  },
  {
    header: 'Teacher',
    accessor: 'teacher',
    className: 'hidden md:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

const LessonListPage = () => {
  const renderRow = (item: lesson) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 hover:bg-zozyPurpleLight text-sm"
    >
      <td className="flex items-start gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === 'admin' && (
            <>
              <FormModal table="lesson" type="update" data={item} />
              <FormModal table="lesson" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center bg-zozyYellow rounded-full">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-zozyYellow rounded-full">
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            {role === 'admin' && <FormModal table="lesson" type="create" />}
          </div>
        </div>
      </div>
      {/* teacher list */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default LessonListPage;
