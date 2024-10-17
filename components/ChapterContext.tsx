import { createContext, ParentProps, useContext } from "solid-js";

interface ChapterData {
  chapter: number,
  getFigureNumber: () => number
}

const ChapterContext = createContext<ChapterData>({ chapter: 0, getFigureNumber: () => 0 });

interface ChapterContextProps extends ParentProps {
  chapter: number
}

export function ChapterContextProvider(props: ChapterContextProps) {
  let figureCount = 0;
  const info = {
    chapter: props.chapter,
    getFigureNumber: () => ++figureCount
  }

  return (
    <ChapterContext.Provider value={info}>
      {props.children}
    </ChapterContext.Provider>
  )
}

export function useChapterContext(): ChapterData {
  return useContext(ChapterContext);
}