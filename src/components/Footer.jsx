import logo from '../../public/Logo.svg'

export const Footer = () => {
    const navItems = [
        {
            id: 1,
            name: "Home",
            link: "https://webworksco.in/"
        },
        {
            id: 2,
            name: "About",
            link: "https://webworksco.in/"
        },
        {
            id: 3,
            name: "Blogs",
            link: "https://webworksco.in/"
        },
        {
            id: 4,
            name: "Team",
            link: "https://webworksco.in/"
        },
    ]
    const Resources = [
        {
            id: 1,
            name: "Cookie Policy",
            link: "https://webworksco.in/"
        },
        {
            id: 2,
            name: "Terms & Conditions",
            link: "https://webworksco.in/"
        },
        {
            id: 3,
            name: "Privacy Policy.",
            link: "https://webworksco.in/"
        },
        {
            id: 4,
            name: "Shipping Policy",
            link: "https://webworksco.in/"
        },
    ]

    return (
        <>
            <div className="bg-dark radius">
                <div className='container'>
                    <footer className="row  g-2 py-4">
                        <div className="d-flex flex-column  justify-content-center  col-md-4   text-dark  align-items-center  align-items-md-start">
                            <div className='mb-4'>
                                <img src={logo} />
                            </div>
                            <div className='w-50'>
                                <p className='text-center text-md-start' >The change you have been looking for.</p>
                            </div>
                            <div className="border-bottom border-light w-100 d-md-none mt-3"></div>
                        </div>
                        <div className=" col-md-4   text-dark d-flex flex-column  justify-content-center align-items-center  align-items-md-start border-light ">
                            <h3 className='text-light'>Company</h3>
                            <div >

                                <ul className='d-flex flex-column items-start justify-content-start ps-2'>
                                    {navItems.map((nav) => (
                                        <li key={nav.id} className=' list-group-item hover-text lh-base'>{nav.name}</li>
                                    ))}
                                </ul>

                            </div>
                            <div className="border-bottom border-light w-100 d-md-none mt-3"></div>
                        </div>
                        <div className=" col-md-4   text-dark d-flex flex-column  justify-content-center align-items-center  align-items-md-start">
                            <h3 className='text-light'>Resource</h3>
                            <div >

                                <ul className='d-flex flex-column items-start justify-content-start ps-2 align-items-center  align-items-md-start'>
                                    {Resources.map((nav) => (
                                        <li key={nav.id} className='fw-normal list-group-item hover-text lh-base'>{nav.name}</li>
                                    ))}
                                </ul>

                            </div>

                        </div>
                        <div className="row pt-3">
                            <h3 className='text-center fs-6 fw-lighter'>Copyright 2025© All Rights Reserved. ChevalBleu Labs (OPC) Private Limited doing business as WebWorks Co.</h3>
                        </div>
                    </footer>
                </div>
            </div>

        </>
    )
}