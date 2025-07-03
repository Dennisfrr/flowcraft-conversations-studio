
import React from 'react';
import { Save, Download, Upload, Play, Settings } from 'lucide-react';

interface HeaderProps {
  onExport?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onExport }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Flow Builder
          </h1>
          <div className="text-sm text-gray-500">
            Fluxo de Atendimento Conversacional
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
            <Upload className="w-5 h-5" />
          </button>
          <button 
            onClick={onExport}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
          >
            <Download className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
            <Save className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-gray-300 mx-2" />
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
