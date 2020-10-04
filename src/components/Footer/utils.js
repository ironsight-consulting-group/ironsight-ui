import get from "lodash/fp/get"

export const getFooterLinksFromData = get("site.siteMetadata.footer.links");
export const getCopyrightFromData = get("site.siteMetadata.footer.copyright");
