import { Chapter } from "../../components/Chapter";
import { Figure } from "../../components/Figure";
import { FigureSet } from "../../components/FigureSet";
import { Paragraph } from "../../components/Paragraph";

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
        <FigureSet>
          <Figure youtube="d-NI3fw-y5Q" caption="Cannon C - Fleeing Path (Natural)."/>
          <Figure youtube="txn-RMgmFB8" caption="Cannon D - Fleeing Path (Natural)."/>
          <Figure youtube="ADARi6WmAOk" caption="Cannon E - Fleeing Path (Natural)."/>
        </FigureSet>
      </Paragraph>
      <Paragraph>
        At the moment the vehicle is boarded, both the Sorceress's coordinate position and her
        pivoting angle contribute to the determination of her fleeing path. In order to increase the
        predictability of this path, she should be centered in the arena and facing the vehicle
        before it is boarded (with exceptions in predictability and process mentioned later).
      </Paragraph>
      <Paragraph>
        If the cannon boarded is Cannon C, then aim between the center of the arena and the far edge
        of the arena without adjusting the pivoting angle of the cannon and begin shooting. As the
        first damage is given, gradually lead the Sorceress left and continue shooting until the end
        of the phase.
        <FigureSet>
          <Figure imgur="4x6LpjC" caption="Cannon C - Attack Strategy (Standard)"/>
          <Figure youtube="HVOYrw0b8jQ" caption="Cannon C - Attack Strategy (Standard)"/>
        </FigureSet>
      </Paragraph>
      <Paragraph>
        If the cannon boarded is Cannon D, then aim at the far edge of the arena, pivot the cannon in 
        the direction of the Sorceress's natural stopping point for Cannon D, and begin shooting. 
        Continue shooting until the end of the phase.
        <FigureSet>
          <Figure imgur="PUBI22t" caption="Cannon D - Attack Strategy (Standard)"/>
          <Figure youtube="w-4jfDswUNY" caption="Cannon D - Attack Strategy (Standard)"/>
        </FigureSet>
      </Paragraph>
      <Paragraph>
        If the cannon boarded is Cannon E, then aim between the center of the arena and the far edge 
        of the arena without adjusting the pivoting angle of the cannon and begin shooting. As the 
        first damage is given, gradually lead the Sorceress forward (and then left) and continue 
        shooting until the end of the phase.
        <FigureSet>
          <Figure imgur="cvhzk8X" caption="Cannon E - Attack Strategy (Standard)"/>
          <Figure youtube="Vr3QxKHZFMQ" caption="Cannon E - Attack Strategy (Standard)"/>
        </FigureSet>
      </Paragraph>
    </Chapter>
  );
}