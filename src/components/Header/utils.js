import React from "react"

import compose from "lodash/fp/compose"
import filter from "lodash/fp/filter"
import get from "lodash/fp/get"

import Anchor from "./Anchor"
import AnchorMenu from "./AnchorMenu"

const activeStyle = {
  fontWeight: "bold",
  textDecoration: "none",
  color: "black",
}

export const isActive = ({ isCurrent, isPartiallyCurrent, href }) => {
  const show =
    (isPartiallyCurrent && href !== "/") || (isCurrent && href === "/")
  return show
    ? {
        style: activeStyle,
      }
    : {}
}

export const menuIsActive = label => {
  if (typeof window !== "undefined") {
    const paths = window.location.pathname.split("/")
    return paths[1].toLowerCase() === label.toLowerCase() ? activeStyle : {}
  }
  return {}
}

export const getImageFromData = get("file.childImageSharp.fluid")
export const getLinksFromData = compose(
  filter(item => !item.subPaths),
  get("site.siteMetadata.links")
)
export const getMenusFromData = compose(
  filter(item => item.subPaths),
  get("site.siteMetadata.links")
)

export const getDesktopLinks = (links, menus) => {
  const linkComponents = links.map(item => (
    <Anchor key={item.path} item={item} />
  ))
  const menuComponents = menus.map(item => (
    <AnchorMenu key={item.label} items={item.subPaths} label={item.label} />
  ))
  return menuComponents.reduce((acc, curr) => {
    acc.splice(1, 0, curr)
    return acc
  }, linkComponents)
}

export const getMobileLinks = (links, menus, onClick) => {
  const linkComponents = links.map(item => (
    <Anchor key={item.label} item={item} onClick={onClick} pad="medium" />
  ))
  const menuComponents = menus.map(item => (
    <AnchorMenu
      key={item.label}
      items={item.subPaths}
      label={item.label}
      onMenuItemClick={onClick}
      pad="medium"
    />
  ))
  return menuComponents.reduce((acc, curr) => {
    acc.splice(1, 0, curr)
    return acc
  }, linkComponents)
}
