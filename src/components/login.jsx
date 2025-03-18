import {useState} from "react";


function Login() {



const [formData,setFormData] = useState({ 
email: "",
password: "",



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

    if (!formData.email || !formData.password) {
        alert("Por favor complete todos los campos.");
        return;
      }


    if(formData.password.length < 6){

alert("La contrasena debe de tener almenos 6 caracteres")
return;

    }


    alert(`Login exitoso! Email: ${formData.email}`);


    

}







    return (
        <div className="container-fluid p-0">
        <div className="row vh-100 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="text-center mb-4">Login</h2>
        
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input 
      type="email" 
      id="email" 
      name="email" 
      value={formData.email} 
      onChange={handleChange}/>

<label htmlFor="password">Contrasena:</label>
<input
  type="password" 
  id="password"
  name="password" 
  value={formData.password} 
  onChange={handleChange}
/>



      <button type="submit">Submit</button>
    </form>

          </div>
        </div>
      </div>
    );
  
}
  export default Login;
  