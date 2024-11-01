import Particles from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

function fireworks() {
  const customInit = async (engine: Engine) => {
    await loadFireworksPreset(engine);
  };

  const options = {
    preset: "fireworks",
  };

  return <Particles options={options} init={customInit} />;
}

export default fireworks;
