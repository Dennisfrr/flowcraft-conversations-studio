
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { MessageCircle } from 'lucide-react';

const MessageNode = ({ data }: { data: any }) => {
  return (
    <div className="px-6 py-4 shadow-lg rounded-lg bg-white border-2 border-blue-200 min-w-[200px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1 bg-blue-500 rounded text-white">
          <MessageCircle className="w-4 h-4" />
        </div>
        <div className="font-semibold text-gray-900">Mensagem</div>
      </div>
      <div className="text-sm text-gray-600 leading-relaxed">
        {data?.message || 'Digite sua mensagem...'}
      </div>
      {data?.delay > 0 && (
        <div className="text-xs text-blue-600 mt-2">
          Delay: {data.delay}s
        </div>
      )}
      
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-blue-500 border-2 border-white"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-blue-500 border-2 border-white"
      />
    </div>
  );
};

export default MessageNode;
