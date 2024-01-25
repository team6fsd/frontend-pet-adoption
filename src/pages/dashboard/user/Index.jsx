import { useEffect, useState } from "react";
import LayoutDashboard from "../../../../layouts/LayoutDashboard";
import NavUser from "../../../components/NavUser";
import axios from "axios";
const Home = () => {
    const [animal, setAnimal] = useState([]);
    const [emailUser, setUserEmail] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
  
  useEffect(() => {
    getUsers();
    getUsersEmail();

    const storedUserName = sessionStorage.getItem('user');
    const storedUserEmail = sessionStorage.getItem('email');
    setName(storedUserName);
    setEmail(storedUserEmail);

    if (!storedUserName) {
      window.location.href = '/login';
    }
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/animal_user');
      setAnimal(response.data);
    } catch (error) {
      console.error('Error fetching animal data:', error);
    }
  };

  const getUsersEmail = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      setUserEmail(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
 useEffect(() => {
     if (emailUser && emailUser.length > 0 && email) {
         const emailExists = emailUser.find(user => user.email === email);
      if (!emailExists) {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('email');
        window.location.href = '/login';
      }
    }
  }, [emailUser, email]);

  
const publish = async (id) => {
    try {
        await axios.patch(`http://localhost:5000/animal/publish/${id}`);
        getUsers();
    } catch (error) {
        console.error('Error approving animal:', error);
   }
};
  return (
    <LayoutDashboard>
      <NavUser />
      <section className="bg-gray-100 text-gray-800">
      <div className="">
        <div className="ml-20">
          <div className="max-w-md p-3">
            <h1 className="text-2xl font-bold">Hello {name} !!</h1>
            <a href="/pet" className="btn mt-4 btn-primary">adopt again</a>
          </div>
        </div>
      </div>
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
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
                            <th className="p-3">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                      {animal.map((row, index) => (
                          row.mails === email && (
                              <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50" key={index}>
                                  <td className="p-3">
                                      Ø
                                  </td>
                                  <td className="p-3">
                                      <div className=" items-center gap-3">
                                          <div className="avatar">
                                              <div className="mask mask-squircle w-12 h-12">
                                                  <img src={row.url}
                                                      alt="Avatar Tailwind CSS Component" />
                                              </div>
                                          </div>
                                          <div>
                                          </div>
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
                                  <td className="p-3">
                                      <span className={`px-3 py-1 font-semibold rounded-md ${row.status_adoption === 'proses' ? 'bg-red-600 text-white' : row.status_adoption === 'approve' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-gray-50'}`}>
                                          <span>{row.status_adoption}</span>
                                      </span>
                                  </td>
                                  <td className="p-3 ">
                                      <p>{row.updatedAt.split("T")[0]}</p>
                                  </td>
                                  <td className="p-3">
                                  <form onSubmit={(e)=> {
                                        e.preventDefault();
                                        publish(row.id);
                                        }}>
                                        <button type="submit" className="btn btn-xs btn-error">
                                            Hapus
                                        </button>
                                    </form>
                                </td>
                              </tr>
                          )
                      ))}
                  </tbody>
                </table>
            </div>
        </div>
      </section>
    </LayoutDashboard>
  );
};

export default Home;
