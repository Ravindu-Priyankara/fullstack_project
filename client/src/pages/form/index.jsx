import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material'
import { Formik } from "formik";
import * as yup from 'yup';
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import axios from 'axios';

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    /*const handleFormSubmit = (values) => {
        console.log(values);
    };*/
    const initialValues = {
        id: "",
        name: "",
        email: "",
        phone_number: "",
        address: "",
        age: "",
        level: '',
        add_or_remove: "",
        city: "",
        zip: "",
        username: '',
        password: '',
    };
    const checkoutSchema = yup.object().shape({
        name:yup.string().required("Required"),
        email:yup.string().email("Invalid email!").required("Required"),
        phone_number:yup.string().matches(phoneRegExp, "phone number is not valid!").required("Required"),
        address:yup.string().required("Required"),
        zip:yup.string().required("Required"),
        city:yup.string().required("Required"),
        add_or_remove:yup.string().required("Required"),
        level:yup.string().required("Required"),
        id:yup.string().required("Required"),
        username:yup.string().required("Required"),
        password:yup.string().required("Required"),

    })

    const handleFormSubmit = async (values) => {
      try {
        // Send a POST request to the server's API endpoint
        await axios.post('http://localhost:5001/record/insertData', values);
  
        console.log('Data inserted successfully');
      } catch (error) {
        console.error('Error inserting data:', error);
      }
    };


    return (
        <Box m="20px">
          <Header title="CREATE USER" subtitle="Create a New User Profile" />
    
          <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit,}) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="ID"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.id}
                    name="id"  // Fix: Ensure the 'name' property matches the field name
                    error={touched.id && !!errors.id}
                    helperText={touched.id && errors.id}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"  // Fix: Ensure the 'name' property matches the field name
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    name="username"
                    error={touched.username && !!errors.username}
                    helperText={touched.username && errors.username}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="password"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Contact Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone_number}
                    name="phone_number"
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    name="address"
                    error={!!touched.address1 && !!errors.address1}
                    helperText={touched.address1 && errors.address1}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Age"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.age}
                    name="age"
                    error={!!touched.address2 && !!errors.address2}
                    helperText={touched.address2 && errors.address2}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Level"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.level}
                    name="level"
                    error={!!touched.address2 && !!errors.address2}
                    helperText={touched.address2 && errors.address2}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Add or Remove"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.add_or_remove}
                    name="add_or_remove"
                    error={!!touched.address2 && !!errors.address2}
                    helperText={touched.address2 && errors.address2}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="City"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.city}
                    name="city"
                    error={!!touched.city && !!errors.city}
                    helperText={touched.city && errors.city}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Zip"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.zip}
                    name="zip"  // Ensure the 'name' property matches the field name
                    error={touched.zip && !!errors.zip}
                    helperText={touched.zip && errors.zip}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New User
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      );
}

export default Form