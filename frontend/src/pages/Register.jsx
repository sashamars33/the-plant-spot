import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

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
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
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
       <section className="">
            <h1><FaUser /> Register</h1>
            <p>Fill out the form below to create an account.</p>
       </section>

       <section className="">
            <form className="" onSubmit={onSubmit}>
                <div className="">
                    <input required type="text" className="" id="name" name="name" value={name} onChange={onChange} placeholder="Enter your name.. "></input>
                </div>
                <div className="">
                    <input required type="text" className="" id="email" name="email" value={email} onChange={onChange} placeholder="Enter your email.. "></input>
                </div>
                <div className="">
                    <input required type="text" className="" id="password" name="password" value={password} onChange={onChange} placeholder="Enter a password.. "></input>
                </div>
                <div className="">
                    <input required type="text" className="" id="password2" name="password2" value={password2} onChange={onChange} placeholder="Confirm password.. "></input>
                </div>
                <div className="">
                    <button className="">Submit</button>
                </div>
            </form>
       </section>
    </>
  )
}

export default Register