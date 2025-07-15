
export const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark px-3 py-3">
            <div className="container">
                <div className="d-flex align-items-center gap-3">
                    <img
                        src="/Logo.svg"
                        alt="Logo"
                        width="50"
                        height="50"
                        className="d-inline-block align-text-top"
                    />
                    <span className="navbar-brand mb-0 h1 text-light d-md-block d-none ">Web Workers</span>
                </div>
                <div className="">
                    <button className="btn btn-primary rounded-pill me-2 px-4">Home</button>
                </div>
            </div>
        </nav>
    );
};
