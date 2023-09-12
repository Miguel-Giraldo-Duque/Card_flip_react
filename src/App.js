import { SliderPreguntas } from './componentes/sliderPreguntas';
import { FipeableCard } from './componentes/fipeableCard';
import { FaHeart } from "react-icons/fa";


function App() {
  const Datascience = [ 
    {id:"DataScience"},
    "ques1",
    "ques2",
    "ques3" 
  ];
  const quatum = [
    {id : "Quatum"},
    "Que es un quebit",
    "aasdas",
    "aaa"
  ]

  const html = [ 
    {id : "Html"},
    "What is Html "  ,
    "What is APi",
    "What is css"
  ];

  return (
    
    <div className="App">
       <SliderPreguntas preguntas={html}/>    
    </div>
  );
}

export default App;
