import { Section } from "lucide-react";
import { useState } from "react";
import { createContext } from "react";

export type Section = {
  id: number;
  title: string;
};
type TOCContentType = {
  sections:Section[];
  registerSection: (_: Section) => void;
  activeSection: number;
  setActiveSection: (_: number) => void;
};

export const TOCContext = createContext<TOCContentType>({
    sections:[],
    registerSection: () => {},
    activeSection: 0,
    setActiveSection: () => {},
  });

export const useTOContextValues = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const [sections, setSections] = useState<Section[]>([]);

  const registerSection = (section: Section) => {
    setSections((val) => val.concat([section]));
  };
const processSections
= (sections:Section[])=>{
const ids = sections.map(({id})=> id)
const uniqueSections = sections.filter(({id},index)=> !ids.includes(id,index +1)).sort((a,b)=> a.id - b.id)
return uniqueSections
}
 return {
   values:{
    sections: processSections(sections),
    registerSection,
    activeSection,
    setActiveSection,
   }
  };
};
