import LayoutLanding from "../../layouts/LayoutLanding";
import Hero from "../components/Hero";
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
const Home = () => {
const [animal, setAnimal] = useState([]);
useEffect(()=> {
getUsers();
}, []);

const getUsers = async () => {
const response = await axios.get('http://localhost:5000/animal');
setAnimal(response.data);
}
return (
<LayoutLanding>
    <div>
        <Hero />
        <section className="py-6 bg-yellow-500 text-gray-800 shadow-lg">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-bold tracki text-center uppercase">News Animal Rescue</p>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">

                    {animal.slice(0,6).map((row, index)=>(
                    <>
                        <div key={index}
                            className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-800 text-gray-100">
                            <img alt=""
                                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full"
                                src={row.url} />
                            <div className="flex-1 my-4">
                                <p className=" font-semibold leadi">{row.name}</p>
                                <p className="badge">{row.sex}</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2"></div>
                        </div>
                    </>
                    ))}
                </div>
            </div>
        </section>
    </div>
</LayoutLanding>
);
}
export default Home;
