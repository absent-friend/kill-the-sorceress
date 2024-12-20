import { CannonTable, CannonRow } from "../../../components/CannonTable";
import Chapter from "../../../components/Chapter";
import Figure from "../../../components/Figure";
import FigureSet from "../../../components/FigureSet";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Chapter title="Chapter 1 - Cannon Patterns" previous="prologue" next="chapter2">
      <p>
        After completing the text interaction with Agent 9 at the beginning of the fight, cannons will
        begin to spawn randomly around the arena. There are five fixed drop points for these cannons - 
        later referred to as <b>Cannon A</b>, <b>Cannon B</b>, <b>Cannon C</b>, <b>Cannon D</b>, and 
        <b>Cannon E</b>, respectively. A maximum total of three airborne cannons may be spawned at one 
        time.
      </p>
      <Figure imgur="TI4qHUr" caption="Cannon Drop Points (Specific)" alt="A diagram depicting the beginning of the fight. The sorceress is in the center of the arena, and cannons A through E are at equally spaced points around the edge of the arena, arranged clockwise in alphabetical order. The initial dialogue takes place near cannon E's drop point."/>
      <Section title="Finding the First Cannon">
        <p>
          Identifying the cannon pattern is very useful in that it creates a certain amount of 
          predictability for the first cannon. Namely, the first cannon to drop may be predicted based
          on which pattern is represented. All of the listed patterns are equally likely.
        </p>
        <CannonTable head='"Pattern"|A B C D E|"  Drop  "' caption="Table 1: Initial Cannon Drop">
          <CannonRow data='"1      "|x x o - -|"Cannon C"'/>
          <CannonRow data='"2      "|x x - o -|"Cannon D"'/>
          <CannonRow data='"3      "|x x - - o|"Cannon E"'/>
          <CannonRow data='"4      "|x - x o -|"Cannon D"'/>
          <CannonRow data='"5      "|x - o - x|"Cannon C"'/>
          <CannonRow data='"6      "|x - - o x|"Cannon D"'/>
          <CannonRow data='"7      "|- x x o -|"Cannon D"'/>
          <CannonRow data='"8      "|- x o - x|"Cannon C"'/>
          <CannonRow data='"9      "|- x - o x|"Cannon D"'/>
          <CannonRow data='"10     "|- - x o x|"Cannon D"'/>
        </CannonTable>
        <p>
          Theoretical initial cannon drop probabilities:
        </p>
        <ul>
          <li><b>Cannon A</b> and <b>Cannon B</b> - <b>0%</b></li>
          <li><b>Cannon C</b> - <b>30%</b></li>
          <li><b>Cannon D</b> - <b>60%</b></li>
          <li><b>Cannon E</b> - <b>10%</b></li>
        </ul>
        <p>
          There are conditional statements composed from the data in Table 1 that collectively predict 
          the first cannon drop. They are listed below.
        </p>
        <blockquote class="mx-8 my-2">
          <b>Rule 1.</b> If <b>Cannon D</b> is present, then <b>Cannon D</b> will drop.
        </blockquote>
        <blockquote class="mx-8 my-2">
          <b>Rule 2.</b> If <b>Cannon D</b> is absent, but <b>Cannon C</b> is present, then <b>Cannon C</b> will drop.
        </blockquote>
        <blockquote class="mx-8 my-2">
          <b>Rule 3.</b> If both <b>Cannon C</b> and <b>Cannon D</b> are absent, then <b>Cannon E</b> will drop.
        </blockquote>
        <FigureSet>
          <Figure imgur="y9CTh2H" caption="Cannon I - Drop Prediction (Rule 1)" alt="A diagram depicting a pattern to which rule 1 applies. Cannons C, D, and E have spawned, so Cannon D is marked as the one that will drop."/>
          <Figure youtube="urlf06LwQHY" caption="Cannon I - Example Application of Rule 1 (Pattern 10)" alt="A video demonstrating the use of rule 1 to predict which cannon will drop. Cannons C and E are spotted from Cannon D's position, and Cannons A and B are not present, so Cannon D drops."/>
          <Figure imgur="3R7siDy" caption="Cannon I - Drop Prediction (Rule 2)" alt="A diagram depicting a pattern to which rule 2 applies. Cannons C, E, and A have spawned, so Cannon C is marked as the one that will drop."/>
          <Figure youtube="v2bVGlvXM7A" caption="Cannon I - Example Application of Rule 2 (Pattern 1)" alt="A video demonstrating the use of rule 2 to predict which cannon will drop. Cannons C, B, and A are spotted, so Cannon C drops."/>
          <Figure imgur="zmgJOC2" caption="Cannon I - Drop Prediction (Rule 3)" alt="A diagram depicting the pattern to which rule 3 applies. Cannons E, A, and B have spawned, so Cannon E is marked as the one that will drop."/>
        </FigureSet>
      </Section>
      <Section title="Following Agent 9">
        <p>
          After the first cannon has been dropped, the direction Agent 9 moves (left or right) is also 
          predictable based on which cannon spawn pattern is represented.
        </p>
        <CannonTable head='"Pattern"|A B C D E|L R' caption="Table 2: Agent 9 Movement">
          <CannonRow data='"1      "|x x x - -|- y'/>
          <CannonRow data='"2      "|x x - x -|- y'/>
          <CannonRow data='"3      "|x x - - x|y -'/>
          <CannonRow data='"4      "|x - x x -|- y'/>
          <CannonRow data='"5      "|x - x - x|y -'/>
          <CannonRow data='"6      "|x - - x x|y -'/>
          <CannonRow data='"7      "|- x x x -|- y'/>
          <CannonRow data='"8      "|- x x - x|- y'/>
          <CannonRow data='"9      "|- x - x x|y -'/>
          <CannonRow data='"10     "|- - x x x|- y'/>
        </CannonTable>
        <p>
          Theoretical Agent 9 movement probabilities:
        </p>
        <ul>
          <li>Left - <b>40%</b></li>
          <li>Right - <b>60%</b></li>
        </ul>
        <p>
          There are conditional statements composed from the data in Table 2 that collectively predict 
          the movement of Agent 9 after the first cannon drop. They are listed below.
        </p>
        <blockquote class="mx-8 my-2">
          <b>Rule 1.</b> If the two remaining airborne cannons are spaced differently 
          relative to the dropped cannon, then Agent 9 will move in the direction of the closest one.
        </blockquote>
        <blockquote class="mx-8 my-2">
          <b>Rule 2.</b> If the two remaining airborne cannons are spaced equally relative to the 
          dropped cannon, then Agent 9 will move in the opposite direction from which he approached 
          the dropped cannon.
        </blockquote>
      </Section>
      <FigureSet>
        <Figure imgur="qjoQoNN" caption="Agent 9 - Directional Interest Prediction (Rule 1)" alt="A diagram depicting a pattern to which rule 1 applies. Cannons C, B, and A have spawned; Agent 9 will drop Cannon C and then move towards Cannon B, since it's closer than Cannon A."/>
        <Figure youtube="FIml6Xe548E" caption="Agent 9 - Example Application of Rule 1 (Pattern 6)" alt="A video demonstrating the use of rule 1 to predict Agent 9's movement. Cannons E and A are spotted from Cannon D's position; Agent 9 drops Cannon D and then moves towards Cannon E, since it's closer than Cannon A."/>
        <Figure imgur="o7OOKcs" caption="Agent 9 - Directional Interest Prediction (Rule 2)" alt="A diagram depicting a pattern to which rule 2 applies. Cannons C, E, and A have spawned; Agent 9 will drop Cannon  and then move towards Cannon E, since that is in the clockwise direction, and he approached Cannon C counterclockwise."/>
      </FigureSet>
      <Section title="Putting It All Together">
        <p>
          After completing the text interaction with Agent 9 at the beginning of the fight, move to 
          the outer ring of the arena and position Spyro so that he's directly behind the 
          <b>Cannon D</b> drop point and facing the center of the arena. Move the camera through the arena 
          (with L2/R2) so that the spawn points for <b>Cannon A</b>, <b>Cannon B</b>, <b>Cannon C</b>, 
          and <b>Cannon E</b> are visible and interpret the pattern either explicitly or implicitly using 
          the information above.
        </p>
        <p>
          Once it's clear which cannon is going to be dropped first, move to the drop point of that 
          cannon and wait for Agent 9 to initiate the drop.
        </p>
      </Section>
    </Chapter>
  );
}