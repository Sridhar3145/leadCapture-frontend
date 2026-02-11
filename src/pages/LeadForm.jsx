import { useEffect, useState } from "react";
import { createLead } from "../services/leadApi";
import { useNavigate } from "react-router-dom";

function LeadForm() {
 const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  source: ""
 });

 const navigate = useNavigate();

 const [loading, setLoading] = useState(false);
 const [msg, setMsg] = useState("");
 const [type, setType] = useState("");

 useEffect(() => {
  if (!msg) return;

  const timer = setTimeout(() => {
   setMsg("");
   setType("");
  }, 3000);

  return () => clearTimeout(timer);
 }, [msg]);


 const handleChange = (e) => {
  setForm({
   ...form,
   [e.target.name]: e.target.value
  });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setMsg("");
  setType("");

  if (!form.name || !form.email) {
   setMsg("Name, Email  are required");
   setType("warn");
   return;
  }

  setLoading(true);

  const data = await createLead(form);

  if (!data) {
   setMsg("Something went wrong");
   setType("error");
  } else {
   if (data.webhookStatus === "failed") {
    setMsg("Lead saved, but webhook failed");
    setType('warn')
   } else {
    setMsg("Lead saved and webhook triggered successfully");
    setType('success')
   }


   setForm({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    source: ""
   });
  }

  setLoading(false);
 };

 const alertClass =
  type === "success"
   ? "bg-emerald-50 text-emerald-700 border-emerald-200"
   : type === "error"
    ? "bg-rose-50 text-rose-700 border-rose-200"
    : type === "warn"
     ? "bg-amber-50 text-amber-700 border-amber-200"
     : "";

 const inputClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500";

 return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-sky-50 to-purple-50 p-4">

   <div className="w-full max-w-md rounded-2xl bg-white shadow-xl ring-1 ring-slate-100">

    <div className="px-6 py-5 border-b">
     <h2 className="text-lg font-semibold text-slate-800">
      New Lead
     </h2>
     <p className="text-xs text-slate-500 mt-1">
      Lead Capture
     </p>
    </div>

    <div className="p-6">


     <form onSubmit={handleSubmit} className="space-y-3">

      <input
       type="text"
       name="name"
       placeholder="Full name *"
       value={form.name}
       onChange={handleChange}
       className={inputClass}
      />

      <input
       type="email"
       name="email"
       placeholder="Email address *"
       value={form.email}
       onChange={handleChange}
       className={inputClass}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

       <input
        type="text"
        name="phone"
        placeholder="Phone"
        maxLength={10}
        value={form.phone}
        onChange={handleChange}
        className={inputClass}
       />

       <input
        type="text"
        name="company"
        placeholder="Company"
        value={form.company}
        onChange={handleChange}
        className={inputClass}
       />

      </div>

      <textarea
       name="message"
       placeholder="Message"
       rows="3"
       value={form.message}
       onChange={handleChange}
       className={`${inputClass} resize-none`}
      />

      <select
       name="source"
       value={form.source}
       onChange={handleChange}
       className={inputClass}
      >
       <option value="">Select source</option>
       <option value="Website">Website</option>
       <option value="Instagram">Instagram</option>
       <option value="Referral">Referral</option>
       <option value="Other">Other</option>
      </select>

      {msg && (
       <div
        className={`mb-4 flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${alertClass}`}
       >
        {msg}
       </div>
      )}
      <button
       type="submit"
       disabled={loading}
       className="mt-2 w-full rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 py-2.5 text-sm font-medium text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
       {loading ? "Saving lead..." : "Submit Lead"}
      </button>

     </form>

     <div className="mt-4 flex justify-center">
      <button
       type="button"
       onClick={() => navigate("/lead")}
       className="text-sm font-medium text-indigo-600 hover:underline"
      >
       View all leads →
      </button>
     </div>

    </div>
   </div>
  </div>
 );
}

export default LeadForm;

