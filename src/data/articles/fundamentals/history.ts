import { Article } from "../articleTypes";

export const historyArticle: Article = {
  id: "history",
  topicSlug: "fundamentals",
  subtopicSlug: "history",

  title: "A Brief Historical Perspective",
  description:
    "The best way to understand something is by looking at the history of it, this article covers a brief overview of the history of development of computers as one must ask why a computer was invented at all? what was it that drove researchers at that time to build such a machine?. Questions like this advent curiousity in the reader and also increases attention for learning things.",

  lastUpdated: "2026-07-29",
  readTime: 10,
  tags: ["history"],

  introduction: `Study the past if you would define the future  ~ Confucius, 460 BCE`,

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: `
        <p>
  We humans have always worked on betterment of our lives and since every problem is the advent of a new invention, early thinkers encountered or revolved around a major question that led to the need for such a machine that we call a COMPUTER
</p>

<br>

<p>
  Ofcourse we abstract our incapabilities as "betterment of our lives". ('<b>ABSTRACTION</b>' hmmm interesting word isn't it)
</p>

<br>

<p>
  <b><i>
    How can we make calculations and information processing faster, more accurately, and without relying on human mental effort?
  </i></b>
</p>

<br>

<p>
  Getting to computer was not a simple eureka moment, it started with simple mechanical devices and slowly led to what we see today.
</p>

<br>

<ul>

  <li>
    <b>The ABACUS : </b> One of the earliest calculating machine, it was developed nearly 2400 years ago and still taught to children to improve calculation and problem solving skills. It allowed addidtion, subtraction, multiplication and division but waas still controlled completely by a human.
  </li>

  <br>

  <div style="text-align: center;">
    <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/RomanAbacusRecon.png" 
    alt="Roman Abacus" 
    style="max-width: 100%; height: auto;">
    <br>
    <i>*Roman Abacus</i>
  </div>

  <br>

  This led to another idea :

  <br>

  <div style="text-align:center;">
    <h3>
      <b><i>What if a machine could perform calculations by itself ?</i></b>
    </h3>
  </div>

  <br>

  <li>
    <b>PASCALINE : </b> Developed by <b>Blaise Pascal in 1645</b> was a simple mechanical calculator that he made to reduce the tiring work of taxes calculation for his accountant father.
  </li>

  <br>

  <div style="text-align: center;">
    <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/Pascaline.jpg" 
    alt="Pascaline" 
    style="max-width: 100%; height: auto;">
    <br>
    <i>*Pascaline</i>
  </div>

  <br>

  <li>
    <b>Difference Engine :</b> Developed by Charles Babbage in 1822, It was designed to automatically calculate mathematical tables.
  </li>

  <br>

  <div style="text-align:center;">
    <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/Babbage_Difference_Engine.jpg" 
    alt="Babbage Difference Engine" 
    style="max-width:600px; height:auto; width:100%;">
    <br>
    <i>*Difference Engine</i>
  </div>

  <br>

  <li>
    <b>Analytical Engine :</b> Designed by Charles Babbage, it was a mechanical computer having concepts of modern CPUs like Memory, Programs etc.
  </li>

  <br>

  <div style="text-align:center;">
    <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/Babbages_Analytical_Engine.jpg" 
    alt="Babbage Analytical Engine" 
    style="max-width:600px; height:auto; width:100%;">
    <br>
    <i>*Babbage Analytical Engine</i>
  </div>

  <br>

  <div style="text-align:center;">
    <i>
      But all of these were based on mechanical gears which were driven manually by a human and were too slow. So another question was pondered
      <h3>
        <b>"Can we use Electricity to control mechanical switches ?"</b>
      </h3>
    </i>
  </div>

  <br>

  <li>
    <b>Zuse Z3 :</b> Designed by Konrad Zuse, is a German electromechanical computer having 2600 <b>electromagnetic relays</b>, binary arithmetic and punched tape programming.
  </li>

  <br>

  <div style="text-align:center;">
    <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/Z3.jpg" 
    alt="Babbage Analytical Engine" 
    style="max-width:600px; height:auto; width:100%;">
    <br>
    <i>*The Z3 Computer</i>
  </div>

  <br>

  <div style="text-align:center;">
    <i>
      But Moving parts eventually failed due to wear and slow switching sppeds and size apparently, humans needed a switch with no moving parts. So another question was pondered by the people
      <h3>
        <b>"Can Electricity itself act as a switch ?"</b>
      </h3>
    </i>
  </div>

  <br>

  <li>
    <b>Colossus computer :</b> Designed by Tommy Flowers, is a British computer having more than 1500 <b>Vacuum Tubes</b>, used to decipher high level german army messages during world war 2, it was based on <b>cryptanalysis of the Lorenz cipher</b>.
  </li>

  <br>

  <div style="text-align:center;">
    <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/Colossus.png" 
    alt="Babbage Analytical Engine" 
    style="max-width:600px; height:auto; width:100%;">
    <br>
    <i>*The Colossus Computer</i>
  </div>

  <br>

  <li>
    <b>Electronic Numerical Integrator and Computer(ENIAC):</b> Designed by John Mauchly and J. Presper Eckert, the first programmable, electronic, general-purpose digital computer, completed in 1945. It has 17,468 vacuum tubes, 70,000 resistors, 10,000 capacitors, kilometers of wiring and can perform 5000 additions per second.
  </li>

  <br>

  <div style="text-align:center;">
    <img src="${process.env.PUBLIC_URL}/images/fundamentals/history/ENIAC.jpg" 
    alt="Babbage Analytical Engine" 
    style="max-width:600px; height:auto; width:100%;">
    <br>
    <i>*The ENIAC</i>
  </div>

  <br>

  <div style="text-align:center;">
    <i>
      Vacuum tubes came with their own problems more power consumption, large size of tubes and less reliability as tubes failed more often. So another question arised
      <h3>
        <b>"Can we control electricity using a tiny solid material instead of a hot glass tube ?"</b>
      </h3>
    </i>
  </div>

  <br>

</ul>
      `,
    },
  ],

  nextArticle: {
    slug: "/topic/fundamentals/transistors",
    title: "Transistors",
  },
};
