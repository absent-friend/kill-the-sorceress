import Chapter from "../../../components/Chapter";
import Figure from "../../../components/Figure";
import FigureSet from "../../../components/FigureSet";
import Note from "../../../components/Note";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Chapter title="Chapter 2 - Vehicle I (Cannon I)" previous="chapter1" next="chapter3">
      <p>
        Phase ending: 2 total damage.
      </p>
      <p>
        After the first cannon is dropped, safely board the vehicle between the Sorceress's attacks. 
        The natural fleeing path of the Sorceress is attached to the specific vehicle, so the
        strategy used depends on which vehicle is boarded.
      </p>
      <FigureSet>
        <Figure youtube="d-NI3fw-y5Q" caption="Cannon C - Fleeing Path (Natural)" alt="A video demonstrating the Sorceress's natural pattern of movement when Cannon C is boarded. She moves back and to the right towards the edge of the arena, turns left and runs in an arc towards a point left of the arena center and then to the left edge."/>
        <Figure youtube="txn-RMgmFB8" caption="Cannon D - Fleeing Path (Natural)" alt="A video demonstrating the Sorceress's natural pattern of movement when Cannon D is boarded. She moves back and to the right towards the edge of the arena, stopping just to the right of center screen."/>
        <Figure youtube="ADARi6WmAOk" caption="Cannon E - Fleeing Path (Natural)" alt="A video demonstrating the Sorceress's natural pattern of movement when Cannon E is boarded. She moves back and to the right towards the edge of the arena, turns left and runs in an arc towards the arena center and then to the left edge."/>
      </FigureSet>
      <p>
        At the moment the vehicle is boarded, both the Sorceress's coordinate position and her
        pivoting angle contribute to the determination of her fleeing path. In order to increase the
        predictability of this path, she should be centered in the arena and facing the vehicle
        before it is boarded (with exceptions in predictability and process mentioned later).
      </p>
      <Section title="Standard Attack Strategies">
        <p>
          If the cannon boarded is <b>Cannon C</b>, then aim between the center of the arena and the far edge
          of the arena without adjusting the pivoting angle of the cannon and begin shooting. As the
          first damage is given, gradually lead the Sorceress left and continue shooting until the end
          of the phase.
        </p>
        <FigureSet>
          <Figure imgur="4x6LpjC" caption="Cannon C - Attack Strategy (Standard)" alt="A diagram depicting the locations of interest in the arena for Cannon C's standard attack strategy. The cannon's drop point, the Sorceress's initial and final positions, and the ideal targets for the cannon shots are marked."/>
          <Figure youtube="HVOYrw0b8jQ" caption="Cannon C - Demonstration of Attack Strategy (Standard)" alt="A video demonstrating the standard attack strategy for Cannon C. The cannon is aimed up and begins firing in its initial direction until the first shot connects, and then it is moved slightly to the left to land two more hits."/>
        </FigureSet>
        <p>
          If the cannon boarded is <b>Cannon D</b>, then aim at the far edge of the arena, pivot the cannon in
          the direction of the Sorceress's natural stopping point for <b>Cannon D</b>, and begin shooting. 
          Continue shooting until the end of the phase.
        </p>
        <FigureSet>
          <Figure imgur="PUBI22t" caption="Cannon D - Attack Strategy (Standard)" alt="A diagram depicting the locations of interest in the arena for Cannon D's standard attack strategy. The cannon's drop point, the Sorceress's initial and final positions, and the ideal targets for the cannon shots are marked."/>
          <Figure youtube="w-4jfDswUNY" caption="Cannon D - Demonstration of Attack Strategy (Standard)" alt="A video demonstrating the standard attack strategy for Cannon D. The cannon is aimed up and slightly to the right, and then it fires repeatedly to land three hits."/>
        </FigureSet>
        <p>
          If the cannon boarded is <b>Cannon E</b>, then aim between the center of the arena and the far edge 
          of the arena without adjusting the pivoting angle of the cannon and begin shooting. As the 
          first damage is given, gradually lead the Sorceress forward (and then left) and continue 
          shooting until the end of the phase.
        </p>
        <FigureSet>
          <Figure imgur="cvhzk8X" caption="Cannon E - Attack Strategy (Standard)" alt="A diagram depicting the locations of interest in the arena for Cannon E's standard attack strategy. The cannon's drop point, the Sorceress's initial and final positions, and the ideal targets for the cannon shots are marked."/>
          <Figure youtube="Vr3QxKHZFMQ" caption="Cannon E - Demonstration of Attack Strategy (Standard)" alt="A video demonstrating the standard attack strategy for Cannon E. The cannon is aimed up and begins firing in its initial direction until the first shot connects, and then it is aimed one tick down and continues firing to land two more hits."/>
        </FigureSet>
        <Note>
          When the Sorceress uses her rushing attack, she approximates the center coordinate during her 
          return. Generally, this won't significantly alter her natural fleeing path; but it can, 
          particularly with <b>Cannon E</b>. In these cases, it is sometimes necessary to alter the base aiming
          strategies by adapting to the altered fleeing path.
          <Figure youtube="BgmP0QIhDrQ" caption="Cannon E - Fleeing Path (Altered)" alt="A video demonstrating the Sorceress's altered pattern of movement when Cannon E is boarded after the Sorceress returns to center from a rushing attack. It is identical to the natural pattern, except that she continues running past her normal stopping point and towards a point very close to the cannon."/>
        </Note>
      </Section>
      <Section title="Adaptation: Rushing Attacks">
        <p>
          If the Sorceress uses her rushing attack after the cannon has dropped, but before it has been
          boarded, it is usually necessary (or, at least, suggested) to dodge her attack by charging
          along the edge of the arena as she approaches. Instead of waiting for her to return to her 
          inactive position at the approximate center of the arena, board the cannon directly after 
          dodging her rushing attack. In this case, the first section of her fleeing path is generally 
          consistent regardless of the cannon boarded.
        </p>
        <p>
          If the cannon is boarded while the Sorceress is returning to the approximate center of the 
          arena after an unsuccessful rushing attack, then aim at the far edge of the arena, pivot the 
          cannon slightly left, and begin shooting. As the first damage is given, gradually lead the 
          Sorceress forward and continue shooting until the end of the phase.
        </p>
        <FigureSet>
          <Figure imgur="k8llVJN" caption="Cannon I - Attack Strategy (Rushed)" alt="A diagram depicting the locations of interest in the arena for the rushing attack strategy. The cannon's drop point, the Sorceress's initial position, and the ideal targets for the cannon shots are marked."/>
          <Figure youtube="aLe7tpE7Udk" caption="Cannon I - Demonstration of Attack Strategy (Rushed)" alt="A video demonstrating the generic attack strategy following a rushing attack. Spyro dodges the attack and then boards the cannon as the Sorceress is returning to (but has not yet reached) the center. The cannon is aimed up and to the left, and then it fires repeatedly to land three hits."/>
        </FigureSet>
      </Section>
      <Section title="End of Phase">
        <p>
          After the second damage is given, the phase will end and the boarded vehicle will disappear. 
          At this point, the Sorceress will stop moving for a moment. Anything shot before the end of 
          the phase will remain an active shot.
        </p>
        <Note>
          This mechanic is not limited to the involuntary end of a phase. Rather, it is attached to the 
          deboarding process of each vehicle. As such, it can be used voluntarily as a recovery for a 
          misexecuted shot. Keep in mind, this is only an appropriate recovery if the shot directly 
          before the deboarding will finish the phase if it connects.
          <Figure youtube="5gKKwZ4ZPBc" caption="General Vehicle - Attack Strategy (Deboard)" alt="A video demonstrating the deboarding adaptation. The cannon is aimed up as the Sorceress goes through her normal movement pattern; the instant she reaches the center of the screen, a shot is fired and the cannon is disembarked at the same time. This causes the Sorceress to stop in place, which allows the shot to connect."/>
        </Note>
      </Section>
    </Chapter>
  );
}