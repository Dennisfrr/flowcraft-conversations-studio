
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Play } from 'lucide-react';

const StartNode = ({ data }: { data: any }) => {
  return (
    <div className="px-6 py-4 shadow-lg rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white min-w-[150px]">
      <div className="flex items-center gap-2">
        <Play className="w-5 h-5" fill="white" />
        <div className="font-semibold">Início</div>
      </div>
      <div className="text-sm opacity-90 mt-1">
        Ponto de entrada
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-white border-2 border-green-500"
      />
    </div>
  );
};

export default StartNode;
