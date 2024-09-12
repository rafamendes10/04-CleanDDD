import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/estity"

interface QuestionProps {
  title: string
  content: string
  authorId: string
  slug: Slug
}

class Question extends Entity <QuestionProps>{

}