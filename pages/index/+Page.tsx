import { Figure } from "../../components/Figure.jsx";
import { FigureSet } from "../../components/FigureSet.jsx";
import { Paragraph } from "../../components/Paragraph.jsx";

export default function Page() {
  return (
    <Paragraph>
      Here's something really cool.
      <FigureSet>
        <Figure image="https://i.imgur.com/Qy1g15J.png" caption="Test image" />
        <Figure video="https://www.youtube.com/embed/FIml6Xe548E" caption="Test video" />
      </FigureSet>
    </Paragraph>
  );
}
