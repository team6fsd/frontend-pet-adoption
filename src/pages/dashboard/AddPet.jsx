import LayoutDashboard from "../../../layouts/LayoutDashboard";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavDs from "../../components/NavDs";
import { Link } from "react-router-dom";
const AddPet = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [status_adoption] = useState("publish");

  const ImageLoad = (e) => {
    const image = e.target.files[0];
    setFile(image)
    setPreview(URL.createObjectURL(image));
  }
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const AnimalSaveAdd = new FormData()
    AnimalSaveAdd.append("file", file);
    AnimalSaveAdd.append("name", name);
    AnimalSaveAdd.append("breed", breed);
    AnimalSaveAdd.append("sex", sex);
    AnimalSaveAdd.append("age", age);
    AnimalSaveAdd.append("color", color);
    AnimalSaveAdd.append("description", description);
    AnimalSaveAdd.append("status_adoption", status_adoption);
    try {
      await axios.post("http://localhost:5000/animal", AnimalSaveAdd, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      navigate("/dashboard/pet/");
    } catch (error) {
      console.error("Error submitting form:", error);
      console.log("Server Response:", error.response.data);
    }
  };

  return (
    <LayoutDashboard>
      <NavDs />
      <>
        <section className="p-6 bg-gray-100 text-gray-900">
          <form onSubmit={handleSubmit} className="container mx-auto space-y-8 max-w-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="file" className="text-sm block">
                  Image
                </label>
                <input type="file" onChange={ImageLoad}  className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
              </div>
              {preview ? (
                <figure className="border border-warning p-1 rounded">
                  <img className="rounded-lg" src={preview} alt="" />
                </figure>
              ): ''}
              <div className="mb-4">
                <label htmlFor="name" className="text-sm block">
                  Name
                </label>
                <input id="name" type="text" placeholder="Pet Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md p-2 border focus:outline-none focus:ring focus:border-blue-300" />
              </div>
              <div className="mb-4">
                <label htmlFor="breed" className="text-sm block">
                  Breed
                </label>
                <input id="breed" type="text" placeholder="Pet Breed" value={breed} onChange={(e) => setBreed(e.target.value)} className="w-full rounded-md p-2 border focus:outline-none focus:ring focus:border-blue-300" />
              </div>
              <div className="mb-4">
                <label htmlFor="sex" className="text-sm block">
                  Sex
                </label>
                <select id="sex" value={sex} onChange={(e) => setSex(e.target.value)} className="w-full rounded-md p-2 border focus:outline-none focus:ring focus:border-blue-300">
                  <option value="">Select Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="text-sm block">
                  Age
                </label>
                <input id="age" type="text" placeholder="Pet Age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full rounded-md p-2 border focus:outline-none focus:ring focus:border-blue-300" />
              </div>
              <div className="mb-4">
                <label htmlFor="color" className="text-sm block">
                  Color
                </label>
                <input id="color" type="text" placeholder="Pet Color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full rounded-md p-2 border focus:outline-none focus:ring focus:border-blue-300" />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="text-sm block">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Pet Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-md p-2 border focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Save Pet
            </button>
            <Link to="/dashboard/pet/" className="mb-4 ml-4 btn btn-error">
              Cancel
            </Link>
          </form>
        </section>
      </>
    </LayoutDashboard>
  );
};

export default AddPet;
