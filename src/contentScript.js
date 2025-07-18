import { supabase } from "./supabaseClient.js";

const patient_id = await document.getElementById("patient_id").value;

let { data, error } = await supabase.from("patients").select("*").eq("patient_id", patient_id);

document.getElementById("date_of_usg").value = data[0].date_of_usg;
document.getElementById("patient_name").value = data[0].patient_name;
document.getElementById("husband_name").value = data[0].husband_name;
document.getElementById("patient_age").value = data[0].patient_age;
document.getElementById("last_menstrual_period").value = data[0].last_menstrual_period;
document.getElementById("number_of_male_children").value = data[0].number_of_male_children;
document.getElementById("number_of_female_children").value = data[0].number_of_female_children;
document.getElementById("referred_by").value = data[0].referred_by;
document.getElementById("mobile_no").value = data[0].mobile_no;
document.getElementById("address").value = data[0].address;