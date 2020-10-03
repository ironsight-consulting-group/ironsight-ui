import React from "react"
import Anchor from "./Anchor"

export const isActive = ({ isCurrent, isPartiallyCurrent, href }) => {
  const show = (isPartiallyCurrent && href !== '/') || (isCurrent && href === '/');
  return show ? {
    style: {
      fontWeight: 'bold',
      textDecoration: 'none',
      color: 'black'
    }
  } : {};
};

export const getDesktopLinks = links => {
  const linkComponents = links.map(item => (
    <Anchor item={item}/>
  ));
  // TODO: add Services dropdown into index 1 of this array
  // arr.splice(index, 0, item);
  return linkComponents;
}

export const getMobileLinks = links => {
  const linkComponents = links.map(item => ({
    key: item.path,
    label: (
      <Anchor
        item={item}
        pad={{
          horizontal: 'medium',
          vertical: 'small',
        }}
      />
    ),
  }))
  // TODO: add Services dropdown into index 1 of this array
  // arr.splice(index, 0, item);
  return linkComponents;
};
