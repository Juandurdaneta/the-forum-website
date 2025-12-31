"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { LEAD_MAGNET } from "@/lib/constants";
import { toast } from "@/components/ui/Toaster";
import { Check, FileText, Sparkles } from "lucide-react";

export function LeadMagnet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contentType: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contentTypeOptions = [
    { value: "podcast", label: "Podcast" },
    { value: "video", label: "Video" },
    { value: "both", label: "Both" },
    { value: "not-sure", label: "Not sure yet" },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.contentType) {
      newErrors.contentType = "Please select an option";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const link = document.createElement("a");
    link.href = "/downloads/content-blueprint.pdf";
    link.download = "The-Forum-Content-Blueprint.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsLoading(false);
    setFormData({ firstName: "", email: "", contentType: "" });
    toast("Check your inbox! Your blueprint is on its way.", "success");
  };

  return (
    <section id="blueprint" className="py-24 bg-brand-peach relative overflow-hidden">
      <div className="absolute inset-0 roman-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-bronze/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-brand-bronze" />
                <span className="text-sm font-medium text-brand-black">Free Download</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-brand-black mb-4 leading-tight">
                {LEAD_MAGNET.title}
              </h2>

              <p className="text-lg text-brand-slate mb-8 leading-relaxed">
                {LEAD_MAGNET.description}
              </p>

              <div className="space-y-3 mb-8">
                <p className="font-medium text-brand-black">What&apos;s Inside:</p>
                {LEAD_MAGNET.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-bronze flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-brand-slate">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="hidden lg:flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                <div className="w-20 h-24 bg-brand-bronze/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-10 h-10 text-brand-bronze" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-brand-black">Content Blueprint</p>
                  <p className="text-sm text-brand-slate">PDF Guide • 15 pages</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="font-heading text-2xl font-semibold text-brand-black mb-6">
                  Get Your Free Blueprint
                </h3>

                <div className="space-y-5">
                  <Input
                    label="First Name"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    error={errors.firstName}
                    required
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={errors.email}
                    required
                  />

                  <Select
                    label="What type of content are you creating?"
                    options={contentTypeOptions}
                    placeholder="Select an option"
                    value={formData.contentType}
                    onChange={(e) => setFormData({ ...formData, contentType: e.target.value })}
                    error={errors.contentType}
                    required
                  />

                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Me The Blueprint"}
                  </Button>

                  <p className="text-xs text-brand-slate text-center">
                    {LEAD_MAGNET.disclaimer}
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
