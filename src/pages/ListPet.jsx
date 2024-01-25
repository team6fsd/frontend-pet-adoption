import { useEffect, useState } from "react";
import LayoutLanding from "../../layouts/LayoutLanding";
import axios from "axios";
import { Link } from "react-router-dom";

const ListPet = () => {
  const [animal, setAnimal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/animal");
    setAnimal(response.data);
  };
  const filteredAnimal = animal.filter((row) => row.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <LayoutLanding>
      <>
        <section className="py-6 bg-gray-100">
          <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 bg-gray-100 text-yellow-400">
              <div className="flex-shrink-0 m-auto w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                <img src="https://i.ibb.co/BNGc0Yv/image-removebg-preview-8.png" alt="" className="object-cover object-center w-full h-full rounded " />
              </div>
              <div className="space-y-6 text-center">
                <h1 className="text-3xl font-bold md:tracki md:text-5xl">There are many cat and dog species that you can adopt.</h1>
              </div>
            </article>
            <div>
              <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600"></div>
            </div>
          </div>
          <div className="container flex flex-col justify-center p-4 mx-auto">
            <form className="lg:w-3/12 mb-5">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Animal"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  required
                />
              </div>
            </form>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
              {filteredAnimal.map((row, index) => (
                <>
                  <Link to={`/pet/detail/${row.id}`}>
                    <div key={index} className="card bg-base-100 shadow-xl">
                      <figure className="p-3 aspect-video overflow-hidden ">
                        <img src={row.url} alt="Shoes" className="rounded-lg  " />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">
                          {row.name}
                          <div className=" btn btn-success btn-xs">{row.age} year</div>
                        </h2>
                        <p>{row.description.slice(0, 50)}...</p>
                        <div className="card-actions">
                          <div className="badge badge-outline">{row.sex}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </section>
      </>
    </LayoutLanding>
  );
};
export default ListPet;
