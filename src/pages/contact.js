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
  //   label: '75 Merritt St, West Islip, New York 11795',
  //   href: 'https://www.google.com/maps/place/75+Merritt+St,+West+Islip,+NY+11795/@40.6985146,-73.293962,18z/data=!4m13!1m7!3m6!1s0x89e82d4c16456c71:0x63e0eca0bfed444f!2s75+Merritt+St,+West+Islip,+NY+11795!3b1!8m2!3d40.6985126!4d-73.2928677!3m4!1s0x89e82d4c16456c71:0x63e0eca0bfed444f!8m2!3d40.6985126!4d-73.2928677',
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
