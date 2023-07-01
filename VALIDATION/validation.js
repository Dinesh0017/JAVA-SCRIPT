function x()
{
    //name validation
        if(document.log.un.value==""){
            alert("Name is missing");
         }
    //password validation
        if(document.log.pswd.value.length<4){
            alert("6 characters needed");
         }
    //repeat password validation
         if(document.log.pswd.value!=document.log.rpswd.value){
            alert("Password is not Same");
         }
    //age validation
         if(isNaN(document.log.age.value) || document.log.age.value<=20){
            alert("Age is missing and your not log in");
         }
    //radio validation
         if((!document.log.rd[0].checked) && (!document.log.rd[1].checked)){
            alert("Select the Gender");
         }
    //checkbox validation
         if((!document.log.ol.checked) && (!document.log.al.checked)){
            alert("We need your Ol or Al exam result");
         }
    //select country validation
         if((document.log.c.selectedIndex==0)){
            alert("Not Select the Country");
         }
    //select country select the "select"  validation
         if(document.log.c.value==="000"){
            alert("Not Select the Country");
         }
   //select conditions validation
         if(!document.log.tik.checked){
            alert("Please accepts terms and conditions");
         }
}
