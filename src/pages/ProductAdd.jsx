import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {Button, FormField, Label} from "semantic-ui-react";
import CampTextInput from "../utilities/customFormControls/CampTextInput";

function ProductAdd() {

    const initialValues = {productName: "", unitPrice: 0}
    const validationSchema = yup.object({
        productName: yup.string().required("Ürün adı zorunlu"),
        unitPrice: yup.number().required("Ürün fiyatı zorunlu")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <CampTextInput name="productName" placeholder='Ürün Adı'></CampTextInput>
                    <CampTextInput name="unitPrice" placeholder='Ürün Fiyatı'></CampTextInput>

                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    );
}

export default ProductAdd;
