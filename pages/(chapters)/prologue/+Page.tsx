import Chapter from "../../../components/Chapter";
import Figure from "../../../components/Figure";
import FigureSet from "../../../components/FigureSet";
import Legend from "../../../components/Legend";

export default function Page() {
  return (
    <Chapter title="Prologue" previous="/" next="chapter1">
      <p>
        What follows is a comprehensive guide to the (first) Sorceress fight in Spyro: Year of the Dragon. 
        I'll isolate each vehicle phase and address any pertinent situational strategies.
      </p>
      <p>
        Each chapter will include images and videos that demonstrate various rules and strategies 
        for the fight. Some images and videos will be grouped together, with controls that allow
        you to switch freely between them. Try it with the figures below.
      </p>
      <FigureSet>
        <Figure imgur="TB9i4p7" caption="A top-down view of the Sorceress's Lair." alt=""/>
        <Figure youtube="ZG4C0uzFLIg" caption="Spooky scary skeletons." alt={`Disney cartoon - "The Skeleton Dance" in its entirety.`}/>
      </FigureSet>
      <p>
        The images will be marked-up versions of the top-down arena view that you saw above.
        Provided here is a legend for the symbols that appear in these diagrams; you might want
        to leave this prologue open in a separate tab so you can continue to refer to this table
        as you proceed through the tutorial.
      </p>
      <Legend/>
    </Chapter>
  )
}