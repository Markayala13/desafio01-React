
import {useState} from "react";


function RegisterPage() {



const [formData,setFormData] = useState({ 
email: "",
password: "",
confirmPassword: ""

});




const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,  
    }));

}

const handleSubmit =(event) => {

    event.preventDefault();

    ////validacion password

    if(formData.password !== formData.confirmPassword){

        alert("contrasenas no coinciden")
        return;
    }

    if(formData.email !== formData.confirmPassword){

        alert("contrasenas no coinciden")
        return;
    }

    alert(`Name: ${formData.name}, Password ${formData.password}, confirmation ${formData.confirmPassword}`


    )

}







    return (
        <div className="container-fluid p-0">
        <div className="row vh-100">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-center mb-4">Registro</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control"
                  value={formData.email} 
                  onChange={handleChange}
                />
              </div>
      
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  className="form-control"
                  value={formData.password} 
                  onChange={handleChange}
                />
              </div>
      
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña:</label>
                <input 
                  type="password" 
                  id="confirmPassword"
                  name="confirmPassword" 
                  className="form-control"
                  value={formData.confirmPassword} 
                  onChange={handleChange}
                />
              </div>
      
              <button type="submit" className="btn btn-primary w-100">Registrar</button>
            </form>
          </div>
        </div>
      </div>
      
    );
  
}
  export default RegisterPage;
  