import LayoutDashboard from "../../../layouts/LayoutDashboard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavDs from "../../components/NavDs";
import axios from "axios";
const ListPet = () => {
  const [animal, setAnimal] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/animal");
    setAnimal(response.data);
  };

  const deleteAnimal = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/animal/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this animal?")) {
      deleteAnimal(id);
    }
  };

  return (
    <LayoutDashboard>
      <NavDs />
      <>
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <Link to={`/dashboard/pet/add`} className="mb-4 btn btn-success">
            Add Pet
          </Link>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">#</th>
                  <th className="p-3">Image</th>
                  <th className="p-3">Nama</th>
                  <th className="p-3">Color</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">Sex</th>
                  <th className="p-3">Breed</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Updated</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {animal.map((row, index) => (
                  <>
                    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                      <td className="p-3">
                        <p>{index + 1}</p>
                      </td>
                      <td className="p-3">
                        <div className=" items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={row.url} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </td>
                      <td className="p-3">
                        <p>{row.name}</p>
                      </td>
                      <td className="p-3">
                        <p>{row.color}</p>
                      </td>
                      <td className="p-3">
                        <p>{row.age}</p>
                      </td>
                      <td className="p-3">
                        <p>{row.sex}</p>
                      </td>
                      <td className="p-3 ">
                        <p>{row.breed}</p>
                      </td>
                      <td className="p-3 ">
                        <span className="px-3 py-1 font-semibold rounded-md bg-yellow-600 text-gray-50">
                          <span>{row.status_adoption}</span>
                        </span>
                      </td>
                      <td className="p-3 ">
                        <p>{row.updatedAt.split("T")[0]}</p>
                      </td>
                      <td className="p-3">
                        <Link to={`/dashboard/pet/edit/${row.id}`} className="btn btn-xs btn-info mr-2">
                          Edit
                        </Link>
                        <button onClick={() => handleDeleteClick(row.id)} className="btn btn-xs btn-primary">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </LayoutDashboard>
  );
};
export default ListPet;
