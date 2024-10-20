import Chapter from "../../components/Chapter";
import Figure from "../../components/Figure";
import FigureSet from "../../components/FigureSet";
import Note from "../../components/Note";
import Paragraph from "../../components/Paragraph";
import Section from "../../components/Section";

export default function Page() {
  return (
    <Chapter title="Chapter 2 - Vehicle I (Cannon I)" previous="/chapter1" next="/chapter3">
      <Paragraph>
        Phase ending: 2 total damage.
      </Paragraph>
      <Paragraph>
        After the first cannon is dropped, safely board the vehicle between the Sorceress's attacks. 
        The natural fleeing path of the Sorceress is attached to the specific vehicle, so the
        strategy used depends on which vehicle is boarded.
      </Paragraph>
      <FigureSet>
        <Figure youtube="d-NI3fw-y5Q" caption="Cannon C - Fleeing Path (Natural)"/>
        <Figure youtube="txn-RMgmFB8" caption="Cannon D - Fleeing Path (Natural)"/>
        <Figure youtube="ADARi6WmAOk" caption="Cannon E - Fleeing Path (Natural)"/>
      </FigureSet>
      <Paragraph>
        At the moment the vehicle is boarded, both the Sorceress's coordinate position and her
        pivoting angle contribute to the determination of her fleeing path. In order to increase the
        predictability of this path, she should be centered in the arena and facing the vehicle
        before it is boarded (with exceptions in predictability and process mentioned later).
      </Paragraph>
      <Section title="Standard Attack Strategies">
        <Paragraph>
          If the cannon boarded is Cannon C, then aim between the center of the arena and the far edge
          of the arena without adjusting the pivoting angle of the cannon and begin shooting. As the
          first damage is given, gradually lead the Sorceress left and continue shooting until the end
          of the phase.
        </Paragraph>
        <FigureSet>
          <Figure imgur="4x6LpjC" caption="Cannon C - Attack Strategy (Standard)"/>
          <Figure youtube="HVOYrw0b8jQ" caption="Cannon C - Attack Strategy (Standard)"/>
        </FigureSet>
        <Paragraph>
          If the cannon boarded is Cannon D, then aim at the far edge of the arena, pivot the cannon in
          the direction of the Sorceress's natural stopping point for Cannon D, and begin shooting. 
          Continue shooting until the end of the phase.
        </Paragraph>
        <FigureSet>
          <Figure imgur="PUBI22t" caption="Cannon D - Attack Strategy (Standard)"/>
          <Figure youtube="w-4jfDswUNY" caption="Cannon D - Attack Strategy (Standard)"/>
        </FigureSet>
        <Paragraph>
          If the cannon boarded is Cannon E, then aim between the center of the arena and the far edge 
          of the arena without adjusting the pivoting angle of the cannon and begin shooting. As the 
          first damage is given, gradually lead the Sorceress forward (and then left) and continue 
          shooting until the end of the phase.
        </Paragraph>
        <FigureSet>
          <Figure imgur="cvhzk8X" caption="Cannon E - Attack Strategy (Standard)"/>
          <Figure youtube="Vr3QxKHZFMQ" caption="Cannon E - Attack Strategy (Standard)"/>
        </FigureSet>
        <Note>
          When the Sorceress uses her rushing attack, she approximates the center coordinate during her 
          return. Generally, this won't significantly alter her natural fleeing path; but it can, 
          particularly with Cannon E. In these cases, it is sometimes necessary to alter the base aiming
          strategies by adapting to the altered fleeing path.
          <Figure youtube="BgmP0QIhDrQ" caption="Cannon E - Fleeing Path (Altered)"/>
        </Note>
      </Section>
      <Section title="Adaptation: Rushing Attacks">
        <Paragraph>
          If the Sorceress uses her rushing attack after the cannon has dropped, but before it has been
          boarded, it is usually necessary (or, at least, suggested) to dodge her attack by charging
          along the edge of the arena as she approaches. Instead of waiting for her to return to her 
          inactive position at the approximate center of the arena, board the cannon directly after 
          dodging her rushing attack. In this case, the first section of her fleeing path is generally 
          consistent regardless of the cannon boarded.
        </Paragraph>
        <Paragraph>
          If the cannon is boarded while the Sorceress is returning to the approximate center of the 
          arena after an unsuccessful rushing attack, then aim at the far edge of the arena, pivot the 
          cannon slightly left, and begin shooting. As the first damage is given, gradually lead the 
          Sorceress forward and continue shooting until the end of the phase.
        </Paragraph>
        <FigureSet>
          <Figure imgur="k8llVJN" caption="Cannon I - Attack Strategy (Rushed)" />
          <Figure youtube="aLe7tpE7Udk" caption="Cannon I - Attack Strategy (Rushed)" />
        </FigureSet>
      </Section>
      <Section title="End of Phase">
        <Paragraph>
          After the second damage is given, the phase will end and the boarded vehicle will disappear. 
          At this point, the Sorceress will stop moving for a moment. Anything shot before the end of 
          the phase will remain an active shot.
        </Paragraph>
        <Note>
          This mechanic is not limited to the involuntary end of a phase. Rather, it is attached to the 
          deboarding process of each vehicle. As such, it can be used voluntarily as a recovery for a 
          misexecuted shot. Keep in mind, this is only an appropriate recovery if the shot directly 
          before the deboarding will finish the phase if it connects.
          <Figure youtube="5gKKwZ4ZPBc" caption="General Vehicle - Attack Strategy (Deboard)"/>
        </Note>
      </Section>
    </Chapter>
  );
}