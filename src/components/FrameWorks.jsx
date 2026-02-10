import { OrbitingCircles } from "./OrbitingCircles"

export function FrameWorks() {
    const skills = [
        "python",
        "django",
        "fastapi",
        "docker",
        "go",
        "sqlmodel",
        "javascript",
        "tailwind",
        "csharp",
        "git",
        "github",
        "react",
        "postman",
        "nginx",
        "sqlalchemy",
        "postgresql",
        "vscode",
        "html",
        "css",
        "redis",
    ]
  return (
    <div className="relative flex h-15rem w-full flex-col items-center justify-center">
    <OrbitingCircles iconSize={45}>
        {skills.map((skill, index)=>(
            <Icon key={index} src={`assets/logos/${skill}.png`}/>
        ))}
    </OrbitingCircles>
    <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>{skills.reverse().map((skill, index)=>(
            <Icon key={index} src={`assets/logos/${skill}.png`}/>
        ))}
    </OrbitingCircles>
    </div>
  )
}


const Icon=({src}) =>(
 <img src={src} className="rounded-sm hover:scale-110 duration-200" />
)