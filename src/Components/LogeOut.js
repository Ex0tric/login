import { useNavigate } from 'react-router-dom';

function Partner() {

  let navigate = useNavigate();
  
  let handleLogout = (event) =>{
    event.stopPropagation();
    fetch('http://192.168.0.169:8000/api/logout/')
			.then(response=>response.json())
			.then(data=>console.log(data))
      navigate('/')
      localStorage.clear()
  }

return(
  <>
    <button type="logout" onClick={(event)=>handleLogout(event)} className='login d-block mx-auto'>Logout</button>
  </>
)

}

export default Partner;
