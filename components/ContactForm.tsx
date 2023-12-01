"use client";

import { SubmitHandler, useForm } from "react-hook-form";

interface ContactFormInput {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInput>();
    const onSubmit: SubmitHandler<ContactFormInput> = async (data) => {
        console.log(data, "formData");
        const response = await fetch(`api/contact`, { method: 'POST', body: JSON.stringify(data) });
        const result = await response.json();
        console.log(result, "ResultResultResultResultResult")
    }
    return (
        <div className="flex flex-col text-center justify-center bg-slate-800 h-full w-full lg:h-[100vh]">
            <h1 className="text-center text-white font-bold text-2xl mt-5">CONTACT</h1>
            <div className="self-center w-12 text-white border-b-4 py-2 mb-10"></div>
            <p className="text-primary-color mx-5">If you want to get in touch, submit the form below or send an e-mail to <span className="hover:bg-white">koushik.vanama@gmail.com</span> and let's talk.</p>
            <div className="form-wrapper flex justify-center gap-y-2 my-8">
                <form className="flex flex-col gap-y-1 w-[25rem] items-center" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Your name" className="p-1 w-full outline-none bg-none border-2 border-gray-600 focus:border-primary-color placeholder:text-black" autoComplete="off" {...register("name", { required: true, minLength: 1, maxLength: 20 })} />
                    {errors.name?.type === 'required' && <p className="flex justify-start w-full text-white -mt-1 bg-primary-color text-xs px-1">Name is required</p>}
                    <input placeholder="Your e-mail" className="p-1 w-full outline-none bg-none border-2 border-gray-600 focus:border-primary-color placeholder:text-black" autoComplete="off" {...register("email", {
                        required: true, minLength: 1, maxLength: 20, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })} />
                    {errors.email?.type === 'required' && <p className="flex justify-start w-full text-white -mt-1 bg-primary-color text-xs px-1">E-mail is required</p>}
                    {errors.email?.message && <p className="flex justify-start w-full text-white -mt-1 bg-primary-color text-xs px-1">E-mail is not valid</p>}
                    <textarea placeholder="Your message" className=" w-full p-2 outline-none bg-none border-2 border-gray-600 focus:border-primary-color min-h-[8rem] placeholder:text-black" autoComplete="off" {...register("message", { required: false, minLength: 1 })} />
                    <button className="flex my-5 p-2 justify-center border-2 border-white w-[8rem] text-white hover:bg-primary-color hover:text-slate-900 duration-300" type="submit">SUBMIT</button>
                </form>
            </div>
        </div >
    )
}

export default ContactForm;
