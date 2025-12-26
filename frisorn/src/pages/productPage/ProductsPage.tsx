import Box from '../../components/elements/Box'
import products from '../../data/products.json'

const productImages = import.meta.glob('../../assets/productImages/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const getProductImage = (fileName: string) =>
  productImages[`../../assets/productImages/${fileName}`]

function ProductsPage() {
  return (
    <section>
      <Box className="w-full p-8 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent-dark">
              Produkter
            </p>
            <h2 className="mt-2 font-['Playfair_Display'] text-2xl text-text sm:text-3xl">
              Utvalgte produkter i hyllen.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted">
            Vi hjelper deg med a finne riktig pleie og styling som passer ditt
            hår og hodebunn.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {/* Loop over alle proudkter og display */}
          {products.map((product) => (
            <div
              key={product.title}
              className="flex min-h-[210px] w-[180px] flex-col items-center rounded-[var(--radius-card)] border-[var(--border-width)] border-border bg-surface-warm p-4 text-center text-sm"
            >
              {product.imgSrc ? (
                <img
                  src={getProductImage(product.imgSrc)}
                  alt={product.title}
                  className="h-30 w-auto max-w-[130px] rounded-[var(--radius-image)] object-cover"
                  loading="lazy"
                />
              ) : null}
              <h3 className="mt-3 font-['Playfair_Display'] text-base text-text text-lg">
                {product.title}
              </h3>
              <p className="mt-2 text-s text-muted">{product.description}</p>
              <span className="mt-auto inline-block text-sm font-semibold text-accent-dark">
                {product.price}
              </span>
            </div>
          ))}
        </div>
      </Box>
    </section>
  )
}

export default ProductsPage
