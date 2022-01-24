import React,{Component} from 'react'
import {Image}  from 'react-bootstrap'
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
   } from 'vertical-timeline-component-react';
//npm install --save vertical-timeline-component-react

const customTheme = {
    yearColor: '#405b73',
    lineColor: '#d0cdc4',
    dotColor: '#262626',
    borderDotColor: '#d0cdc4',
    titleColor: '#405b73',
    subtitleColor: '#bf9765',
    textColor: '#262626',
   };

export default class WebCamRecord extends Component {
    render() {
        return (
            <>
            <Timeline theme={customTheme} dateFormat='ll'>
                <Container>
                <YearContent startDate='2020/07/01' currentYear />
                <BodyContent>
                <Section title='Title'>
                <Image src="./img/1.jpg" responsive />
                <Description variant='subtitle' text='Subtitle' />
                <Description text='Description' />
                <Description text='Another description' />
                </Section>

                <Section title='Another title'>
                <Description text='Description' />
                <Description text='Another description' />
                </Section>
                </BodyContent>
                </Container>
            </Timeline>,
                </>
            )
    }
    
}
