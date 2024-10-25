import BulletList from "../../../components/BulletList";
import Chapter from "../../../components/Chapter";
import Figure from "../../../components/Figure";
import Link from "../../../components/Link";
import Paragraph from "../../../components/Paragraph";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Chapter title="Chapter 4 - Vehicle III (Tank II or UFO I)" previous="chapter3" next="epilogue">
      <Paragraph>
        Phase ending: 12 total damage.
      </Paragraph>
      <Paragraph>
        After the second vehicle phase is completed, UFOs will begin to spawn randomly around the 
        arena. The drop points of these UFOs are shared with the drop points of the tanks from the 
        previous phase. The tanks spawned before the completion of the second vehicle phase remain 
        spawned, but no additional tanks will spawn for the rest of the fight. A UFO cannot spawn 
        behind a drop point already occupied by one of the remaining tanks.
      </Paragraph>
      <Figure imgur="dfgKwF7" caption="UFO Drop Points (General)"/>
      <Paragraph>
        Even though the second vehicle phase is over at this point, Agent 9 may drop another tank 
        before recognizing the end of the phase. Once it's clear which vehicle is going to be 
        dropped first, move to the drop point of that vehicle and wait for Agent 9 to initiate the 
        drop.
      </Paragraph>
      <Paragraph>
        The strategy used for this chapter depend on which kind of vehicle is dropped first 
        (Tank II or UFO I):
      </Paragraph>
      <BulletList>
        <li>
          In the case where the first vehicle dropped is Tank II, the strategies used are the same 
          as the ones described in <Link href="chapter3">Chapter 3</Link>. Refer back to that for 
          details.
        </li>
        <li>
          In the case where the first vehicle dropped is UFO I, the strategies used depend on the 
          degree of inadvertent hesitation created during the process of boarding the UFO.
        </li>
      </BulletList>
      <Section title="No Hesitation (Standard)">
        <Paragraph>
          If the process of boarding the UFO causes no hesitation, then continue forward for a 
          moment before pivoting the UFO in the direction of the left-turning point of the 
          predictable section of the Sorceress's fleeing path and begin shooting. While shooting, 
          move toward the point of intersection of the first UFO shot and the Sorceress's fleeing 
          path. After her damage animation is completed (and her status is reset), shoot again. 
          After this second shot, turn away from the Sorceress (to the right) and set up similar 
          conditions for another set of damaging shots. Repeat this process until the end of the 
          phase.
        </Paragraph>
        <Figure youtube="oe0J102NQBE" caption="UFO I - Attack Strategy (Standard)"/>
      </Section>
      <Section title="Hesitation">
        <Paragraph>
          If the process of boarding the UFO causes partial or total hesitation, then pivot the UFO 
          in the direction of the hesitating Sorceress and shoot her while she is still roughly 
          centered in the arena. After this first shot, turn away from the Sorceress (to the right) 
          and set up conditions for a set of damaging shots like those described in the 
          "no hesitation" strategy summary. Reference that strategy summary until the end of the 
          phase.
        </Paragraph>
        <Figure youtube="b5FcWU9x6_E" caption="UFO I - Attack Strategy (Hesitation)"/>
      </Section>
      <Section title="Stalling">
        <Paragraph>
          There are situations (created either through missed shots or sharp turns) where there is 
          not enough time between the first instance of damage in a set of damaging shots and the 
          intersection of the Sorceress's path and the UFOs path. In these situations, stall the 
          UFO against the Sorceress for a moment to create more time.
        </Paragraph>
        <Figure youtube="dKcDjekm7MY" caption="UFO I - Attack Strategy (Stall)"/>
        <Paragraph>
          Using only sharp turns increases the required precision for each set of damaging shots. 
          Widening sections of these turns creates lenience by increasing the distance between the 
          UFO and the Sorceress at the time of the first shot.
        </Paragraph>
      </Section>
    </Chapter>
  )
}