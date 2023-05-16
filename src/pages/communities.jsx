import SEO from "@components/seo";
import ProductArea from "@containers/explore-product/layout-01";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

// Demo Data
import productData from "../data/products.json";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Product = () => (
    <Wrapper>
        <SEO pageTitle="Communities" />
        <Header />
        <main id="main-content">
            <ProductArea data={{ products: productData }} />
        </main>
        <Footer />
    </Wrapper>
);

export default Product;
