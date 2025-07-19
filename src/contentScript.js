import { supabase } from "./supabaseClient.js";

const patient_id = await document.getElementById("ctl00_ContentPlaceHolder1_txtPatientRegNo").value;

let { data, error } = await supabase.from("patients").select("*").eq("patient_id", patient_id);

document.getElementById("ctl00_ContentPlaceHolder1_txtPRegDate").value = data[0].date_of_usg.split("-").reverse().join("/");
document.getElementById("ctl00_ContentPlaceHolder1_txtPFirstName").value = data[0].patient_name;
document.getElementById("ctl00_ContentPlaceHolder1_ddlAdharID").value = 106
document.getElementById("ctl00_ContentPlaceHolder1_txtAdharID").value = "Aadhar Card";
document.getElementById("ctl00_ContentPlaceHolder1_rbtnHusbWFMOf_0").checked = true;
document.getElementById("ctl00_ContentPlaceHolder1_txtHusbandName").value = data[0].husband_name;
document.getElementById("ctl00_ContentPlaceHolder1_txtPAge").value = data[0].patient_age;
document.getElementById("ctl00_ContentPlaceHolder1_txtLMPDate").value = data[0].last_menstrual_period.split("-").reverse().join("/");
document.getElementById("ctl00_ContentPlaceHolder1_txtMale").value = data[0].number_of_male_children;
document.getElementById("ctl00_ContentPlaceHolder1_txtFemale").value = data[0].number_of_female_children;
document.getElementById("ctl00_ContentPlaceHolder1_txtMobileNo").value = data[0].mobile_no;
document.getElementById("ctl00_ContentPlaceHolder1_txtPatientAdd").value = data[0].address;
document.getElementById("ctl00_ContentPlaceHolder1_rbtnReferredBy_0").click();
document.getElementById("ctl00_ContentPlaceHolder1_rbtnProcAtt_0").click();