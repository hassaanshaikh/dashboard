const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-white p-6 shadow rounded-lg dark:bg-gray-800">
          <h2 className="text-xl font-bold dark:text-white">Card</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Dashboard content here
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
