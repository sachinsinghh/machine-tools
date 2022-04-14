function validation()

{

 if(document.frm.name.value=='Name :')

 {

  alert("Please Enter Your Name");

  document.frm.name.focus();

  return false;

 }

 

  if(document.frm.mobile.value=='Mobile Number :')

 {

  alert("Please Enter Your Mobile Number");

  document.frm.mobile.focus();

  return false;

 }

 

 if(document.frm.email.value=='Email Address :')

 {

  alert("Please Enter Your Email");

  document.frm.email.focus();

  return false;

 }

 if((document.frm.email.value.indexOf('.')==-1)||(document.frm.email.value.indexOf('@')==-1))

 {

  alert("Please Enter Your Valid Email");

  document.frm.email.focus();

  return false;

 }



 

 if(document.frm.message.value=='Message :')

 {

  alert("Please Enter Your Message");

  document.frm.message.focus();

  return false;

 }

}
