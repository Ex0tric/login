import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PartnerDashboard.css';


function Login() {
  let navigate = useNavigate();

  const [ read, setRead] = useState('')
  const [ user, setUser] = useState('')

  function handleChange(event){
    event.stopPropagation();
    setRead({ ...read, [event.target.name]:event.target.value})
  } 

  function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(read);

    fetch('http://192.168.0.169:8000/api/login/',
			{
				method : 'POST',
				body : JSON.stringify(read),  
				headers : {
					"Content-Type" : "application/json"
				}
			})
			.then(response=>response.json())
			.then(data=>{setUser(data);console.log(data)})
    
  } 

    useEffect(()=>{

        if(user.user === 'is_super_admin'){
          localStorage.setItem("user", "is_super_admin")
          navigate('/superadmin');
        }else if(user.user === 'is_partner'){
          localStorage.setItem("user", "is_partner")
          navigate('/partner');
        }
  })

  if(localStorage.getItem("user") === 'is_super_admin'){
    return <h1>You are already loged In</h1>
  }else if(localStorage.getItem("user") === 'is_partner'){
    navigate('/partner');
  }else{
    return(
  <div className="Login ">
    <form>
      <input type="text" name="username" className='mx-auto d-block' onChange={(event)=>handleChange(event)}/>
      <input type="password" name="password" className='mx-auto d-block' onChange={(event)=>handleChange(event)}/>
      <input type="submit" value="Login" onClick={(event)=>handleSubmit(event)}className='login d-block mx-auto'/>
    </form>
  </div>
    );
  }

}

export default Login;
