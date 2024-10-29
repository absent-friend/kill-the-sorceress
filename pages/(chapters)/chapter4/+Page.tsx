import Chapter from "../../../components/Chapter";
import Figure from "../../../components/Figure";
import Link from "../../../components/Link";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Chapter title="Chapter 4 - Vehicle III (Tank II or UFO I)" previous="chapter3" next="epilogue">
      <p>
        Phase ending: 12 total damage.
      </p>
      <p>
        After the second vehicle phase is completed, UFOs will begin to spawn randomly around the 
        arena. The drop points of these UFOs are shared with the drop points of the tanks from the 
        previous phase. The tanks spawned before the completion of the second vehicle phase remain 
        spawned, but no additional tanks will spawn for the rest of the fight. A UFO cannot spawn 
        behind a drop point already occupied by one of the remaining tanks.
      </p>
      <Figure imgur="dfgKwF7" caption="UFO Drop Points (General)" alt="A diagram depicting the drop locations of UFOs inside the arena. There are five such points, each located exactly in the middle of two cannon drop points and equally spaced from the adjacent UFO drop points."/>
      <p>
        Even though the second vehicle phase is over at this point, Agent 9 may drop another tank 
        before recognizing the end of the phase. Once it's clear which vehicle is going to be 
        dropped first, move to the drop point of that vehicle and wait for Agent 9 to initiate the 
        drop.
      </p>
      <p>
        The strategy used for this chapter depend on which kind of vehicle is dropped first 
        (Tank II or UFO I):
      </p>
      <ul>
        <li>
          In the case where the first vehicle dropped is Tank II, the strategies used are the same 
          as the ones described in <Link href="/chapter3">Chapter 3</Link>. Refer back to that for 
          details.
        </li>
        <li>
          In the case where the first vehicle dropped is UFO I, the strategies used depend on the 
          degree of inadvertent hesitation created during the process of boarding the UFO.
        </li>
      </ul>
      <Section title="No Hesitation (Standard)">
        <p>
          If the process of boarding the UFO causes no hesitation, then continue forward for a 
          moment before pivoting the UFO in the direction of the left-turning point of the 
          predictable section of the Sorceress's fleeing path and begin shooting. While shooting, 
          move toward the point of intersection of the first UFO shot and the Sorceress's fleeing 
          path. After her damage animation is completed (and her status is reset), shoot again. 
          After this second shot, turn away from the Sorceress (to the right) and set up similar 
          conditions for another set of damaging shots. Repeat this process until the end of the 
          phase.
        </p>
        <Figure youtube="oe0J102NQBE" caption="UFO I - Attack Strategy (Standard)" alt="A video demonstrating the standard attack strategy for UFOs. After the UFO is boarded, it is used to chase the Sorceress in a cyclical motion around the arena. Two shots are landed on the Sorceress per cycle — one from afar and one from up close."/>
      </Section>
      <Section title="Hesitation">
        <p>
          If the process of boarding the UFO causes partial or total hesitation, then pivot the UFO 
          in the direction of the hesitating Sorceress and shoot her while she is still roughly 
          centered in the arena. After this first shot, turn away from the Sorceress (to the right) 
          and set up conditions for a set of damaging shots like those described in the 
          "no hesitation" strategy summary. Reference that strategy summary until the end of the 
          phase.
        </p>
        <Figure youtube="b5FcWU9x6_E" caption="UFO I - Attack Strategy (Hesitation)" alt="A video demonstrating the hesistation strategy for UFOs. After the UFO is boarded, it is aimed towards the Sorceress in the center of the arena while she is stuck in place, and a single shot is landed. The standard strategy is used from that point onwards."/>
      </Section>
      <Section title="Stalling">
        <p>
          There are situations (created either through missed shots or sharp turns) where there is 
          not enough time between the first instance of damage in a set of damaging shots and the 
          intersection of the Sorceress's path and the UFOs path. In these situations, stall the 
          UFO against the Sorceress for a moment to create more time.
        </p>
        <Figure youtube="dKcDjekm7MY" caption="UFO I - Attack Strategy (Stall)" alt="A video demonstrating the stalling technique with the UFO. A version of the standard strategy is shown, but after the first shot, the UFO is driven directly into the Sorceress and then down towards the floor until she is just about to do her close range attack, at which point another shot is fired."/>
        <p>
          Using only sharp turns increases the required precision for each set of damaging shots. 
          Widening sections of these turns creates lenience by increasing the distance between the 
          UFO and the Sorceress at the time of the first shot.
        </p>
      </Section>
    </Chapter>
  )
}