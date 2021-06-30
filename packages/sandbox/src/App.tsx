import React, {useEffect, useState} from "react";
import './style.css';
import Slideshow, {ISlide} from 'eux86-react-slideshow';


interface ISlideContentProps {
  quoteText: string;
  quoteAuthor: string;
  buttonText: string;
  callback: () => void;
}

const SlideContent: React.FunctionComponent<ISlideContentProps> = ({quoteText, quoteAuthor, buttonText, callback}) => (
  <>
    <h2>{quoteText}</h2>
    <h3>{quoteAuthor}</h3>
    {callback && (
      <button onClick={callback}>{buttonText}</button>
    )}
  </>
)

export default function App() {
  const [images, setImages] = useState<ISlide[]>([
    {
      id: 0,
      backgroundImageUrl: 'https://www.outventure-milano.it/images/slide/slide01.jpg',
      content: (
        <SlideContent
          quoteText="Quando uomini e montagna si incontrano, grandi cose accadono"
          quoteAuthor="WILLIAM BLAKE"
          buttonText="Chi siamo"
          callback={() => alert('not implemented')}
        />
      )
    },
    {
      id: 1,
      backgroundImageUrl: 'https://www.outventure-milano.it/images/slide/slide02.jpg',
      content: (
        <SlideContent
          quoteText="I Monti sono maestri muti e fanno discepoli silenziosi."
          quoteAuthor="JOHANN WOLFGANG VON GOETHE"
          buttonText="Leggi il regolamento"
          callback={() => alert('not implemented')}
        />
      )
    },
    {
      id: 3,
      backgroundImageUrl: 'https://www.outventure-milano.it/images/slide/slide03.jpg',
      content: (
        <SlideContent
          quoteText="Ognuno di noi ha una quota prediletta in montagna, un paesaggio che gli somiglia e dove si sente bene."
          quoteAuthor="LE OTTO MONTAGNE, PAOLO COGNETTI"
          buttonText="Guarda le nostre prossime uscite"
          callback={() => alert('not implemented')}
        />
      )
    },
  ]);

  return (
    <>
      <h1>Carousel test</h1>
      <Slideshow slides={images}/>
    </>
  );
}
