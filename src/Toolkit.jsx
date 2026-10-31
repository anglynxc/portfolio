import { useState } from 'react';
import './Toolkit.css';
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiJavascript, SiFigma, SiVite,
  SiLaravel, SiNodedotjs, SiPhp, SiMysql, SiPrisma, SiFirebase, SiSupabase, SiPython, SiCloudinary,SiDjango,
  SiGit, SiGithub, SiWordpress, SiGooglesheets, SiEspressif, SiCplusplus, SiGodotengine, SiUnity, SiOpengl,SiFlutter,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiLayout, FiDatabase, FiTerminal } from 'react-icons/fi';

const toolkit = [
  {
    id: 'frontend',
    title: 'Frontend',
    Icon: FiLayout,
    tools: [
      { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Vite', Icon: SiVite, color: '#646CFF' },
      { name: 'TailwindCSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    Icon: FiDatabase,
    tools: [
      { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'Prisma', Icon: SiPrisma, color: '#2D3748' },
      { name: 'Django', Icon: SiDjango, color: '#092E20' },
      { name: 'Cloudinary', Icon: SiCloudinary, color: '#3448C5' },
    ],
  },
  {
    id: 'tools',
    title: 'Others',
    Icon: FiTerminal,
    tools: [
      { name: 'Git & GitHub', Icon: SiGithub, color: '#181717' },
      { name: 'Godot', Icon: SiGodotengine, color: '#478CBF' },      
      { name: 'WordPress', Icon: SiWordpress, color: '#21759B' },
      { name: 'ESP32 / IoT', Icon: SiEspressif, color: '#E7352C' },
      { name: 'Unity', Icon: SiUnity, color: '#000000' },
      { name: 'Flutter', Icon: SiFlutter, color: '#02569B' },
      { name: 'OpenGL', Icon: SiOpengl, color: '#5586A4' },
      { name: 'Java', Icon: FaJava, color: '#ED8B00' },
      { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
    ],
  },
];


const marqueeTools = [
  ...toolkit.flatMap((g) => g.tools),
  { name: 'Git', Icon: SiGit, color: '#F05032' },
];

function MarqueeRow({ hidden = false }) {
  return (
    <div className="toolkit-row" aria-hidden={hidden || undefined}>
      {marqueeTools.map(({ name, Icon, color }) => (
        <div className="toolkit-item" key={name}>
          <Icon size={40} color={color} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Toolkit() {
  const [activeId, setActiveId] = useState(toolkit[0].id);
  const active = toolkit.find((g) => g.id === activeId);

  return (
    <div className="toolkit">
      <h3 className="toolkit-heading">Toolkit</h3>

      <div className="toolkit-marquee">
        <div className="toolkit-track">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </div>

      <div className="toolkit-tabs" role="tablist" aria-label="Toolkit categories">
        {toolkit.map(({ id, title, Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`toolkit-tab-${id}`}
            aria-selected={activeId === id}
            aria-controls={`toolkit-panel-${id}`}
            className={`toolkit-tab${activeId === id ? ' is-active' : ''}`}
            onClick={() => setActiveId(id)}
          >
            <Icon size={20} aria-hidden="true" />
            <span>{title}</span>
          </button>
        ))}
      </div>

      <div
        className="toolkit-panel"
        role="tabpanel"
        id={`toolkit-panel-${active.id}`}
        aria-labelledby={`toolkit-tab-${active.id}`}
      >
        <ul className="toolkit-list">
          {active.tools.map(({ name, Icon, color }) => (
            <li className="toolkit-list-item" key={name}>
              <Icon size={26} color={color} aria-hidden="true" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
