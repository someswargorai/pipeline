export interface cardProps{
  name: string,
  age: number
}

export const Card=(props:cardProps)=>{
    return(
        <p>{props.name} {props.age}</p>
    )
}