import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Hero Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600"> CourierPro</h1>
          <nav className="space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium">Login</Link>
            <Link to="/register" className="text-blue-600 font-semibold border px-3 py-1 rounded border-blue-500 hover:bg-blue-50">Register</Link>
          </nav>
        </div>
      </header>

      <main className=" flex-grow container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Fast. Secure. Reliable.
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Book and track your parcel deliveries in real-time with CourierPro.
            Whether you're an admin, agent, or customer — we’ve got you covered.
          </p>
          <div className="space-x-4">
            <Link to="/register" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Get Started
            </Link>
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              Already have an account?
            </Link>
          </div>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2776/2776067.png"
          alt="Courier Delivery Illustration"
          className="w-80 h-auto"
        />
      </main>

      {/* Features */}
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Choose CourierPro?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-600">📍 Real-time Tracking</h4>
              <p className="text-gray-600">Track parcels live on Google Maps with accurate agent coordinates.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600">🔄 Status Updates</h4>
              <p className="text-gray-600">Get notified of parcel progress: Pickup → In Transit → Delivered.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-600">📊 Admin Dashboard</h4>
              <p className="text-gray-600">Powerful tools for managing bookings, agents, COD payments and reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} CourierPro. All rights reserved.
      </footer>
    </div>
  );
}
