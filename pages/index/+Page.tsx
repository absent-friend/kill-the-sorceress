import { Chapter } from "../../components/Chapter.jsx";
import { Figure } from "../../components/Figure.jsx";
import { FigureSet } from "../../components/FigureSet.jsx";
import { Paragraph } from "../../components/Paragraph.jsx";

export default function Page() {
  return (
    <Chapter title="Test Chapter">
      <Paragraph>
        Here's something really cool.
        <FigureSet>
          <Figure imgur="Qy1g15J" caption="Test image" />
          <Figure youtube="FIml6Xe548E" caption="Test video" />
        </FigureSet>
      </Paragraph>
    </Chapter>
  );
}
