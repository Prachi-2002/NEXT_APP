"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const serviceId = "your_service_id";
    const templateId = "your_template_id";
    const publicKey = "your_public_key";

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email, // User's email (for reference)
      phone: formData.phone,
      message: formData.message,
      to_email: "your-email@example.com", // 🔴 Your email address here!
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSuccess("Message sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSuccess("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f0f0f] p-6">
      <Card className="w-full max-w-lg shadow-xl border border-gray-800 bg-[#161616] rounded-xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[oklch(0.789_0.154_211.53)] via-white to-[oklch(0.637_0.237_25.331)] drop-shadow-md">
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-white text-sm font-semibold mb-1">First Name</label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-3 bg-[#1e1e1e] text-white border border-gray-700 focus:ring-2 focus:ring-[oklch(0.789_0.154_211.53)]"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-white text-sm font-semibold mb-1">Last Name</label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-3 bg-[#1e1e1e] text-white border border-gray-700 focus:ring-2 focus:ring-[oklch(0.789_0.154_211.53)]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-1">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 bg-[#1e1e1e] text-white border border-gray-700 focus:ring-2 focus:ring-[oklch(0.789_0.154_211.53)]"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-1">Phone Number</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 bg-[#1e1e1e] text-white border border-gray-700 focus:ring-2 focus:ring-[oklch(0.789_0.154_211.53)]"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-1">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 h-[30vh] bg-[#1e1e1e] text-white border border-gray-700 focus:ring-2 focus:ring-[oklch(0.789_0.154_211.53)]"
                rows={4}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full text-white bg-[oklch(0.637_0.237_25.331)] hover:bg-[oklch(0.789_0.154_211.53)] transition-all shadow-lg shadow-[oklch(0.789_0.154_211.53)/40] hover:shadow-[oklch(0.637_0.237_25.331)/50]"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {success && <p className="text-center text-sm text-white mt-2">{success}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
