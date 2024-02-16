import { Avatar } from '@mui/material';
import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required"),
});

const handleSubmit = (values) => {
    console.log("values", values);
};

const HomeSection = () => {
    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
        },
        onSubmit: handleSubmit,
        validationSchema,
    });


    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 textxl font-bold opacity-90'>Home</h1>
            </section>
            <section className={'pb-10'}>
                <div>
                    <Avatar alt="username" src="data:image/jpeg;base64,/9j=" />
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="content"
                                    placeholder="What is happening"
                                    className={'boarder-none outline-none text-xl bg-transparent'}
                                    {...formik.getFieldProps("content")}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default HomeSection