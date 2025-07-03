
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { GitBranch } from 'lucide-react';

const ConditionNode = ({ data }: { data: any }) => {
  return (
    <div className="px-6 py-4 shadow-lg rounded-lg bg-white border-2 border-purple-200 min-w-[200px]">
      <div className="flex items-center gap-2 mb-2">
        <div className="p-1 bg-purple-500 rounded text-white">
          <GitBranch className="w-4 h-4" />
        </div>
        <div className="font-semibold text-gray-900">Condição</div>
      </div>
      <div className="text-sm text-gray-600 leading-relaxed">
        {data?.condition || 'Defina uma condição...'}
      </div>
      {data?.description && (
        <div className="text-xs text-purple-600 mt-2">
          {data.description}
        </div>
      )}
      
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-purple-500 border-2 border-white"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="true"
        className="w-3 h-3 bg-green-500 border-2 border-white"
        style={{ top: '60%' }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="false"
        className="w-3 h-3 bg-red-500 border-2 border-white"
        style={{ top: '60%' }}
      />
      
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-xs text-green-600 font-medium">
        SIM
      </div>
      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-xs text-red-600 font-medium">
        NÃO
      </div>
    </div>
  );
};

export default ConditionNode;
