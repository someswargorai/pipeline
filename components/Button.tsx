interface ButtonInterface {
  children: string;
  color:string,
  padding:string,
  border:string
}

export const Button = ({ children,...props }: ButtonInterface) => {
  return (
    <button style={{...props}}>
      {children}
    </button>  
  );
};