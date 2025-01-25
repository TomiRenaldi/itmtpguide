export default function Intro() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Welcome to Project Documentation
      </h2>
      <p className="text-lg mb-4">
        This is the home page of our project documentation. Here you can find
        information about how to get started and use our API.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
          <p>Learn how to install and set up our project quickly.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">API Reference</h3>
          <p>
            Explore our API documentation and learn how to use our functions.
          </p>
        </div>
      </div>
    </div>
  );
}
