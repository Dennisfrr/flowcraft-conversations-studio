
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Zap } from 'lucide-react';

const ApiNode = ({ data }: { data: any }) => {
  return (
    <div className="px-6 py-4 shadow-lg rounded-lg bg-white border-2 border-orange-200 min-w-[200px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1 bg-orange-500 rounded text-white">
          <Zap className="w-4 h-4" />
        </div>
        <div className="font-semibold text-gray-900">API/Tool</div>
      </div>
      <div className="text-sm text-gray-600 leading-relaxed">
        {data?.url || 'Configure a URL da API...'}
      </div>
      {data?.method && (
        <div className="text-xs text-orange-600 mt-2 bg-orange-50 px-2 py-1 rounded inline-block">
          {data.method}
        </div>
      )}
      
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-orange-500 border-2 border-white"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-orange-500 border-2 border-white"
      />
    </div>
  );
};

export default ApiNode;
