// import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link , useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Link from '@mui/material/Link'



const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <Box>
      <AppBar position='static' sx={{}}>
        <Toolbar style={{justifyContent: "space-between"}}>
          <Link to='/' style={{textDecoration: 'none', color: '#f5f5f5'}}>The Plant Spot</Link>

          {user ? (
          <Button variant="contained" color="info" onClick={onLogout}>Logout</Button>
          ) : (
            <Box>
              <Button color="info"><Link style={{textDecoration: 'none', color: '#f5f5f5'}} to='/login'>Login</Link></Button>
              <Button color="info"><Link style={{textDecoration: 'none', color: '#f5f5f5'}} to='/register'>Register</Link></Button>
            </Box>
            ) } 
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header