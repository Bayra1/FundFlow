'use client'
import { useEffect } from 'react';
import { decode } from 'jsonwebtoken';
import toast, { Toaster } from 'react-hot-toast';
import { LastRecords, NavBar, TotalBarCharts, WholeCards } from '@/components';

export const Dashboard = () => {
  
    // const userToken = localStorage.getItem('token');
    // const user = decode(userToken!);

    // if (userToken) {
    //   toast.success(`Welcome back ${user?.name}`, {
    //     duration: 3000
    //   });
    // }
  

  return (
    <div className="w-full h-fit bg-[#F3F4F6] flex flex-col items-center">
      <NavBar />
      <WholeCards />
      <TotalBarCharts />
      <LastRecords />
      <Toaster position="top-center" />
    </div>
  );
};
