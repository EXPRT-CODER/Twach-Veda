import soapsImage from '../assets/Soaps.jpeg'
import ubtanImage from '../assets/Soap2.jpeg'
import comboImage from '../assets/Soaps3.jpeg'
import ProductCard from './ProductCard'
const products = [{ name: 'Ubtan Glow Bar', kind: 'Brightening herbal soap', price: '249', image: ubtanImage, tag: 'Bestseller', imageClass: 'object-[30%_center]' }, { name: 'Neem Purifying Bar', kind: 'Clarifying herbal soap', price: '229', image: soapsImage, imageClass: 'object-[72%_center]' }, { name: 'The Ritual Soap Set', kind: 'A botanical trio', price: '649', image: comboImage, tag: 'Save 12%' }]
const FeaturedProducts = ({ onAddToCart }) => <section id="shop" className="shop-section section-space"><div className="site-shell"><div className="section-heading"><div><p className="eyebrow"><span></span> The everyday essentials</p><h2>Nature’s little<br /><em>luxuries.</em></h2></div><a className="text-link view-all" href="#shop">View all products <span>↗</span></a></div><div className="product-grid">{products.map((product) => <ProductCard key={product.name} product={product} onAddToCart={onAddToCart} />)}</div></div></section>
export default FeaturedProducts
