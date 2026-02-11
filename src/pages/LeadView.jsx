import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLeadById } from "../services/leadApi";

const LeadView = () => {

 const { id } = useParams();
 const navigate = useNavigate();

 const [lead, setLead] = useState(null);
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  fetchLead();
 }, []);

 const fetchLead = async () => {
  setLoading(true);

  const data = await getLeadById(id);

  if (data) {
   setLead(data.lead || data);
  }

  setLoading(false);
 };

 if (loading) {
  return (
   <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-sky-50 to-purple-50">
    <p className="rounded-xl border bg-white px-6 py-3 text-sm text-slate-500 shadow">
     Loading lead...
    </p>
   </div>
  );
 }

 if (!lead) {
  return (
   <div className="min-h-screen flex items-center justify-center bg-linear-to-br  from-indigo-50 via-sky-50 to-purple-50">
    <p className="rounded-xl border bg-white px-6 py-3 text-sm text-slate-500 shadow">
     No lead found
    </p>
   </div>
  );
 }

 return (
  <div className="min-h-screen bg-linear-to-br from-indigo-50 via-sky-50 to-purple-50 p-4">

   <div className="mx-auto max-w-xl rounded-2xl bg-white shadow-xl ring-1 ring-slate-100">

    <div className="flex items-center justify-between border-b px-6 py-4">

     <div>
      <h2 className="text-lg font-semibold text-slate-800">
       Lead Details
      </h2>
      <p className="text-xs text-slate-500">
       Complete lead information
      </p>
     </div>

     <button
      onClick={() => navigate("/lead")}
      className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
     >
      ← Back
     </button>

    </div>

    <div className="p-6 space-y-4">

     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      <div>
       <p className="text-xs text-slate-500">Name</p>
       <p className="text-sm font-medium text-slate-800">
        {lead.name}
       </p>
      </div>

      <div>
       <p className="text-xs text-slate-500">Email</p>
       <p className="text-sm font-medium text-slate-800 break-all">
        {lead.email}
       </p>
      </div>

      <div>
       <p className="text-xs text-slate-500">Phone</p>
       <p className="text-sm font-medium text-slate-800">
        {lead.phone || "-"}
       </p>
      </div>

      <div>
       <p className="text-xs text-slate-500">Company</p>
       <p className="text-sm font-medium text-slate-800">
        {lead.company || "-"}
       </p>
      </div>

      <div>
       <p className="text-xs text-slate-500">Source</p>
       <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600">
        {lead.source}
       </span>
      </div>

     </div>

     <div>
      <p className="text-xs text-slate-500 mb-1">Message</p>
      <p className="rounded-lg border bg-slate-50 px-3 py-2 text-sm text-slate-700">
       {lead.message || "-"}
      </p>
     </div>

    </div>

   </div>
  </div>
 );
};

export default LeadView;
