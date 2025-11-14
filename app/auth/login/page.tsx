export default function Login() {
  return (
    <div className="h-dvh overflow-y-clip bg-linear-to-b from-zinc-100 to-zinc-200 flex items-center justify-center font-sans">
      <div className="w-full h-full bg-white rounded-lg shadow-lg">
        <div className="bg-blue-900 rounded-t-lg px-8 py-4 flex items-center">
          <h1 className="text-white text-2xl font-semibold">
            Central Authentication Service
          </h1>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row px-8 py-6 gap-8">
          <div className="bg-zinc-50 rounded-lg shadow p-6 flex-1 max-w-md h-fit">
            <h2 className="text-red-700 text-lg font-semibold mb-4">
              Enter your Username and Password
            </h2>
            <div className="w-full h-0.5 bg-gray-200 my-1">-</div>
            <form className="">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-yellow-50"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-yellow-50"
                />
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="warn" className="mr-2" />
                <p className="text-sm text-slate-600">Warn me before logging in to other pages</p>
              </div>
              <div className="w-full h-0.5 bg-gray-200 my-1">-</div>
              <div className="flex gap-2 mt-4">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                >
                  Login
                </button>
                <button
                  type="reset"
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Clear
                </button>
              </div>
              <div className="mt-2">
                <a href="#" className="text-blue-700 text-sm hover:underline">
                  Change password?
                </a>
              </div>
            </form>
          </div>
          <div className="flex-1">
            <div className="mb-4">
              <span className="font-semibold text-gray-700">Languages</span>
              <br />
              <a href="#" className="text-blue-700 hover:underline mr-2">
                Vietnamese
              </a>
              <a href="#" className="text-blue-700 hover:underline">
                English
              </a>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-red-700">Please note</span>
              <p className="text-gray-700 text-sm mt-1">
                The Login page enables single sign-on to multiple websites at
                HCMUT. This means that you only have to enter your user name and
                password once for websites that subscribe to the Login page.
                <br />
                You will need to use your HCMUT Username and password to login
                to this site. The HCMUT account provides access to many
                resources including the HCMUT Information System, e-mail, ...
                <br />
                For security reasons, please Exit your web browser when you are
                done accessing services that require authentication!
              </p>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-red-700">
                Technical support
              </span>
              <p className="text-gray-700 text-sm mt-1">
                E-mail:{" "}
                <a
                  href="mailto:support@hcmut.edu.vn"
                  className="text-blue-700 hover:underline"
                >
                  support@hcmut.edu.vn
                </a>{" "}
                | Tel: (84-8) 38647256 - 7204
              </p>
            </div>
          </div>
        </div>{" "}
        {/* <div className="px-8 py-4 text-xs text-gray-500 rounded-b-lg">
          <div>
            Copyright © 2011 - 2012 Ho Chi Minh University of Technology. All
            rights reserved.
            <br />
            Powered by{" "}
            <a
              href="https://www.apereo.org/projects/cas"
              className="text-blue-700 hover:underline"
            >
              Jasig CAS 3.5.1
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
