import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import FormControl from '@mui/material/FormControl'

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

    useEffect(() => {

        console.log(message)
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/profile')
            console.log(user)
        }

        dispatch(reset()) 

    }, [isError, isSuccess, user, message, dispatch, navigate])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2){
            toast.error('Passwords do not match.')
        }else{
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }

  return (
    <>
    <CssBaseline />
    <Paper style={{height: '100vh', textAlign: 'center', padding: '5% 10%'}}>
        <Card sx={{bgcolor: "background.default"}}>
       <CardContent>
            <h1>Register</h1>
            <p>Fill out the form below to create an account.</p>
       </CardContent>

       <CardContent >
            <FormControl style={{width: '85%'}}>
                <TextField variant="filled" label="Name" color="primary" style={{margin: '2% 0'}} required type="text" id="name" name="name" value={name} onChange={onChange}>
                </TextField>
                <TextField variant="filled" label="Email" color="primary" style={{ margin: '2% 0'}} required type="text" id="email" name="email" value={email} onChange={onChange}>
                </TextField>
                <TextField variant="filled" label="Password" color="primary" style={{ margin: '2% 0'}} required type="text" id="password" name="password" value={password} onChange={onChange}>
                </TextField>
                <TextField variant="filled" label="Confirm Password" color="primary" style={{ margin: '2% 0'}} required type="text" id="password2" name="password2" value={password2} onChange={onChange}>
                </TextField>
                    <Button variant='contained' onClick={onSubmit} style={{margin: '2% 0', padding: '2%'}}>Submit</Button>
            </FormControl>
       </CardContent>
       </Card>
    </Paper>
    </>
  )
}

export default Register




{/* <form className="" onSubmit={onSubmit}>
                <TextField variant="filled" label="Name" color="primary" style={{width: '80%', margin: '1% 0'}}>
                    <input required type="text" id="name" name="name" value={name} onChange={onChange} placeholder="Enter your name.. "></input>
                </TextField>
                <TextField variant="filled" label="Email" color="primary" style={{width: '80%', margin: '1% 0'}}>
                    <input required type="text" id="email" name="email" value={email} onChange={onChange} placeholder="Enter your email.. "></input>
                </TextField>
                <TextField variant="filled" label="Password" color="primary" style={{width: '80%', margin: '1% 0'}}>
                    <input required type="text" id="password" name="password" value={password} onChange={onChange} placeholder="Enter a password.. "></input>
                </TextField>
                <TextField variant="filled" label="Confirm Password" color="primary" style={{width: '80%', margin: '1% 0'}}>
                    <input required type="text" id="password2" name="password2" value={password2} onChange={onChange} placeholder="Confirm password.. "></input>
                </TextField>
                    <button style={{background: 'none', border: 'none', color: '#000', textTransform: 'uppercase'}}>Submit</button>
            </form> */}