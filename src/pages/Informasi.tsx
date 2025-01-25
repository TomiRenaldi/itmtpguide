export default function Informasi() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Getting Started</h2>
      <p className="text-lg mb-4">
        Follow these steps to get started with our project:
      </p>
      <ol className="list-decimal list-inside space-y-4">
        <li className="bg-white p-4 rounded-lg shadow">
          <strong>Install the package using npm:</strong>
          <pre className="bg-gray-100 p-2 mt-2 rounded">
            <code>npm install our-package</code>
          </pre>
        </li>
        <li className="bg-white p-4 rounded-lg shadow">
          <strong>Import the main function:</strong>
          <pre className="bg-gray-100 p-2 mt-2 rounded">
            <code>import {"{ main }"} from 'our-package'</code>
          </pre>
        </li>
        <li className="bg-white p-4 rounded-lg shadow">
          <strong>Call the function in your code:</strong>
          <pre className="bg-gray-100 p-2 mt-2 rounded">
            <code>main()</code>
          </pre>
        </li>
      </ol>
    </div>
  );
}
