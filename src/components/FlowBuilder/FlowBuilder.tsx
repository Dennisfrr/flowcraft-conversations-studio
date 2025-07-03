
import React, { useCallback, useState, useRef } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Node,
  Panel,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import Sidebar from './Sidebar';
import PropertiesPanel from './PropertiesPanel';
import Header from './Header';
import { initialNodes, initialEdges } from './initialElements';
import { nodeTypes } from './nodeTypes';
import { useFlowStore } from './store';

let id = 100;
const getId = () => `${id++}`;

const FlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const { showPreview, setShowPreview } = useFlowStore();
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: getDefaultData(type),
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

  const getDefaultData = (type: string) => {
    switch (type) {
      case 'message':
        return { message: 'Digite sua mensagem aqui...', delay: 0 };
      case 'question':
        return { question: 'Qual pergunta deseja fazer?', variable: '' };
      case 'condition':
        return { condition: '', description: '' };
      case 'api':
        return { url: '', method: 'POST' };
      default:
        return {};
    }
  };

  const exportFlow = () => {
    const flowData = {
      nodes: nodes.map(node => ({
        id: node.id,
        type: node.type,
        data: node.data,
        position: node.position
      })),
      edges: edges.map(edge => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
        sourceHandle: edge.sourceHandle,
        type: edge.type
      }))
    };
    
    console.log('Flow JSON:', JSON.stringify(flowData, null, 2));
    
    // Download do JSON
    const blob = new Blob([JSON.stringify(flowData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fluxo-conversacional.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      <Header onExport={exportFlow} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <div className="flex-1 relative" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
            className="bg-gradient-to-br from-blue-50/30 to-purple-50/30"
            defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          >
            <Controls className="bg-white shadow-lg border border-gray-200" />
            <MiniMap 
              className="bg-white shadow-lg border border-gray-200" 
              nodeClassName={(node) => {
                switch (node.type) {
                  case 'start': return 'fill-green-400';
                  case 'message': return 'fill-blue-400';
                  case 'question': return 'fill-yellow-400';
                  case 'condition': return 'fill-purple-400';
                  case 'api': return 'fill-orange-400';
                  case 'end': return 'fill-red-400';
                  default: return 'fill-gray-400';
                }
              }}
            />
            <Background variant="dots" gap={20} size={1} className="opacity-30" />
            
            <Panel position="top-right" className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 m-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all font-medium"
                >
                  {showPreview ? 'Editar' : 'Preview'}
                </button>
                <button 
                  onClick={exportFlow}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 transition-all font-medium"
                >
                  Deploy
                </button>
              </div>
            </Panel>
          </ReactFlow>
        </div>
        
        {selectedNode && (
          <PropertiesPanel 
            node={selectedNode} 
            onClose={() => setSelectedNode(null)}
            onUpdate={(updatedNode) => {
              setNodes((nds) => nds.map((n) => 
                n.id === updatedNode.id ? updatedNode : n
              ));
              setSelectedNode(updatedNode);
            }}
          />
        )}
      </div>
    </div>
  );
};

// Wrapper component to provide ReactFlow context
const FlowBuilderWrapper = () => {
  return (
    <ReactFlow>
      <FlowBuilder />
    </ReactFlow>
  );
};

export default FlowBuilderWrapper;
