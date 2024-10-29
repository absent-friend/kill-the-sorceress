import Chapter from "../../../components/Chapter";
import Figure from "../../../components/Figure";
import FigureSet from "../../../components/FigureSet";
import Link from "../../../components/Link";
import Note from "../../../components/Note";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Chapter title='Appendix: "God Sorc"' previous="epilogue">
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
      <Section title="Attack Strategy">
        <p>
          The attack plan takes advantage of two aspects of the Sorceress's behavior in the second
          phase:
        </p>
        <ol>
          <li>
            The hesitation window created when boarding the cannon during the wind-up for a blue 
            energy attack
          </li>
          <li>
            The natural fleeing path of the Sorceress when the cannon is boarded while she is at
            the center of the arena
          </li>
        </ol>
        <p>
          If the long range attack selected is the fireball attack, the Sorceress won't hesitate,
          so this strategy isn't applicable. Refer back to Chapter 3 in this case.
        </p>
        <p>
          If the long range attack selected is the blue energy attack, then aim at the center of 
          the arena and begin shooting. As the first damage is given, gradually lead the Sorceress 
          right (and then backward) along the predictable section of her fleeing path and continue 
          shooting until the end of the phase.
        </p>
        <FigureSet>
          <Figure imgur="Ysw37SR" caption="Cannon II - Attack Strategy (Blue Energy Attack Hesitation)" alt="A diagram depicting the locations of interest in the arena for blue energy attack hesitation strategy. The cannon's drop point, the Sorceress's initial position, and the ideal targets for the cannon shots are marked."/>
          <Figure youtube="IJxfZgeAAhI" caption="Cannon II - Demonstration of Attack Strategy (Blue Energy Attack Hesitation)" alt="A video demonstrating the blue energy attack hesitation strategy. After the cannon is boarded, a shot is immediately fired at the center of the arena, and then additional shots are fired to the right and back, tracing the Sorceress's path towards the edge of the arena."/>
        </FigureSet>
        <Note>
          It is possible to finish these hits much more efficiently than in the examples, but it 
          seems counterproductive since the vehicle phase is then completed before any of the tanks 
          are in position to be considered for an additional drop.
        </Note>
        <p>
          If you succeed at doing this quickly, Agent 9 may drop another tank at the start of the 
          next phase. At that point you can follow the tank strategies outlined in Chapter 3.
        </p>
      </Section>
    </Chapter>
  );
}