
import StartNode from './nodes/StartNode';
import MessageNode from './nodes/MessageNode';
import QuestionNode from './nodes/QuestionNode';
import ConditionNode from './nodes/ConditionNode';
import ApiNode from './nodes/ApiNode';
import EndNode from './nodes/EndNode';

export const nodeTypes = {
  start: StartNode,
  message: MessageNode,
  question: QuestionNode,
  condition: ConditionNode,
  api: ApiNode,
  end: EndNode,
};
