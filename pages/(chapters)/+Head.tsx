import { scrollToChapterStart } from "../../components/Chapter";

export default function HeadChapter() {
  return (
    <>
      <script lang="js" innerHTML={scrollToChapterStart()}></script>
    </>
  )
}