import { ChildAsTS } from './Child';

const Parent = () => {
  return (
    <ChildAsTS color='red' onClick={()=> console.log("clicked")}>
      {/* can pass children prop here */}
    </ChildAsTS>
  );
}

export default Parent;
