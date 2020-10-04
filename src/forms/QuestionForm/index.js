import React, { useContext } from "react"
import PropTypes from 'prop-types';
import { Form, Field, Formik } from "formik"
import { Box, Button, TextArea, ResponsiveContext } from "grommet"

import validationSchema from "./validationSchema"
import { FormikInput } from "../components"

const QuestionForm = ({ onSubmit }) => {
	const size = useContext(ResponsiveContext);
	return (
		<Box width={size !== 'small' ? 'large' : undefined}>
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
										{
											size === 'small' && (
												<Box
													flex
													height='small'
												>
													<Field
														as={TextArea}
														name='question'
														placeholder='Ask us anything!'
														onChange={handleChange}
														fill
													/>
												</Box>
											)
										}
										<Button
											type='submit'
											label='Submit'
											primary
										/>
									</Box>
										{
											size !== 'small' && (
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
											)
										}
									</Box>
							</Form>
						)
					}
				}
			</Formik>
		</Box>
	)
}

QuestionForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default QuestionForm
