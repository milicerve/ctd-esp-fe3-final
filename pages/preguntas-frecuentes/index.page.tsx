import React from 'react'
import { NextPage, GetStaticProps, } from 'next'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import BodySingle from "components/layouts/body/single/body-single";
import { FaqsType } from 'interface/faqs';


interface Props {
    faqs: FaqsType[]
}

const Faqs: NextPage<Props> = ({ faqs }) => {
    return (
      <Container>
        <BodySingle title={"Preguntas Frecuentes"}>
          {faqs.map(faq => {
            return (
              <Accordion  key={faq.id}>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                  >
                      <Typography>{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography>
                          {faq.answer}
                      </Typography>
                  </AccordionDetails>
              </Accordion>)        
          })}
        </BodySingle>
      </Container>
    )
};


export const getStaticProps: GetStaticProps = async () => {

    const response = await fetch('https://ctd-esp-fe3-final-three-fawn.vercel.app/api/faqs')
    const faqs = await response.json()

    return {
        props: {
            faqs
        }
    }
}

export default Faqs;