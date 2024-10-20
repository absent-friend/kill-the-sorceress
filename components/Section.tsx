import { createContext, Match, ParentProps, Switch, useContext } from "solid-js"

enum SectionLevel {
  FIRST = 1,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH
}

function nextLevel(level: SectionLevel): SectionLevel {
  return Math.min(level + 1, SectionLevel.FIFTH);
}

const SectionContext = createContext<SectionLevel>(SectionLevel.FIRST);

interface SectionProps extends ParentProps {
  title: string
}

export default function Section(props: SectionProps) {
  const currentLevel = useContext(SectionContext);
  return (
    <section>
      <Switch>
        <Match when={currentLevel === SectionLevel.FIRST}>
          {/* Starts with <h2> because <h1> is the chapter title. There should be only one <h1> in the document. */}
          <h2 class="mt-4">{props.title}</h2>
        </Match>
        <Match when={currentLevel === SectionLevel.SECOND}>
          <h3 class="mt-4">{props.title}</h3>
        </Match>
        <Match when={currentLevel === SectionLevel.THIRD}>
          <h4 class="mt-4">{props.title}</h4>
        </Match>
        <Match when={currentLevel === SectionLevel.FOURTH}>
          <h5 class="mt-4">{props.title}</h5>
        </Match>
        <Match when={currentLevel === SectionLevel.FIFTH}>
          <h6 class="mt-4">{props.title}</h6>
        </Match>
      </Switch>
      <SectionContext.Provider value={nextLevel(currentLevel)}>
        {props.children}
      </SectionContext.Provider>
    </section>
  )
}