const storedUserName = sessionStorage.getItem('user');
const Navigasi = () => {
return (
<>
    <div className="navbar bg-base-100 shadow-xl">
        <div className="flex-1">
            <a href="/" className="btn btn-ghost text-xl">
                Pet Adoption
            </a>
        </div>
        <div className="flex-none">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                            src="https://i.ibb.co/BNGc0Yv/image-removebg-preview-8.png" />
                    </div>
                </div>
                <ul tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a href="/" className="justify-between">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/pet" className="justify-between">
                            Animal
                        </a>
                    </li>
                    {!storedUserName ? (
                    <>
                        <li>
                            <a href="/login" className="justify-between">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href="/register" className="justify-between">
                                Register
                            </a>
                        </li>
                    </>
                    ) :
                    <li>
                        <a href="/user" className="justify-between">
                            Dashboard
                            <span className="badge">New</span>
                        </a>
                    </li>
                    }
                </ul>
            </div>
        </div>
    </div>
</>
);
};

export default Navigasi;
