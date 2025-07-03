
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Square } from 'lucide-react';

const EndNode = ({ data }: { data: any }) => {
  return (
    <div className="px-6 py-4 shadow-lg rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white min-w-[150px]">
      <div className="flex items-center gap-2">
        <Square className="w-5 h-5" fill="white" />
        <div className="font-semibold">Fim</div>
      </div>
      <div className="text-sm opacity-90 mt-1">
        Finalizar fluxo
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-white border-2 border-red-500"
      />
    </div>
  );
};

export default EndNode;
