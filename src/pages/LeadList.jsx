import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLeads } from "../services/leadApi";
import LeadTable from "../components/LeadTable";

const LeadList = () => {

 const [leads, setLeads] = useState([]);
 const [loading, setLoading] = useState(false);

 const navigate = useNavigate();

 useEffect(() => {
  fetchLeads();
 }, []);

 const fetchLeads = async () => {
  setLoading(true);

  const data = await getLeads();

  if (data) {
   setLeads(data);
  }

  setLoading(false);
 };

 return (
  <div className="min-h-screen bg-linear-to-br from-indigo-50 via-sky-50 to-purple-50 p-4">

   <div className="mx-auto max-w-4xl">

    <div className="mb-4 flex items-center justify-between">

     <div>
      <h2 className="text-lg font-semibold text-slate-800">
       Leads
      </h2>
      <p className="text-xs text-slate-500">
       All captured leads
      </p>
     </div>

     <button
      type="button"
      onClick={() => navigate("/")}
      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
     >
      ← Back to form
     </button>

    </div>

    {loading ? (
     <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-500 shadow-sm">
      Loading leads...
     </div>
    ) : (
     <LeadTable leads={leads} />
    )}

   </div>

  </div>
 );
};

export default LeadList;
