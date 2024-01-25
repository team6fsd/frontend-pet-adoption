import { useState, useEffect } from "react";
import LayoutLanding from "../../layouts/LayoutLanding";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailPet = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adoptionStatus, setAdoptionStatus] = useState(null);
  const storedUserName = sessionStorage.getItem("user");
  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/animal/${id}`);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUserById();
  }, [id]);

  const Adobt = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/animal/${id}`);

      if (response.data.status === "proses") {
        alert("Animal adoption is already in process. Cannot adopt again.");
        return;
      }

      if (!storedUserName) {
        window.location.href = "/login";
      }

      const storedUserEmail = sessionStorage.getItem("email");
      const adoptionResponse = await axios.patch(`http://localhost:5000/animal/proses/${id}`, {
        userEmail: storedUserEmail,
      });

      setAdoptionStatus(adoptionResponse.data.message);
      setData(adoptionResponse.data.updatedAnimal);

      if (adoptionResponse.status === 200) {
        alert("Berhasil diadopsi sedang diproses..!");
        window.location.href = "/user";
      }

      if (adoptionResponse.status === 404) {
        window.location.href = "/";
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

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
      <section className="p-4 lg:p-8 bg-gray-100 text-gray-800">
        <div className="container mx-auto space-y-12">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <div role="alert" className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}.</span>
            </div>
          ) : (
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <div className="p-5 bg-gray-50">
                <img src={data.url} alt="" className="h-80 rounded-xl shadow-sm border-2 border-yellow-400 object-cover aspect-video" />
              </div>
              <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                <span className="text-xs uppercase text-gray-600">
                  About <i className="fa-solid fa-paw"></i>
                </span>
                <h3 className="text-3xl font-bold">{data.name}</h3>
                <p className="my-6 text-gray-600">{data.description}</p>
                <div className="space-y-2 mb-5">
                  <h4 className="text-lg font-semibold">More Information</h4>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li>
                      <a rel="noopener noreferrer" className="hover:underline">
                        {data.sex}
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" className="hover:underline">
                        {data.breed}
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" className="hover:underline">
                        {data.age} year
                      </a>
                    </li>
                  </ul>
                </div>
                <form onSubmit={Adobt}>
                  <button type="submit" className="btn btn-sm btn-primary">
                    Adopt Me <i className="fa-solid fa-paw"></i>
                  </button>
                </form>
                {adoptionStatus && <p>Status: {adoptionStatus}</p>}
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="py-6 bg-gray-100">
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
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  <div key={index} className="card overflow-hidden bg-base-100 shadow-xl">
                    <figure className="p-3 aspect-video overflow-hidden">
                      <img src={row.url} alt="Shoes" className="rounded-lg" />
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
    </LayoutLanding>
  );
};

export default DetailPet;
