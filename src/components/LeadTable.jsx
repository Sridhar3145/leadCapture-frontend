import { useNavigate } from "react-router-dom";

function LeadTable({ leads }) {

 const navigate = useNavigate();

 if (!leads || leads.length === 0) {
  return (
   <p className="text-sm text-slate-500 text-center py-6">
    No leads found
   </p>
  );
 }

 return (
  <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">

   <table className="w-full text-sm">

    <thead className="bg-slate-50 text-slate-600">
     <tr>
      <th className="px-4 py-3 text-left font-medium">
       Name
      </th>
      <th className="px-4 py-3 text-left font-medium">
       Email
      </th>
      <th className="px-4 py-3 text-left font-medium">
       Source
      </th>
      <th className="px-4 py-3 text-left font-medium">
       Created
      </th>
     </tr>
    </thead>

    <tbody className="divide-y">

     {leads.map((lead) => (
      <tr
       key={lead._id}
       onClick={() => navigate(`/lead/${lead._id}`)}
       className="cursor-pointer transition hover:bg-indigo-50/40"
      >
       <td className="px-4 py-3 text-slate-800">
        {lead.name}
       </td>

       <td className="px-4 py-3 text-slate-700">
        {lead.email}
       </td>

       <td className="px-4 py-3">
        <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-600">
         {lead.source}
        </span>
       </td>

       <td className="px-4 py-3 text-slate-600">
        {new Date(lead.createdAt).toLocaleDateString()}
       </td>
      </tr>
     ))}

    </tbody>

   </table>

   <div className="border-t bg-slate-50 px-4 py-2">
    <p className="text-xs text-slate-500">
     Click a row to view lead details
    </p>
   </div>

  </div>
 );
}

export default LeadTable;
