import {useState} from 'react'
import {toast} from 'react-toastify'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {login} from '../features/auth/authSlice'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData

    const dispatch = useDispatch()

    const {user, isLoading, isSuccess, message} = useSelector(state => state.auth)


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