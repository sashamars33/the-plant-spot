import {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {FaSignInAlt} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isLoading, isError, isSuccess, message} = useSelector(state => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/profile')
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

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    if(isLoading) {
        return <Spinner />
    }


  return (
    <>
       <section className="">
            <h1><FaSignInAlt /> Login</h1>
            <p>Please login!</p>
       </section>

       <section className="">
            <form className="" onSubmit={onSubmit}>
                <div className="">
                    <input required type="text" className="" id="email" name="email" value={email} onChange={onChange} placeholder="Enter your email.. "></input>
                </div>
                <div className="">
                    <input required type="text" className="" id="password" name="password" value={password} onChange={onChange} placeholder="Enter a password.. "></input>
                </div>
                <div className="">
                    <button className="">Submit</button>
                </div>
            </form>
       </section>
    </>
  )
}

export default Login