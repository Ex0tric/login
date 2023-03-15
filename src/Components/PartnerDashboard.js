import './PartnerDashboard.css';
import { useNavigate } from 'react-router-dom';
import Button from './LogeOut';


function Partner() {

  let navigate = useNavigate();
  
  if(localStorage.getItem("user") === 'is_partner'){
    return (<>
      <h1 className='text-center'>Hello, Partner Here Babes!!!</h1>
      <Button></Button>
    </>)
  }else return (
    <>
    <h1>Login First</h1>
    <button onClick={()=>{ navigate('/'); console.log('Going')}}>Click here to go on Login Page</button>
    </>
  );
}

export default Partner;
