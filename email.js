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
          alert("Thanks For submitting your contact details! one of our agent will contact you soon")
  
      })
      .catch(err=>console.log(err));
  
  }

  function sendMsg() {
    var params = {
      name: document.getElementById("mname").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    const serviceID = "service_e5z5tlp";
    const templateID = "template_7dqef4a";

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("mname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("We got your Message. Thank you for reaching us");
      })
      .catch(err => console.log(err));
  }