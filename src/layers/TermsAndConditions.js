import React from "react"
import { Box, Layer, Markdown } from "grommet"

import types from "../state/types"
import { useStateContext } from "../app/context"

const CONTENT = `
## Terms and Conditions ("Terms")

*Last updated: December 6, 2020*

Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the http://www.ironsightgroup.com website (the "Service") operated by IronSight Consulting Group LLC ("us", "we", or "our").

Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.

**By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.**

**Purchases**

If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information or agree to certain conditions relevant to your Purchase.

**Links To Other Web Sites**

Our Service may contain links to third-party web sites or services that are not owned or controlled by IronSight Consulting Group LLC.

IronSight Consulting Group LLC has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that IronSight Consulting Group LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.

**Changes**

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

**Contact Us**

If you have any questions about these Terms, please contact us.
`

const TermsAndConditions = () => {
  const [_, dispatch] = useStateContext()

  return (
    <Layer onClickOutside={() => dispatch({ type: types.CLEAR_LAYER })}>
      <Box overflow="scroll" pad="medium">
        <Markdown>{CONTENT}</Markdown>
      </Box>
    </Layer>
  )
}

export default TermsAndConditions
