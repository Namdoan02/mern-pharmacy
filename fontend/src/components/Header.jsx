
const Header = ({ title }) => {
  return (
    <header className="bg-gray-700 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-600">
      <div className="max-mx-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-white font-semibold">{title}</h1>
        <div className="ml-auto items-center text-green-600 font-medium">
          Xin chào,      
        </div>
      </div>
    </header>
  );
};

export default Header;
