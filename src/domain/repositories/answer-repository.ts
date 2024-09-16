import { Answer } from '../Entities/answer'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
}
