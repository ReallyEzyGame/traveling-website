

export function HeroBanner({src, children}) {
    return (
        <div className="hero-background" style={{backgroundImage: `url(${src})`}}>
            {children}
        </div>
    )
}