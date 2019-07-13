import React from 'react';
import styled from '@emotion/styled';
import { widths, colors } from '../../styles/variables';

const SpeakerSection = ({ props }) => {
  return (
    <Root>
      <SpeakerHeading>Speakers</SpeakerHeading>
      <SpeakerSubheading>Keynote Speaker</SpeakerSubheading>
      <img src={'/images/speakers/temp-keynote.png'} />
      <SpeakerSubheading>Confirmed Speaker</SpeakerSubheading>
      <img src={'/images/speakers/temp-confirmed.png'} />
      <SpeakerSubheading>Master of Ceremony</SpeakerSubheading>
      <img style={{ width: '50%' }} src={'/images/speakers/temp-mc.png'} />
    </Root>
  );
};

const SpeakerSubheading = styled('h2')`
  margin-top: 0;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 300;

  &:after {
    display: inline-block;
    margin-left: 8px;
    color: ${colors.red01};
    font-weight: 400;
    content: '/';
  }
`;

const SpeakerHeading = styled('h1')`
  margin-top: 0;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 500;

  &:after {
    display: inline-block;
    margin-left: 8px;
    color: ${colors.red01};
    font-weight: 700;
    content: '/';
  }
`;

const Root = styled('section')`
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  width: 60%;
`;

const Inner = styled('div')`
  width: 100%;
  max-width: ${widths.lg}px;
  margin: 0 auto;
  padding: 36px 24px;
  background-color: ${colors.grey05};
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 48px;
  border-bottom-right-radius: 48px;
  overflow: hidden;
`;

const SectionHeading = styled('h1')`
  margin-top: 0;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 500;

  &:after {
    display: inline-block;
    margin-left: 8px;
    color: ${colors.red01};
    font-weight: 700;
    content: '/';
  }
`;

const SpeakerList = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

export default SpeakerSection;
