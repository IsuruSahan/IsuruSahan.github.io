function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,

    };
  
    const serviceID = "service_e5z5tlp";
    const templateID = "template_yjhlnqj";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("phone").value = "";

          console.log(res);
          alert("Thanks For Submitting Your Contact Details! One Of Our Agent Will Contact You Soon")
  
      })
      .catch(err=>console.log(err));
  
  }