
import { Node, Edge } from '@xyflow/react';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'start',
    position: { x: 250, y: 25 },
    data: { label: 'Início' },
  },
  {
    id: '2',
    type: 'message',
    position: { x: 200, y: 125 },
    data: { 
      message: 'Olá! Bem-vindo ao nosso atendimento. Como posso ajudá-lo hoje?',
      delay: 1
    },
  },
  {
    id: '3',
    type: 'question',
    position: { x: 200, y: 250 },
    data: { 
      question: 'Qual é o seu nome?',
      variable: 'nome_usuario'
    },
  },
  {
    id: '4',
    type: 'condition',
    position: { x: 180, y: 375 },
    data: { 
      condition: '{{nome_usuario}} != ""',
      description: 'Verificar se o nome foi fornecido'
    },
  },
  {
    id: '5',
    type: 'message',
    position: { x: 50, y: 500 },
    data: { 
      message: 'Prazer em conhecê-lo, {{nome_usuario}}! Vou transferir você para um atendente.',
      delay: 0
    },
  },
  {
    id: '6',
    type: 'end',
    position: { x: 100, y: 625 },
    data: { label: 'Fim' },
  },
];

export const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    sourceHandle: 'true',
    type: 'smoothstep',
    style: { stroke: '#10b981' },
    label: 'SIM',
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
  },
];
