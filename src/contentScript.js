function autofillFields() {
  let patient_id_field = document.getElementById('patient_id');
  let date_of_usg_field = document.getElementById('date_of_usg');
  let patient_name_field = document.getElementById('patient_name');
  let husband_name_field = document.getElementById('husband_name');
  let patient_age_field = document.getElementById('patient_age');
  let last_menstrual_period_field = document.getElementById('last_menstrual_period');
  let number_of_male_children_field = document.getElementById('number_of_male_children');
  let number_of_female_children_field = document.getElementById('number_of_female_children');
  let referred_by_field = document.getElementById('referred_by');
  let mobile_no_field = document.getElementById('mobile_no');
  let address_field = document.getElementById('address');

  patient_id_field.value = 25
}

autofillFields();