import React, { useEffect, useState } from 'react';
import { Save, FolderSearch, ImageIcon, Building, Printer } from 'lucide-react';
import { toast } from 'sonner';
import DocumentInput from '../../components/ui/DocumentInput';

export default function Settings() {
  const [formData, setFormData] = useState({
    company_name: '',
    company_document: '',
    logo_path: '',
    images_directory: '',
    printer_name: ''
  });
  const [printers, setPrinters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    loadSettings();
    loadPrinters();
  }, []);

  const loadPrinters = async () => {
    try {
      const printerList = await window.api.printer.getPrinters();
      setPrinters(printerList);
    } catch (error) {
      console.error('Falha ao buscar impressoras:', error);
    }
  };

  const loadSettings = async () => {
    try {
      const response = await window.api.settings.get();
      if (response.success && response.data) {
        setFormData({
          company_name: response.data.company_name || '',
          company_document: response.data.company_document || '',
          logo_path: response.data.logo_path || '',
          images_directory: response.data.images_directory || '',
          printer_name: response.data.printer_name || ''
        });
      }
    } catch (error) {
      toast.error('Erro ao buscar configurações.');
    } finally {
      setInitialLoad(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectDirectory = async () => {
    const response = await window.api.dialog.selectDirectory();
    if (response.success && response.data) {
      setFormData(prev => ({ ...prev, images_directory: response.data }));
    } else if (response.error !== 'Seleção cancelada') {
      toast.error(response.error);
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const uploadResp = await window.api.image.upload(file.path);
      if (uploadResp.success) {
        setFormData(prev => ({ ...prev, logo_path: uploadResp.data }));
        toast.success('Logo enviada com sucesso! Lembre-se de salvar.');
      } else {
        toast.error('Erro ao enviar imagem: ' + uploadResp.error);
      }
    } catch (err: any) {
      toast.error('Ocorreu um erro ao enviar a logo.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await window.api.settings.upsert(formData);
      if (response.success) {
        toast.success('Configurações salvas com sucesso!');
      } else {
        toast.error('Erro ao salvar: ' + response.error);
      }
    } catch (error) {
      toast.error('Ocorreu um erro inesperado ao salvar.');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoad) {
    return <div className="flex items-center justify-center h-full text-gray-500">Carregando configurações...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Configurações</h1>
        <p className="text-gray-500 mt-1">Configure os dados da sua empresa e preferências de armazenamento.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building size={20} className="text-blue-600" />
              Dados da Empresa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa</label>
                <input 
                  id="company_name"
                  name="company_name" 
                  value={formData.company_name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="Ex: Lanchonete do Zé" 
                />
              </div>

              <div>
                <label htmlFor="company_document" className="block text-sm font-medium text-gray-700 mb-1">CPF ou CNPJ</label>
                <DocumentInput 
                  id="company_document"
                  value={formData.company_document} 
                  onChange={(rawValue) => setFormData(prev => ({ ...prev, company_document: rawValue }))} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="000.000.000-00" 
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Logotipo Mínimo</label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50 flex-shrink-0 overflow-hidden relative">
                    {formData.logo_path ? (
                      <img src={`local://${formData.logo_path}`} alt="Logo" className="w-full h-full object-contain bg-white" />
                    ) : (
                      <ImageIcon size={24} className="text-gray-400" />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                     <label htmlFor="logo_upload" className="cursor-pointer bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors inline-flex items-center gap-2 max-w-max">
                        <ImageIcon size={16} />
                        Escolher Logotipo
                     </label>
                     <input 
                       id="logo_upload"
                       type="file" 
                       accept="image/*"
                       onChange={handleLogoUpload} 
                       className="hidden" 
                     />
                     <span className="text-xs text-gray-500">Formato recomendado: PNG, JPG, WEBP.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FolderSearch size={20} className="text-blue-600" />
              Armazenamento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="images_directory" className="block text-sm font-medium text-gray-700 mb-1">Diretório de Imagens (Opcional)</label>
                <p className="text-xs text-gray-500 mb-2">Por padrão as imagens são salvas num diretório oculto. Altere caso queira salvá-las em outra pasta no PC.</p>
                <div className="flex items-center gap-2">
                  <input 
                    id="images_directory"
                    name="images_directory" 
                    value={formData.images_directory} 
                    readOnly
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-600" 
                    placeholder="Diretório padrão de usuário" 
                  />
                  <button 
                    type="button" 
                    onClick={handleSelectDirectory}
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 rounded-xl transition-colors font-medium whitespace-nowrap"
                  >
                    Selecionar Pasta
                  </button>
                  {formData.images_directory && (
                    <button 
                      type="button" 
                      onClick={() => setFormData(prev => ({...prev, images_directory: ''}))}
                      className="px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 rounded-xl transition-colors font-medium whitespace-nowrap"
                    >
                      Limpar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Printer size={20} className="text-blue-600" />
              Impressão Direta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="printer_name" className="block text-sm font-medium text-gray-700 mb-1">Impressora Térmica</label>
                <p className="text-xs text-gray-500 mb-2">Selecione para impressão silenciosa. Se em branco, abrirá a tela do sistema.</p>
                <select
                  id="printer_name"
                  name="printer_name"
                  value={formData.printer_name}
                  onChange={(e: any) => handleChange(e)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900"
                >
                  <option value="">-- Abrir diálogo de impressão do sistema --</option>
                  {printers.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name} {p.isDefault ? '(Padrão)' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 flex justify-end">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Salvando...' : <><Save size={20} /> Salvar Configurações</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
