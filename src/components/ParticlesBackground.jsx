import { useEffect } from 'react';
import particlesConfig from '../config/particles.json';

const ParticlesBackground = () => {
    useEffect(() => {
        window.particlesJS('particles-js', particlesConfig);
    }, []);

    return (
        <div id="particles-js" className="absolute inset-0" />
    );
};

export default ParticlesBackground;