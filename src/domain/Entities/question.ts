import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/estity"

interface QuestionProps {
  title: string
  content: string
  authorId: string
  slug: Slug
}

class Question extends Entity{
  public title: string
  public slug: Slug
  public content: string
  public authorId: string

  constructor(props: QuestionProps,id?: string) {
    super(id)

    this.title = props.title
    this.content = props.content
    this.slug = props.slug
    this.authorId = props.authorId
  }
}