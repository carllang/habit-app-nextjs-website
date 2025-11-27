"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    description: "",
    useCase: "",
  });
  const [status, setStatus] = useState("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      setStatus("reCAPTCHA not ready");
      return;
    }

    try {
      setStatus("Submitting...");

      // Get reCAPTCHA token
      const token = await executeRecaptcha("feature_request");

      // You would need to set up an API route to handle this
      const response = await fetch("/api/feature-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      if (response.ok) {
        setStatus("Thank you for your feature request!");
        setFormData({ email: "", title: "", description: "", useCase: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error submitting form. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="flex flex-col items-center justify-center px-4 py-8 mt-20 pb-40 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Feature Requests</h1>
      <p className="text-gray-300 mb-8 text-center">
        Help us make HabitMeister better! Share your ideas for new features or
        improvements.
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-200"
          >
            Feature Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Brief title for your feature request"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-200"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Describe the feature you'd like to see..."
          />
        </div>

        <div>
          <label
            htmlFor="useCase"
            className="block text-sm font-medium text-gray-200"
          >
            Use Case (Optional)
          </label>
          <textarea
            id="useCase"
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full px-3 py-2 bg-[#1a1a1a] border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="How would you use this feature?"
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-gray-400 shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-colors duration-200"
        >
          Submit Feature Request
        </button>

        {status && (
          <p
            className={`mt-4 text-center ${
              status.includes("Error") ? "text-red-600" : "text-green-600"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </main>
  );
}
