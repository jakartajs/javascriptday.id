import React from 'react'
import styled from '@emotion/styled'
import { widths, colors } from '../../styles/variables'
import SpeakerCard from './SpeakerCard'

const DataSpeaker = [
  {
    name: 'Ariya Hidayat',
    company: 'Technology Leader Hyperjump',
    photo: '/images/speakers/ariya.jpg',
    type: 'keynote'
  },
  {
    name: 'Irvin Hutagalung',
    company: 'Cloud Solution Architect Microsoft',
    photo: '/images/speakers/irvin.jpeg',
    type: 'keynote'
  },
  {
    name: 'Riza Fahmi',
    company: 'Curriculum Director at Hacktiv8',
    photo: '/images/speakers/riza-fahmi.jpeg',
    type: 'keynote'
  },
  {
    name: 'Alex Lakatos',
    company: 'JavaScript Developer Advocate for Nexmo',
    photo: '/images/speakers/alex.png',
    type: 'speaker'
  },
  {
    name: 'Jecelyn Yeen',
    company: 'Developer Expert Web, Angular Google Developer Expert',
    photo: '/images/speakers/jecelin.jpeg',
    type: 'speaker'
  },
  {
    name: 'Galih Sahid',
    company: 'Data Engineer Gojek',
    photo: '/images/speakers/galuh.jpg',
    type: 'speaker'
  },
  {
    name: 'Ida Mahiswari',
    company: 'Recruitment & Employer Branding Lead Shoppe',
    photo: '/images/speakers/ida_mahes.png',
    type: 'MC'
  }
]

const renderSpeaker = type => {
  const filter = DataSpeaker.filter(data => data.type === type)
  return filter.length !== 0 ? (
    <SpeakerList>
      {filter.map(data => (
        <SpeakerCard name={data.name} company={data.company} imageSharp={data.photo}></SpeakerCard>
      ))}
    </SpeakerList>
  ) : null
}

const SpeakerSection = ({ props }) => {
  return (
    <Root>
      <SpeakerHeading>Speakers</SpeakerHeading>
      <SpeakerSubheading>Keynote Speaker</SpeakerSubheading>
      {renderSpeaker('keynote')}
      <SpeakerSubheading>Confirmed Speaker</SpeakerSubheading>
      {renderSpeaker('speaker')}
      <SpeakerSubheading>Master of Ceremony</SpeakerSubheading>
      {renderSpeaker('MC')}
    </Root>
  )
}

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
`

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
`

const Root = styled('section')`
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  width: 60%;
`

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
`

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
`

const SpeakerList = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default SpeakerSection
