import React, { useContext, useState } from "react"
import { Anchor, Box, Heading, ResponsiveContext, Text } from "grommet"
import { MailOption, PhoneVertical, Map } from 'grommet-icons';

import { QuestionForm } from "../forms"

const CONTACT_INFO = [
  {
    label: 'info@ironsightcg.com',
    href: 'mailto:info@ironsightcg.com',
    icon: <MailOption color='blue-3' />,
  },
  {
    label: '412-305-3872',
    href: 'tel:4123053872',
    icon: <PhoneVertical color='blue-3' />,
  },
  {
    label: '1206 Pomona St, Fort Collins, CO 80521',
    href: 'https://www.google.com/maps/place/1206+Pomona+St,+Fort+Collins,+CO+80521/@40.5972173,-105.1008937,17z/data=!3m1!4b1!4m5!3m4!1s0x87694a73b065dad3:0x6998078ca9fff80d!8m2!3d40.5972132!4d-105.098705',
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
    <Box flex={false} fill={true}>
      <Box flex={false} margin={{ horizontal: 'large' }}>
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
              <Box
                key={item.label}
                style={{
                  display: 'inline-block',
                  width: '100%'
                }}
              >
                <Anchor
                  color='black'
                  target='_blank'
                  {...item}
                />
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
