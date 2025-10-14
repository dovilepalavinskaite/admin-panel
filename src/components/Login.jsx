import { useState } from 'react';
import adminIcon from '../assets/admin.png';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login({ onLogin, isWrongCredentials }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordForgotten, setPasswordForgotten] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shakeError, setShakeError] = useState(false); // <-- new state

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger shake animation if credentials are wrong
    if (isWrongCredentials) {
      setShakeError(true);
      setTimeout(() => setShakeError(false), 400); // reset after animation
    }

    onLogin({ username, password });
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <img
        src={adminIcon}
        alt="Admin icon"
        className="w-[100px] h-[100px] rounded-full mb-4 hover:scale-125 transition-transform duration-200"
      />

      <h1 className="text-stone-100 text-xl font-semibold mb-6">John Doe</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-[25rem]">
          {/* Username input */}
          <div className="flex items-center border border-gray-300 rounded-full bg-stone-50 px-3 py-2">
            <FaUser className="text-gray-400 w-5 h-5 mr-2 flex-shrink-0" />
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
              className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Password input */}
          <div className="flex items-center border border-gray-300 rounded-full bg-stone-50 px-3 py-2 relative">
            <FaLock className="text-gray-400 w-5 h-5 mr-2 flex-shrink-0" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 pr-8"
            />
            <button
              type="button"
              onClick={togglePassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="rounded-full px-3 py-2 my-5 w-full bg-stone-800 text-stone-50 hover:bg-stone-700 hover:shadow-md transition duration-200 cursor-pointer"
        >
          LOGIN
        </button>
      </form>

      {/* Error message */}
      {isWrongCredentials && (
        <p
          className={`text-red-400 ${shakeError ? "animate-shake" : ""}`}
        >
          Wrong username or password
        </p>
      )}

      <button
        type="button"
        onClick={() => setPasswordForgotten(true)}
        className="hover:text-stone-300 cursor-pointer mb-5 text-stone-400 transition"
      >
        Forgot Username / Password?
      </button>

      {isPasswordForgotten && (
        <p className="text-sm text-stone-200 mt-2">
          Your username: <span className="text-stone-400">admin</span>.{" "}
          Your password: <span className="text-stone-400">admin</span>
        </p>
      )}
    </div>
  );
}