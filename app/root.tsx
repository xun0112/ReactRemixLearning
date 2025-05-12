import { Outlet } from "@remix-run/react";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ReactRemixLearning</title>
        {/* Tailwind CSS is already included via CDN in index.html */}
      </head>
      <body className="flex">
        <nav className="w-64 bg-gray-200 p-4"> {/* Left nav bar with fixed width */}
          <ul>
            <li><a href="/" className="text-blue-500">Home</a></li>
            <li><a href="/about" className="text-blue-500">About</a></li>
          </ul>
        </nav>
        <main className="flex-1 p-4"> {/* Right content area that adjusts */}
          <Outlet /> {/* This will render the route components */}
        </main>
      </body>
    </html>
  );
}
