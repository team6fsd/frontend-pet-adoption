import { useState } from 'react';
import axios from 'axios';
import LayoutLanding from "../../../layouts/LayoutLanding";

const Register = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [Message, setMessage] = useState('');

  const Register = async (e) => {
    e.preventDefault();
     try {
        await axios.post('http://localhost:5000/register', {
          name: name,
          email: email,
          password: password,
          confPassword: confPassword,
        });
        window.location.href = '/login';
     } catch (error) {
      if(error.response) {
        setMessage(error.response.data.msg);
      }
     }
  };

  
  return (
    <LayoutLanding>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>
              {Message ? (
                <>
                <div role="alert" className="alert alert-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{Message}.</span>
                </div>
                </>
              ) : ''}
            </div>
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae consectetur deserunt adipisci a neque explicabo repellendus dolores nihil consequatur ad sapiente asperiores ratione, doloremque eaque temporibus iure nemo ipsa aliquam?
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={Register}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confPassword"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutLanding>
  );
};

export default Register;
