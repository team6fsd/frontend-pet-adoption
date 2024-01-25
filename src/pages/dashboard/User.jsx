import LayoutDashboard from "../../../layouts/LayoutDashboard";
import { useEffect, useState } from "react";
import NavDs from "../../components/NavDs";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);

  console.log(users);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
    }
  };

  return (
    <LayoutDashboard>
      <NavDs />
      <>
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">#</th>
                  <th className="p-3">Nama</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((row, index) => (
                  <>
                    <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                      <td className="p-3">
                        <p>{index + 1}</p>
                      </td>

                      <td className="p-3">
                        <p>{row.name}</p>
                      </td>

                      <td className="p-3">
                        <p>{row.email}</p>
                      </td>

                      <td className="p-3">
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
export default Users;
