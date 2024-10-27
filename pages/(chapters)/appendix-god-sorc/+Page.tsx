import Chapter from "../../../components/Chapter";
import Figure from "../../../components/Figure";
import FigureSet from "../../../components/FigureSet";
import Link from "../../../components/Link";
import Note from "../../../components/Note";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Chapter title='Appendix: "God Sorc"' previous="epilogue">
      <Section title="Preface">
        <p>
          This information appeared as "Chapter 3" in the original pastebin. God Sorc is 
          significantly less reliable than the forcing strategy described in 
          <Link href="chapter3">Chapter 3</Link> of this tutorial, but it can be almost 10 seconds 
          faster if executed correctly. 
        </p>
        <p>
          This strategy is applicable to the second phase of the fight, when tanks begin to spawn.
          It requires a second cannon to drop at the start of the phase.
        </p>
      </Section>
      <Section title="Attack Strategy">
        <p>
          Normally, the Sorceress begins the movement for her fleeing path as soon as she 
          recognizes a vehicle is being boarded; however, there exists a window of time at the 
          beginning of her long range attacking animation in which boarding a vehicle causes her to 
          hesitate for a moment before starting to flee.
        </p>
        <Note>
          To clarify, the Sorceress will hesitate as described only if the attack chosen is her 
          blue energy attack. If the attack chosen is her fireball attack, she will continue 
          through that attack before beginning the normal movement of her fleeing path.
        </Note>
        <p>
          After Cannon II is dropped, safely board the vehicle within the window of time described 
          above. Assuming she is roughly centered in the arena, the first section of her fleeing 
          path is generally consistent regardless of the cannon boarded.
        </p>
        <Figure youtube="qNl-abUITTU" caption="Cannon II - Fleeing Path (Natural)"/>
        <p>
          If the long range attack selected is the blue energy attack, then aim at the center of 
          the arena and begin shooting. As the first damage is given, gradually lead the Sorceress 
          right (and then backward) along the predictable section of her fleeing path and continue 
          shooting until the end of the phase.
        </p>
        <FigureSet>
          <Figure imgur="Ysw37SR" caption="Cannon II - Attack Strategy (Blue Energy Attack Hesitation)"/>
          <Figure youtube="IJxfZgeAAhI" caption="Cannon II - Demonstration of Attack Strategy (Blue Energy Attack Hesitation)"/>
        </FigureSet>
        <Note>
          It is possible to finish these hits much more efficiently than in the examples, but it 
          seems counterproductive since the vehicle phase is then completed before any of the tanks 
          are in position to be considered for an additional drop.
        </Note>
        <p>
          If the long range attack selected is the fireball attack, the above attack strategy won't
          succeed. Instead, refer back to the standard strategies detailed in <Link href="chapter3">Chapter 3</Link>.
        </p>
      </Section>
    </Chapter>
  );
}