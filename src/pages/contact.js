import React, { useContext, useState } from "react"
import { Box, ResponsiveContext, Text } from "grommet"
import { QuestionForm } from "../forms"

const Contact = () => {

  const size = useContext(ResponsiveContext);
  const [submitMessage, setSubmitMessage] = useState(undefined);

  const handleSubmit = (values, { resetForm }) => {
    // TODO: clean input and send email
    resetForm();
    setSubmitMessage("Thank you! We will get back to you within 2 business days.")
    setTimeout(() => setSubmitMessage(undefined), 3000);
  };

  return (
    <Box fill={true}>
      <Box>
        <Box align='center'>
          <QuestionForm onSubmit={handleSubmit} />
          {submitMessage && (
            <Text margin={{ top: 'medium' }}>{submitMessage}</Text>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Contact
