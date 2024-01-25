import { useEffect, useState } from "react";
import LayoutDashboard from "../../../layouts/LayoutDashboard";
import NavDs from "../../components/NavDs";
const Home = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    const storedUserName = sessionStorage.getItem("name");
    const storedUserEmail = sessionStorage.getItem("email");
    setName(storedUserName);
    setEmail(storedUserEmail);
    if (!storedUserName) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <LayoutDashboard>
      <NavDs />
      <section className="bg-gray-100 text-gray-800">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">Dashboard Adoption Pet Simples</h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            <p>
              <b>{name}</b>
            </p>
            <h4 className="badge badge-primary">{email}</h4>
          </p>
          <div className="flex flex-wrap justify-center">
            <a href="/dashboard/pet" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-yellow-600 text-gray-50">
              Jelajahi
            </a>
          </div>
        </div>
      </section>
    </LayoutDashboard>
  );
};
export default Home;
