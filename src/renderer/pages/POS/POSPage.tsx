import React, { useState, useEffect } from 'react';
import { PackageSearch, AlertCircle } from 'lucide-react';
import CartSidebar from './components/CartSidebar';
import AddonSelectionModal from './components/AddonSelectionModal';
import { useCartStore } from '../../store/cartStore';

export default function POSPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isAddonModalOpen, setIsAddonModalOpen] = useState(false);

  const cartAddItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [catsRes, prodsRes] = await Promise.all([
        window.api.categories.getAll(),
        window.api.products.getMenu()
      ]);

      if (catsRes.success && catsRes.data) {
        setCategories(catsRes.data);
      } else {
        setError(catsRes.error || 'Erro ao carregar categorias');
      }

      if (prodsRes.success && prodsRes.data) {
        setProducts(prodsRes.data);
      } else {
        setError(prodsRes.error || 'Erro ao carregar produtos');
      }
    } catch (err: any) {
      setError(err.message || 'Erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (product: any) => {
    if (product.product_addon_groups && product.product_addon_groups.length > 0) {
      setSelectedProduct(product);
      setIsAddonModalOpen(true);
    } else {
      cartAddItem({
        productId: product.id,
        name: product.name,
        basePrice: Number(product.base_price),
        quantity: 1,
        addons: []
      });
    }
  };

  const handleAddToCartWithAddons = (quantity: number, addons: any[]) => {
    if (selectedProduct) {
      cartAddItem({
        productId: selectedProduct.id,
        name: selectedProduct.name,
        basePrice: Number(selectedProduct.base_price),
        quantity,
        addons
      });
    }
    setIsAddonModalOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category_id === selectedCategory);

  if (loading) {
    return <div className="flex justify-center items-center h-full">Carregando cardápio...</div>;
  }

  return (
    <div className="absolute inset-0 flex">
      <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        {error && (
          <div className="m-4 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        <div className="p-4 bg-white border-b border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === 'all' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <PackageSearch size={48} className="mb-4 opacity-50" />
              <p>Nenhum produto encontrado nesta categoria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="bg-white rounded-[20px] shadow-sm border border-gray-100/80 overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 flex flex-col active:scale-[0.98] group"
                >
                  <div className="h-36 bg-gray-50 flex items-center justify-center overflow-hidden">
                    {product.image_path ? (
                      <img src={product.image_path.startsWith('http') ? product.image_path : `local://${product.image_path}`} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <PackageSearch size={32} className="text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-gray-800 leading-tight mb-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{product.description}</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-black text-blue-600">
                        R$ {Number(product.base_price).toFixed(2).replace('.', ',')}
                      </span>
                      {product.product_addon_groups && product.product_addon_groups.length > 0 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">
                          +{product.product_addon_groups.length} Opc.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <CartSidebar />

      {selectedProduct && (
        <AddonSelectionModal
          isOpen={isAddonModalOpen}
          onClose={() => {
            setIsAddonModalOpen(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
          onAddToCart={handleAddToCartWithAddons}
        />
      )}
    </div>
  );
}
