const BASE_URL = "http://localhost:3000/lead";

export const createLead = async (payload) => {
 try {
  const res = await fetch(BASE_URL, {
   method: "POST",
   headers: {
    "Content-Type": "application/json"
   },
   body: JSON.stringify(payload)
  });

  const data = await res.json();
  return data;

 } catch (err) {
  console.error("Error creating lead:", err);
  return null;
 }
};

export const getLeads = async () => {
 try {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;

 } catch (err) {
  console.error("Error fetching leads:", err);
  return null;
 }
};

export const getLeadById = async (id) => {
 try {
  const res = await fetch(`${BASE_URL}/getlead/${id}`);
  const data = await res.json();
  return data;

 } catch (err) {
  console.error("Error fetching lead by id:", err);
  return null;
 }
};
