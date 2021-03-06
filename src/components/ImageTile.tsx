import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { cn } from '../utils/classnames';
import { device } from '../utils/styleguide';

type Props = {
  /** the source url of the image */
  src: string;
  /** the alt text for the image */
  alt: string;
  /** child nodes to render inside of the button (helpful for banners, markers, etc) */
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ImageTile = ({ src, alt, children, className, ...props }: Props): ReactElement => {
  return (
    <TileButton {...props} className={cn('lwc-image-tile lwc-tile', className)}>
      <TileImage className="lwc-tile-image" src={src} alt={alt} />
      {children}
    </TileButton>
  );
};


const TileButton = styled.button`
  display: block;
  padding: 0;
  border: 0 none;
  background: none;

  border-radius: 4px;
  box-shadow: 0 2px 8px -2px rgb(45 55 72 / 25%);

  &:hover {
    cursor: pointer;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: all .1s ease-out;

    &:hover {
      transform: scale(1.12);
    }
  }

  @media (hover: none), (hover: on-demand) {
    &:hover {
      transform: unset;
    }
  }

  .lwc-selected & {
    box-shadow:
      0 0 0 4px #38b2ac,
      0 2px 8px 2px rgb(45 55 72 / 25%);
  }
`;

const TileImage = styled.img`
  height: 128px;
  border-radius: 4px;
  vertical-align: top;

  @media ${device._600} {
    height: 144px;
  }

  @media ${device._900} {
    height: 176px;
  }

  @media ${device._1024} {
    height: 200px;
  }
`;
