export default function SectionHeading({label,title,children}){
 return(<div className="sh"><div><p className="label">{label}</p><h2>{title}</h2></div>{children}</div>);
}
