import PrismaticBurst from './PrismaticBurst';
import Dither from './Dither';


export function Background() {
    return (
        <div style={{ inset: 0, position: 'absolute', opacity: 0.1 }}>
            {/* <PrismaticBurst
                animationType="rotate"
                intensity={20}
                speed={0.15}
                distort={100}
                paused={false}
                offset={{ x: 0, y: 0 }}
                hoverDampness={0.25}
                mixBlendMode='screen'
                rayCount={90}
                colors={['#696969', '#707070', '#ffffff']}
            /> */}
            <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={false}
                mouseRadius={0.1}
                colorNum={5}
                waveAmplitude={0.7}
                waveFrequency={100}
                waveSpeed={0.01}
            />
        </div>
    )
}