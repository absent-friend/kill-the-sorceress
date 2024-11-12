import Chapter from "../../../components/Chapter";
import Figure from "../../../components/Figure";
import FigureSet from "../../../components/FigureSet";
import Section from "../../../components/Section";

export default function Page() {
  return (
    <Chapter title="Chapter 3 - Vehicle II (Cannon II or Tank I)" previous="chapter2" next="chapter4">
      <p>
        Phase ending: 6 total damage.
      </p>
      <p>
        After the first vehicle phase is completed, tanks will begin to spawn randomly around the 
        arena. There are five fixed drop points for these tanks. The cannons spawned before the 
        completion of the first vehicle phase remain spawned, but no additional cannons will spawn 
        for the rest of the fight.
      </p>
      <Figure imgur="dfgKwF7" caption="Tank Drop Points (General)" alt="A diagram depicting the drop locations of tanks inside the arena. There are five such points, each located exactly in the middle of two cannon drop points and equally spaced from the adjacent UFO drop points."/>
      <p>
        The second phase of the Sorceress fight is the most dynamic and complex since, in effect, 
        the goal is to completely skip the third phase of the fight. Before outlining specifics, 
        it'll be worthwhile to mention the general strategy that makes that consistent since it can 
        be used as a backup or as a more basic tool for the fight if you don't want to dive 
        completely into the intricacies and hypotheticals you might encounter. If you are going to 
        learn only two things for this fight, this should be one of them (the other should be how 
        to identify cannons and the fleeing paths attached to each cannon that can drop first).
      </p>
      <Section title='The "Complete Force" for Skipping the UFO Phase'>
        <p>
          After Agent 9 shoots down the first tank of the phase, he will begin traveling to the 
          second tank that spawned. Once he reaches the second tank, he will wait below it until 
          the first tank despawns, which happens both at the end of the phase and when the tank is 
          deboarded for any reason. If the action that activates Agent 9 is the deboarding of the 
          first tank, then he will immediately begin shooting the second tank down. That mechanic 
          can be used advantageously to compel Agent 9 to shoot at the second tank while a 
          phase-ending shot is in the air. 
        </p>
        <Figure youtube="4S4Anf1vEno" caption="Tank I - Deboard Causes Next Tank To Drop" alt="A video demonstrating Agent 9's behavior when Spyro gets off of the first tank. Spyro jumps from the tank, and Agent 9 shoots down the next one immediately afterwards."/>
        <p>
          Normally, even if a phase-ending shot connects with the Sorceress and completes the 
          phase, the second tank will be cleared from the arena in the same way that residual 
          cannons were cleared at the end of Phase I; however, if the deboarding of the first tank 
          along with the phase-ending damage to the Sorceress are both timed correctly, then the 
          second tank will fall and be in the air while the arena is being cleared, which will 
          allow it to remain spawned for use during the final phase of the fight.
        </p>
        <FigureSet>
          <Figure youtube="nYKM1YMD1vQ" caption="Tank I - Next Tank Is Cleared After Dropping at End of Phase" alt="A video showing what happens when a tank drops at the end of the second phase with the wrong timing. Spyro shoots a shot from the first tank that deals the sixth hit of damage to the Sorceress, which causes the phase to end. In the process, a tank that Agent 9 had dropped is removed, since it touched the ground before the phase ended."/>
          <Figure youtube="f35eXCG_Otw" caption="Tank I - Next Tank Survives After Dropping at End of Phase" alt="A video showing what happens when a tank drops at the end of the second phase with the right timing. Spyro shoots a shot from the first tank that deals the sixth hit of damage to the Sorceress, which causes the phase to end. The next tank drops after the phase transition takes place, so it isn't cleared away."/>
        </FigureSet>
        <p>
          Simply put, before delivering phase-ending damage to the Sorceress, space the tank 
          approximately 1/2 of the arena's diameter away from the Sorceress, shoot the phase-ending 
          shot, then intentionally deboard the tank by jumping off. If the phase-ending shot 
          connects and was in the air for the correct amount of time after the tank was deboarded, 
          then the second tank that Agent 9 shoots down will remain in the arena. 
        </p>
        <Figure youtube="Kygpt9KBvMI" caption="Tank I - Complete Force" alt="A video demonstrating the Complete Force strategy for the second phase. Spyro boards a tank and waits for the Sorceress to come to a stop somewhere. Once she does, he repositions slightly to ensure that is the correct distance away from her and fires a shot that deals the sixth hit of damage, which causes the phase to end. The next tank drops and is not cleared away."/>
        <p>
          The "Complete Force" setup can always be used as a backup for anything written below and 
          can also be used isolatedly as the main approach to the end of Phase II without 
          considering any of the more involved approaches described later in this chapter. <b>It is 
          the most fundamental, flexible, and important strategy used during the fight.</b>
        </p>
      </Section>
      <Section title="Placeholder For In-Depth Coverage">
        To come later
      </Section>
      <Section title="Additional Resources">
        <p>
          If you struggle with the "Complete Force" strategy or prefer a more traditional video
          tutorial, <a href="https://youtu.be/gNmb5FLXXOs?t=391">Fady's Sorceress tutorial</a> covers
          the basics at around 6 minutes and 30 seconds.
        </p>
        <p>
          Jeremy's Twitch channel has <a href="https://www.twitch.tv/videos/258480183">a video that covers all of the UFO skip strategies in this chapter</a>.
          It was previously the only available resource for learning these strategies in depth.
          If you prefer video or just need more examples, give this a shot.
        </p>
      </Section>
    </Chapter>
  )
}