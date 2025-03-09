export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 pt-40 pb-40">
      <h1 className="text-4xl font-bold">Coming Soon!</h1>
      <p className=" mt-4">
        We're working hard to bring you new features. Stay tuned!
      </p>
      <div className="mt-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button className="mt-4 px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Notify Me
        </button>
      </div>
    </div>
  );
}
