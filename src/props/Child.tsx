interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => {
  return <div>
    {color}
    <button onClick={onClick}>Click me</button>
    </div>;
}

// child is react function component migth have properties assigned to it like propTypes, contextTypes
export const ChildAsTS: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return <div>
    {color}
    {children}
    <button onClick={onClick}>Click me</button>
    </div>;
}

ChildAsTS.displayName