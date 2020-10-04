import React, { useContext, useState } from "react"
import { Box, Heading, ResponsiveContext, Text } from "grommet"
import { MailOption, PhoneVertical, Map } from 'grommet-icons';

import { QuestionForm } from "../forms"

const CONTACT_INFO = [
  {
    label: 'info@ironsightcg.com',
    icon: <MailOption color='blue-3' />,
  },
  {
    label: '412-305-3872',
    icon: <PhoneVertical color='blue-3' />,
  },
  {
    label: '1208 Laplace St, New Fort Collins, CY 80543',
    icon: <Map color='blue-3' />,
  },
];

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
      <Box margin={{ horizontal: 'large' }}>
        <Box>
          <Heading level={2} margin={{ bottom: 'xsmall', top: 'none' }}>
            Contact us anytime, day or night.
          </Heading>
          <Text margin='none'>
            We love talking turkey
          </Text>
        </Box>
        <Box margin={{ top: 'large' }} gap='medium'>
          {
            CONTACT_INFO.map(item => (
              <Box direction='row' gap='small'>
                {item.icon}
                <Text weight='bold'>{item.label}</Text>
              </Box>
            ))
          }
        </Box>
      </Box>
      <Box margin={{ top: 'large' }}>
        <Box align='center'>
          <Heading level={3}>Have a question?</Heading>
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
