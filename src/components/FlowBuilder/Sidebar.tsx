
import React from 'react';
import { 
  Play, 
  MessageCircle, 
  HelpCircle, 
  GitBranch, 
  Zap, 
  Square,
  Plus
} from 'lucide-react';

const blockTypes = [
  {
    type: 'start',
    label: 'Início',
    icon: Play,
    color: 'bg-green-500',
    description: 'Ponto de entrada do fluxo'
  },
  {
    type: 'message',
    label: 'Mensagem',
    icon: MessageCircle,
    color: 'bg-blue-500',
    description: 'Enviar mensagem ao usuário'
  },
  {
    type: 'question',
    label: 'Pergunta',
    icon: HelpCircle,
    color: 'bg-yellow-500',
    description: 'Capturar resposta do usuário'
  },
  {
    type: 'condition',
    label: 'Condição',
    icon: GitBranch,
    color: 'bg-purple-500',
    description: 'Ramificação baseada em regras'
  },
  {
    type: 'api',
    label: 'API/Tool',
    icon: Zap,
    color: 'bg-orange-500',
    description: 'Integração externa'
  },
  {
    type: 'end',
    label: 'Fim',
    icon: Square,
    color: 'bg-red-500',
    description: 'Finalizar fluxo'
  }
];

const Sidebar = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Blocos</h2>
        <p className="text-sm text-gray-600">Arraste os blocos para o canvas</p>
      </div>
      
      <div className="space-y-3">
        {blockTypes.map((block) => {
          const IconComponent = block.icon;
          return (
            <div
              key={block.type}
              draggable
              onDragStart={(event) => onDragStart(event, block.type)}
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-grab active:cursor-grabbing bg-gradient-to-r from-white to-gray-50"
            >
              <div className={`p-2 rounded-lg ${block.color} text-white`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{block.label}</div>
                <div className="text-xs text-gray-500">{block.description}</div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200">
        <h3 className="font-semibold text-purple-900 mb-2">💡 Dica</h3>
        <p className="text-sm text-purple-700">
          Use condições para criar ramificações inteligentes baseadas nas respostas dos usuários.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
