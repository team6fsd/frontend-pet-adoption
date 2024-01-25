import LayoutDashboard from "../../../layouts/LayoutDashboard";
import {useEffect, useState} from 'react';
import axios from "axios";
import NavDs from "../../components/NavDs";

const ProsesPet = () => {
const [animal, setAnimal] = useState([]);
useEffect(()=> {
getUsers();
}, []);

const getUsers = async () => {
const response = await axios.get('http://localhost:5000/animal/proses');
setAnimal(response.data);
}

const approve = async (id) => {
try {
await axios.patch(`http://localhost:5000/animal/approve/${id}`);
getUsers();
} catch (error) {
console.error('Error approving animal:', error);
}
};

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

<NavDs/>
    <>
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3">#</th>
                            <th className="p-3">Image</th>
                            <th className="p-3">Pengadopsi</th> 
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
                        {animal.map((row, index)=>(
                        <>
                            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                <td className="p-3">
                                    <p>{index+1}</p>
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
                                    <p className="font-bold p-2">{row.pengadopsi}</p>
                                    <span className="text-xs badge badge-primary">{row.mails}</span>
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
                                <td className="p-3 flex">
                                    <form onSubmit={(e)=> {
                                        e.preventDefault();
                                        approve(row.id);
                                        }}>
                                        <button type="submit" className="btn btn-xs mr-2 btn-info">
                                            Approved
                                        </button>
                                    </form>
                                    <form onSubmit={(e)=> {
                                        e.preventDefault();
                                        publish(row.id);
                                        }}>
                                        <button type="submit" className="btn btn-xs btn-error">
                                            Unapproved
                                        </button>
                                    </form>
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
}
export default ProsesPet;
