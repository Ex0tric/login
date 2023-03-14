import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PartnerDashboard.css';

function Login() {

  // localStorage.setItem("user","logedout")

  let navigate = useNavigate();
  // function initialState(){
  //   if(localStorage.getItem('user') === null){
  //     return localStorage.setItem('user','none')
  //   }else{
  //     return localStorage.getItem('user')
  //   }
  // }

  localStorage.getItem('user');

  const [ read, setRead] = useState('')
  const [ user, setUser] = useState('')

  // const [authanticated, setAuthanticated] = useState()

  function handleChange(event){
    event.stopPropagation();
    setRead({ ...read, [event.target.name]:event.target.value})
  } 

  function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log(read)
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
      if(user.user === 'is_super_admin' && authanticated === 'is_super_admin'){
        navigate('/superadmin');
      }else if(user.user === 'is_partner' &&  authanticated === 'is_partner'){
        navigate('/partner');
      }else{
          return null
      }

      localStorage.setItem(Object.keys(user.user), user.user);

  },[user])

  localStorage.getItem(Object.keys(user.user)) === user.user

  return (
    <div className="Login ">
      <form>
        <input type="text" name="username" className='mx-auto d-block' onChange={(event)=>handleChange(event)}/>

        <input type="password" name="password" className='mx-auto d-block' onChange={(event)=>handleChange(event)}/>

        <input type="submit" value="Login" onClick={(event)=>handleSubmit(event)}className='login d-block mx-auto'/>
      </form>
    </div>
  );
}

export default Login;
