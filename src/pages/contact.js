import React, { useState, useContext } from "react"
import { Anchor, Box, Heading, Text, ResponsiveContext } from "grommet"
import { MailOption, PhoneVertical, Map } from "grommet-icons"

import { QuestionForm } from "../forms"
import PageWrapper from "../components/PageWrapper"

const CONTACT_INFO = [
  {
    label: "info@ironsightgroup.com",
    href: "mailto:info@ironsightgroup.com",
    icon: <MailOption color="blue-3" />,
  },
  // Example of additional contact items in the list
  // {
  //   label: '631-792-2547',
  //   href: 'tel:6317922547',
  //   icon: <PhoneVertical color='blue-3' />,
  // },
  // {
  //   label: '99 Hudson St 5th floor, New York, NY, 10013 ',
  //   href: 'https://www.google.com/maps/place/99+Hudson+St+5th+floor,+New+York,+NY+10013/data=!4m2!3m1!1s0x89c25a1fd68cc8ad:0x4d41ade64a165c5d?sa=X&ved=2ahUKEwjXjfKC2b6AAxUqN1kFHUJLD6oQ8gF6BAgXEAA&ved=2ahUKEwjXjfKC2b6AAxUqN1kFHUJLD6oQ8gF6BAgYEAI',
  //   icon: <Map color='blue-3' />,
  // },
]

const Contact = () => {
  // Comment back in to add email question form
  // const size = useContext(ResponsiveContext);
  // const [submitMessage, setSubmitMessage] = useState(undefined);
  //
  // const handleSubmit = (values, { resetForm }) => {
  //   // TODO: clean input and send email
  //   resetForm();
  //   setSubmitMessage("Thank you! We will get back to you within 2 business days.")
  //   setTimeout(() => setSubmitMessage(undefined), 3000);
  // };

  return (
    <PageWrapper title="Contact Us" showBackground={true}>
      <Box flex={false}>
        <Box>
          <Heading level={2} margin={{ bottom: "xsmall", top: "none" }}>
            Contact us anytime, day or night.
          </Heading>
          <Text margin="none">We love talking turkey</Text>
        </Box>
        <Box margin={{ top: "large" }} gap="medium">
          {CONTACT_INFO.map(item => (
            <Box
              key={item.label}
              style={{
                display: "inline-block",
                width: "100%",
              }}
            >
              <Anchor color="black" target="_blank" {...item} />
            </Box>
          ))}
        </Box>
      </Box>
      {/*<Box margin={{ top: 'small' }}>*/}
      {/*<Box align='center'>*/}
      {/*<Heading level={3}>Have a question?</Heading>*/}
      {/*<QuestionForm onSubmit={handleSubmit} />*/}
      {/*{submitMessage && (*/}
      {/*<Text margin={{ top: 'medium' }}>{submitMessage}</Text>*/}
      {/*)}*/}
      {/*</Box>*/}
      {/*</Box>*/}
    </PageWrapper>
  )
}

export default Contact
