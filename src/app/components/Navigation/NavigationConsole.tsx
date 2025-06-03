import { ArcadeButton } from "./ArcadeButton";
import ArcadeScreen from "./ArcadeScreen";

export const NavigationConsole = () => {
  return (
    <div className="md:col-span-1 bg-gradient-to-b from-gray-900 to-indigo-950 rounded-3xl p-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] border border-indigo-500 flex flex-col items-center">
      <ArcadeScreen />
      <div className="grid grid-cols-3 gap-4 mt-8">
        <ArcadeButton href="profile" color="red" size="normal">
          PROFILE
        </ArcadeButton>
        <ArcadeButton href="projects" color="green" size="normal">
          PROJECTS
        </ArcadeButton>
        <ArcadeButton href="contact" color="blue" size="normal">
          CONTACT
        </ArcadeButton>
        <ArcadeButton href="skills" color="red" size="normal">
          SKILLS
        </ArcadeButton>
        <ArcadeButton href="hobbies" color="green" size="normal">
          HOBBIES
        </ArcadeButton>
        <ArcadeButton
          href="https://docs.google.com/document/d/1MXZ7ipFBSIrUKLEspnaqLY3Ua4pMDT_4nVuNpJXdjrk/edit?usp=sharing"
          color="blue"
          size="normal"
          external
        >
          RESUME
        </ArcadeButton>
      </div>
    </div>
  );
};
