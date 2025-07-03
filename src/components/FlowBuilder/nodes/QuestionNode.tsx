
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { HelpCircle } from 'lucide-react';

const QuestionNode = ({ data }: { data: any }) => {
  return (
    <div className="px-6 py-4 shadow-lg rounded-lg bg-white border-2 border-yellow-200 min-w-[200px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1 bg-yellow-500 rounded text-white">
          <HelpCircle className="w-4 h-4" />
        </div>
        <div className="font-semibold text-gray-900">Pergunta</div>
      </div>
      <div className="text-sm text-gray-600 leading-relaxed">
        {data?.question || 'Qual pergunta deseja fazer?'}
      </div>
      {data?.variable && (
        <div className="text-xs text-yellow-600 mt-2 bg-yellow-50 px-2 py-1 rounded">
          Salvar em: {data.variable}
        </div>
      )}
      
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-yellow-500 border-2 border-white"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-yellow-500 border-2 border-white"
      />
    </div>
  );
};

export default QuestionNode;
