import { Entity } from "../../core/entities/estity"

interface InstructorProps{
  name: string
}

class Instructor extends Entity {
  public name: string


  constructor(props:InstructorProps, id?:string){
    super(id)

    this.name = props.name
    
  }
}