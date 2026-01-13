"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../../lib/api";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      // ✅ Save token & user
      const { token, user } = res.data.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // ✅ Redirect after login
      router.push("/admin/dashboard/blogs");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-black">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold !text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-white">
              Email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-md bg-zinc-800/50 px-3 py-2 text-white placeholder-gray-500 border border-zinc-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="Enter your email"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <div className="relative mt-2">
              <input
                type={isPasswordVisible ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-zinc-800/50 pr-10 px-3 py-2 text-white placeholder-gray-500 border border-zinc-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 curson-pointer transition-colors"
              >
                {isPasswordVisible ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-400 text-sm font-medium bg-red-900/20 border border-red-800/50 rounded-md p-3">{error}</p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
