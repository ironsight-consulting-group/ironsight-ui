import React from "react"
import PropTypes from 'prop-types';
import { Form, Field, Formik } from "formik"
import { Box, Button, TextArea } from "grommet"

import validationSchema from "./validationSchema"
import { FormikInput } from "../components"

const QuestionForm = ({ onSubmit }) => (
	<Formik
		initialValues={{
			name: '',
			email: '',
			phone: '',
			question: '',
		}}
		validationSchema={validationSchema}
		validateOnBlur={false}
		validateOnChange={false}
		onSubmit={onSubmit}
	>
		{
			({ handleChange }) => {
				return (
					<Form>
						<Box direction='row' gap='medium'>
							<Box gap='small'>
								<FormikInput
									name='name'
									label='Name'
								/>
								<FormikInput
									name='email'
									label='Email (required)'
								/>
								<FormikInput
									name='phone'
									label='Phone'
								/>
								<Button
									type='submit'
									label='Submit'
									primary
								/>
							</Box>
							<Box
								flex
								width={{
									max: "500px"
								}}
							>
								<Field
									as={TextArea}
									name='question'
									placeholder='Ask us anything!'
									onChange={handleChange}
									fill
								/>
							</Box>
						</Box>
					</Form>
				)
			}
		}
	</Formik>
)

QuestionForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default QuestionForm
