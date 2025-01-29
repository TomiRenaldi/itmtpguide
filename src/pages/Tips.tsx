export default function Tips() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">API Reference</h2>
      <p className="text-lg mb-4">Here's a quick reference for our main API functions:</p>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded-lg shadow">
          <code className="text-sm md:text-base font-mono bg-gray-100 p-1 rounded">function1(param: string): void</code>
          <p className="mt-2">Description of function1</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow">
          <code className="text-sm md:text-base font-mono bg-gray-100 p-1 rounded">
            function2(param: number): string
          </code>
          <p className="mt-2">Description of function2</p>
        </li>
        <li className="bg-white p-4 rounded-lg shadow">
          <code className="text-sm md:text-base font-mono bg-gray-100 p-1 rounded">
            function3(param: boolean): Promise&lt;void&gt;
          </code>
          <p className="mt-2">Description of function3</p>
        </li>
      </ul>
    </div>
  );
}
