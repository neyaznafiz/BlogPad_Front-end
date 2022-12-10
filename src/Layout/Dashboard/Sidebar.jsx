import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {

    const activeClass = "text-secondary border-b px-1";

  const { pathname } = useLocation();

  return (
    <div className='col-span-2 bg-primary h-[calc(100vh-25px)] p-5 rounded-lg uppercase font-semibold shadow-2xl'>
      <ul className='flex gap-3  flex-col h-full'>
        <li className="bg-secondary p-2 rounded-full text-center tracking-wider mb-5">Admin Dashboard</li>
        <li>
          <Link to='/dashboard' className={`${
              pathname == "/dashboard" && activeClass
            } transition-all duration-200`}>Blog List</Link>
        </li>
        <li>
          <Link to='add-blog' className={`${
              pathname == "/dashboard/add-blog" && activeClass
            } transition-all duration-200`}> Add Blog </Link>
        </li>
        <li className='mt-auto'>
          <Link to='/' className="hover:text-secondary hover:border-b transition-all duration-200"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
