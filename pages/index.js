import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../mukadipic.jpg'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mukadi Tshimanga</title>
        
      </Head>

      <main>
        <h1 className="title">
        Mukadi Tshimanga
        </h1>

        <h3 className="description">
         A Great Developer But Greater Man
        </h3>

        <Image
        src={profilePic}
        alt="Picture of Mukadi"
         width={200} automatically provided
         height={200} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

<h1>
  About Mukadi ???
</h1>
<center>
<p>
Dear Sir/Madam <br></br>

My name is Mukadi Tshimanga I grew up  in Witpoortjie Roodepoort but I have relocated to Olivedale Randburg . I am 24 years old, energetic and free spirited with a goal orientated mindset. I obtained my national diploma in Business information technology at the University of Johannesburg in 2019. I have obtained an advance diploma in Business Information technology at University of Johannesburg in the year 2020. In 2021 I completed a work in learning program with a company called Dynamic DNA(randburg) where I obtain two Microsoft certificates one For Azure Fundamentals and another for Software development fundamentals. I also wrote the Microsoft Azure AI fundamental exam independently and obtained a Microsoft certification for AI Fundamentals. <br></br><br></br>

My education has allowed me to have a solid foundation and understanding of 	programming concepts such as development of algorithms and Project 	Management. I believe that I would work well in a project or consulting 	environment due to the experience I managed to obtain thus far.<br></br><br></br>

For my year project in 2020 was a system for a company which I made use of html5, Css, php, javascript, JSON, ajax bootstrap 4, Github and MySql. I do not have industry experience but I have a student mentality and am able to grasp new concepts quickly.  I have 5 years experience in sales and promotions and have learned skills which can also be applied in different areas of life and business. I am punctual, Trustworthy and Reliable even under pressure or during stressful situations I still bring results.I am thirift store enthusiast who enjoys buying vintage designer brands and repurposing old clothing to make something new. I care alot about the planet thats why am trying to promote sustainable fashion for all I have a great networking ability and can attract new customers with ease. <br></br> <br></br>



I believe I will add significant value to your team due to my experience and my passionate desire to work with pioneering teams. I would love to be part of a ground-breaking projects as I am always looking for better ways to do things with enthusiasm. I believe Sovtech is great place for me to grow and showcase my abilities as Sovtech is providing a platform for graduates who are less exprienced but show great potential to become leaders in the industry <br></br><br></br>

Thank you for considering my application and I look forward to a desirable response. <br></br><br></br>

Kind Regards <br></br>

Mukadi Tshimanga
</p>
</center>


     
          
      
     
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
