import { Article } from "../articleTypes";

export const LogicGatesArticle: Article = {
  id: "logic-gates",
  topicSlug: "fundamentals",
  subtopicSlug: "logic-gates",

  title: "LOGIC GATES - The Logic Behind All",
  description:
    "So far we understood how we have come from large mechanical switches to transistors and then how these transistors combine to form meaningful operational circuits. Those circuits are yet covered by a new layer of Abstraction termed as 'Logic Gates', These are high level and simple representation of complex CMOS transistor circuits so that its easy to understand operation and easier to design even larger circuits using them.",

  lastUpdated: "2026-07-29",
  readTime: 10,
  tags: ["Logic Gates"],

  introduction: `Computers are composed of nothing more than logic gates stretched out to the horizon in a vast numerical irrigation system  ~ Stan Augarten`,

  sections: [
    {
      id: "overview",
      title: "Overview",
      content: `
        <p>
  As we saw in transistors circuits that can perform different operations like complementing the input or the OR and AND operations that can be performed using network of PMOS and NMOS transistors, Here we look at the logic gates representations of those fundamental circuits.
</p>
<br>
<p>
  These fundamental gates will be used again and again to build combinational or sequential circuits as we will see later on.
</p>
<br>`,
    },

    {
      id: "theory",
      title: "",
      content: `
        <h2>The Truth Table</h2>
        <p>In order to understand the behaviour or the relation between the input and output of a logic gate we need to have some kind of mechanism or some kind pictorial representation of it so that its easy to understand what output will a particular set of input provide for the logic gate under our observation.  </p>
        <p>This mechanism is the <b>' Truth Table '</b></p>
        <p>Let us understand the truth table using a simple example of NOT gate</p>
        <p>The NOT gate or NOT CMOS circuit as we know complements the input i.e. it inverts the input bit</p>
        
        `,
    },
  ],
  nextArticle: {
    slug: "/topic/fundamentals/transistors",
    title: "Transistors",
  },
};
