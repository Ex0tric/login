import './SuperAdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import Button from './LogeOut';

function SuperAdmin() {

  let navigate = useNavigate();

  if(localStorage.getItem("user") === 'is_super_admin'){
    return (
      <>
        <h1 className='text-center'>Hello, Super Admin Here Babes!!!</h1>
        <Button></Button>
      </>
    )
  }else{
    return(
      <>
      <h1>Login First</h1>
      <button onClick={()=>{ navigate('/'); console.log('Going')}}>Click here to go on Login Page</button>
      </>
    )
  }
}

export default SuperAdmin;
