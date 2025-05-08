import { Link } from "react-router-dom"
function HeaderNav() {
  return (
    <>
      <nav className="bg-black border-gray-200 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="{{asset('img/DM-logo.png')}}" className="h-8 rounded-full" alt="dm-logo" />
          </Link>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link to="/" className="block py-2 px-3 text-white rounded-sm md:bg-transparent" aria-current="page">Home</Link>
              </li>

              <li>
                <Link to="#" className="block py-2 px-3 text-white rounded-sm md:bg-transparent" aria-current="page">Services</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderNav

