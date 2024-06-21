import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        confirmPassword:""
                 })

    const [error, setError] = useState({})


    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData({
          ...formData, [name] : value
        })
    }
    const handleClick = (e) =>{
        e.preventDefault()
        const validation = {}
        if(!formData.fname){
            validation.fname = "please fill"
        }
        if(!formData.lname){
            validation.lname = "please fill"
        }
        if(!formData.email){
            validation.email = "please fill"
        }
        if(formData.password !== formData.confirmPassword){
            validation.password = "password not check"
            validation.confirmPassword = "password not match"
        }
        if(formData.password.length <= 6){
            validation.password = "please check"
        }
        if(formData.confirmPassword.length <= 6){
            validation.confirmPassword = "please check"
        }
        if(!formData.password){
            validation.password = "please fill"
        }
        if(!formData.confirmPassword){
            validation.confirmPassword = "please fill"
        }
        
        
        
        setError(validation)

        if(Object.keys(validation).length === 0 && formData.password == formData.confirmPassword){
            alert("Form Submitted Successfully")
            console.log(formData)
        }
        setFormData(" ")

    }
  return (
    <>
        
        <div className=' w-full h-full flex justify-center items-center'>
            
            <div className='mt-10 sm:mt-0'>
                <div className='flex justify-center items-center flex-col'>
                  <div> 
                        <img src="https://tse3.mm.bing.net/th?id=OIP.NMdLEWm-nmHAplmpcmwnNgAAAA&pid=Api&P=0&h=180" alt="" />
                  </div> 
                  <div> <h1 className='text-3xl mt-2 font-bold'>Form Validation</h1> </div> 
                </div>
                <div className='mt-4'>
                    <form onSubmit={handleClick} action="" method="" >
                        <div className='grid grid-rows-2 sm:grid-cols-2 sm:gap-10 gap-4 font-semibold items-center justify-center'>
                            <div  >
                                <label htmlFor="">First Name</label> <br />
                                <input type="text" className= {(error.fname) ? 'sm:p-3 p-1 w-full sm:w-[250px] border-2 border-red-300' 
                                : 'sm:p-3 p-1 w-full sm:w-[250px] border border-black'}
                                name = "fname" onChange={handleChange}
                                  
                                />
                                {error.fname && <div className='text-red-700'>{error.fname}</div> }
                                </div>
                            <div>
                                <label htmlFor="">Last Name</label> <br />
                                <input type="text" className= {(error.lname) ? 'sm:p-3 p-1 w-full sm:w-[250px] border-2 border-red-300' 
                                : 'sm:p-3 p-1 w-full sm:w-[250px] border border-black'}
                                name = "lname" onChange={handleChange} />
                                 {error.lname && <div className='text-red-700'>{error.lname}</div>}
                                 </div>
                            <div>
                                <label htmlFor="">Email</label> <br />
                                <input type="email" className= {(error.email) ? 'sm:p-3 p-1 w-full sm:w-[250px] border-2 border-red-300' 
                                : 'sm:p-3 p-1 w-full sm:w-[250px] border border-black'}
                                name = "email" onChange={handleChange} />
                                 {error.email && <div className='text-red-700'>{error.email}</div>}
                                 </div>
                            <div>
                                <label htmlFor="">password</label> <br />
                                <input type="password" className= {(error.password) ? 'sm:p-3 p-1 w-full sm:w-[250px] border-2 border-red-300'
                                 : 'sm:p-3 p-1 w-full sm:w-[250px] border border-black'}
                                 name = "password" onChange={handleChange} />
                                 {error.password && <div className='text-red-700'>{error.password}</div>}
                                </div>

                                <div>
                                <label htmlFor=""> confirm password</label> <br />
                                <input type="password" className= {(error.confirmPassword) ? 'sm:p-3 p-1 w-full sm:w-[250px] border-2 border-red-300'
                                 : 'sm:p-3 p-1 w-full sm:w-[250px] border border-black'}
                                 name = "confirmPassword" onChange={handleChange} />
                                 {error.confirmPassword && <div className='text-red-700'>{error.confirmPassword}</div>}
                                </div>
                            
                            <div><button className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] bg-green-400 sm:rotate-[20deg] font-bold text-[12px] sm:text-[18px]  text-white
                            relative sm:left-10 rounded-full sm:rounded-none'>Submit</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Form
