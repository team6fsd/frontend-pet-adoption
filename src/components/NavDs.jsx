import {useEffect, useState} from 'react';
import axios from "axios";
const NavDs = () => {
  const logout = () => {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    window.location.href = '/';
  };

const [publishedPetsCount, setPublishedPetsCount] = useState(0);
const [prosesPetsCount, setProsesPetsCount] = useState(0);
const [approvedPetsCount, setApprovedPetsCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/animal');
        const publishedPetsCount = response.data.length;
        setPublishedPetsCount(publishedPetsCount);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/animal/proses');
        const ProsesPetsCount = response.data.length;
        setProsesPetsCount(ProsesPetsCount);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/animal/approve');
        const ApprovedPetsCount = response.data.length;
        setApprovedPetsCount(ApprovedPetsCount);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, []);

    return (
      <>
      <div className="w-full flex justify-center items-center mt-5 ">
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a href='/dashboard'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href='/dashboard/user'>
            <i className="fa-solid fa-user"></i>
                Users
            </a>
          </li>
          <li>
            <a href='/dashboard/pet'>
              <i className="fa-solid fa-paw"></i>
                Pet Publish
              <span className="badge badge-sm badge-warning">{publishedPetsCount}</span>
            </a>
          </li>
          <li>
            <a href='/dashboard/pet/proses'>
              <i className="fa-solid fa-paw"></i>
              Pet Proses
              <span className="badge badge-sm badge-warning">{prosesPetsCount}</span>
            </a>
          </li>
          <li>
            <a href='/dashboard/pet/approve'>
            <i className="fa-solid fa-paw"></i>
             Pet Approved
            <span className="badge badge-sm badge-warning">{approvedPetsCount}</span>
            </a>
          </li>
          <li>
            <a  onClick={logout} >
               <i className="fa-solid fa-right-from-bracket"></i>
               Logout
            </a>
          </li>
          <li>
            <a href='/'>
               Home
            <i className="fa-solid fa-arrow-right"></i>
            </a>
          </li>
        </ul>
        </div>
      </>
    );
  };
  
  export default NavDs;
  