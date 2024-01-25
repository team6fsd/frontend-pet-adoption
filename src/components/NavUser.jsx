const NavUser = () => {
  const storedUserName = sessionStorage.getItem('user');
  const storedUserEmail = sessionStorage.getItem('email');
  const logout = () => {
    sessionStorage.removeItem('user');
    window.location.href = '/login';
  };

return (
<>
    <div className="navbar bg-primary">
        <div className="flex-1">
            <a href="/" className="btn btn-ghost text-xl">Pet Adoption</a>
        </div>
        <div className="flex-none">
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                        <span className="font-bold text-sm">{storedUserName}</span>
                        <span className="text-info">{storedUserEmail}</span>
                        <div className="card-actions">
                            <button  onClick={logout} className="btn btn-sm btn-error btn-block">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</>
);
};

export default NavUser;
