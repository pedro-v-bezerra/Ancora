import Button from "./Button";

export default function Quote() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8 bg-white rounded-xl">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-2xl font-medium leading-7 tracking-tight text-[#14110B]">
          Request a Free Quote. Best rate guaranteed!
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-4" action="#" method="POST">
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
              className="block w-full rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-[#2D2D2D] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 font-dm bg-[#F2F2F2]"
            />
          </div>

          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="block w-full rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-[#2D2D2D] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 font-dm bg-[#F2F2F2]"
            />
          </div>

          <div>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              required
              className="block w-full rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-[#2D2D2D] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-4 font-dm bg-[#F2F2F2]"
            />
          </div>

          <div>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="block w-full rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-[#2D2D2D] font-dm bg-[#F2F2F2] px-4"
            >
              <option value="" disabled>
                Choose a service
              </option>
              <option value="service1">Serviço 1</option>
              <option value="service2">Serviço 2</option>
              <option value="service3">Serviço 3</option>
            </select>
          </div>

          <div className="w-full">
            <Button text="ENTRAR EM CONTATO" className="w-full py-3 mt-4" />
          </div>
        </form>
      </div>
    </div>
  );
}
