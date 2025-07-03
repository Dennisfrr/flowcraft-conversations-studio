
import React, { useState } from 'react';
import { X, Settings } from 'lucide-react';
import { Node } from '@xyflow/react';

interface PropertiesPanelProps {
  node: Node;
  onClose: () => void;
  onUpdate: (node: Node) => void;
}

const PropertiesPanel: React.FC<PropertiesPanelProps> = ({ node, onClose, onUpdate }) => {
  const [nodeData, setNodeData] = useState(node.data || {});

  const handleUpdate = () => {
    const updatedNode = {
      ...node,
      data: nodeData
    };
    onUpdate(updatedNode);
  };

  const renderFields = () => {
    switch (node.type) {
      case 'message':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                value={nodeData.message || ''}
                onChange={(e) => setNodeData({ ...nodeData, message: e.target.value })}
                placeholder="Digite sua mensagem aqui..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delay (segundos)
              </label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={nodeData.delay || 0}
                onChange={(e) => setNodeData({ ...nodeData, delay: parseInt(e.target.value) })}
              />
            </div>
          </div>
        );
      
      case 'question':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pergunta
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                rows={3}
                value={nodeData.question || ''}
                onChange={(e) => setNodeData({ ...nodeData, question: e.target.value })}
                placeholder="Qual pergunta deseja fazer?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Variável para salvar resposta
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                value={nodeData.variable || ''}
                onChange={(e) => setNodeData({ ...nodeData, variable: e.target.value })}
                placeholder="Ex: nome_usuario"
              />
            </div>
          </div>
        );
      
      case 'condition':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Condição
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={nodeData.condition || ''}
                onChange={(e) => setNodeData({ ...nodeData, condition: e.target.value })}
                placeholder="Ex: {{idade}} > 18"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={nodeData.description || ''}
                onChange={(e) => setNodeData({ ...nodeData, description: e.target.value })}
                placeholder="Descreva esta condição"
              />
            </div>
          </div>
        );
      
      case 'api':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL da API
              </label>
              <input
                type="url"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={nodeData.url || ''}
                onChange={(e) => setNodeData({ ...nodeData, url: e.target.value })}
                placeholder="https://api.exemplo.com/endpoint"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Método
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={nodeData.method || 'POST'}
                onChange={(e) => setNodeData({ ...nodeData, method: e.target.value })}
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-gray-500 text-center py-8">
            Selecione um bloco para editar suas propriedades
          </div>
        );
    }
  };

  return (
    <div className="w-96 bg-white border-l border-gray-200 p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Propriedades</h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-gray-400 hover:text-gray-600 rounded"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700 mb-1">Tipo</div>
        <div className="text-lg font-semibold text-gray-900 capitalize">{node.type}</div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ID do Bloco
        </label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
          value={node.id}
          disabled
        />
      </div>
      
      {renderFields()}
      
      <div className="mt-8 flex gap-3">
        <button
          onClick={handleUpdate}
          className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-medium"
        >
          Salvar
        </button>
        <button
          onClick={onClose}
          className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default PropertiesPanel;
