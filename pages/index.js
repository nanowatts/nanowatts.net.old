import Layout from "/components/layout"
import Section from "/components/section"
import Head from 'next/head'


export default function Home() {
  return (
  <Layout>
      <div className="grid max-w-full gap-16 auto-rows-auto">
      <div>
      <p className="mt-8 md:mt-4 text-primary dark:text-darkPrimary">
          
          I'm currently working with the good people of <a className="text-primary dark:text-darkPrimary" href="https://www.98point6.com" target="_blank" rel="noopener noreferrer">98point6</a> as a Senior Solutions Architect. 
          
          Before 98point6, I worked on data and integrations projects for <a className="text-primary dark:text-darkPrimary" href="https://www.sharecare.com" target="_blank" rel="noopener noreferrer">Sharecare</a> and <a className="text-primary dark:text-darkPrimary" href="https://www.elationhealth.com" target="_blank" rel="noopener noreferrer">Elation Health</a>.
         
         Healthcare in the United States is fundamentally broken and I'm grateful to spend the majority of my time chipping away at hard problems in this space.
         
      <br></br><br></br>
         I'm also obsessed with mountains, cocktails, and the wild west.
         </p>
      </div>

       
    <Section title="Find Me">
      <div className="flex flex-row self-stretch justify-between sm:justify-start ">
      <a className="sm:mr-8 text-primary dark:text-darkPrimary" href="mailto:justin@nanowatts.net" 
        target="_blank" rel="noopener noreferrer"> Email </a>
      <a className="sm:mr-8 text-primary dark:text-darkPrimary" href="https://www.linkedin.com/in/nanowatts/" 
        target="_blank" rel="noopener noreferrer"> Resume </a>
      <a className="sm:mr-8 text-primary dark:text-darkPrimary" href="https://github.com/nanowatts" 
        target="_blank" rel="noopener noreferrer"> GitHub </a>
      <a className="sm:mr-8 text-primary dark:text-darkPrimary" href="https://twitter.com/nanowatts" 
        target="_blank" rel="noopener noreferrer"> Twitter </a>
      </div>
    </Section>
      </div>
  </Layout>
  )
}
