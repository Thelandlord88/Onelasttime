interface GreetingProps {
  name: string;
}

export default function Greeting({ name }: GreetingProps) {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-2xl font-bold">Hello, {name}!</h2>
      <p className="text-gray-600">This is a TypeScript React component in Astro.</p>
    </div>
  );
}
