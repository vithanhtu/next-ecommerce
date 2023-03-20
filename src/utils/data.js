import { v4 as uuidv4 } from "uuid";
import productImg1 from "../../public/images/product-1.jpg.webp";
import productImg2 from "../../public/images/product-2.jpg.webp";
import productImg3 from "../../public/images/product-3.jpg.webp";
import productImg4 from "../../public/images/product-4.jpg.webp";
import productImg6 from "../../public/images/product-6.jpg.webp";
import productImg7 from "../../public/images/product-7.jpg.webp";
import productImg8 from "../../public/images/product-8.jpg.webp";
import shopImg1 from "../../public/images/shop-1.jpg.webp";
import shopImg2 from "../../public/images/shop-2.jpg.webp";
import shopImg3 from "../../public/images/shop-3.jpg.webp";
import shopImg4 from "../../public/images/shop-4.jpg.webp";
import shopImg7 from "../../public/images/shop-7.jpg.webp";
import shopImg8 from "../../public/images/shop-8.jpg.webp";

import trendImg1 from "../../public/images/trending-1.jpg.pagespeed.ic.egi4bL3t5c.webp";
import trendImg2 from "../../public/images/trending-2.jpg.pagespeed.ic.3YjuD2AOub.webp";
import trendImg3 from "../../public/images/trending-3.jpg.pagespeed.ic.fw_LsIXAiZ.webp";
import sellerImg1 from "../../public/images/seller-1.jpg.pagespeed.ic.mJ3HA8np2n.webp";
import sellerImg2 from "../../public/images/seller-2.jpg.pagespeed.ic.oPC5eRYONC.webp";
import sellerImg3 from "../../public/images/seller-3.jpg.pagespeed.ic.UbErREAs1-.webp";
import featureImg1 from "../../public/images/feature-1.jpg.pagespeed.ic.Q7t675Gcer.webp";
import featureImg2 from "../../public/images/feature-2.jpg.pagespeed.ic.LE7FQXfxeP.webp";
import featureImg3 from "../../public/images/feature-3.jpg.pagespeed.ic.larkQpUfvs.webp";

import productSlideImg1 from "../../public/images/slide-product1.jpg";
import productSlideImg2 from "../../public/images/slide-product2.jpg";
import productSlideImg3 from "../../public/images/slide-product3.jpg";
import productSlideImg4 from "../../public/images/slide-product4.jpg";

const data = {
  products: [
    {
      id: uuidv4(),
      title: "Buttons tweed blazer",
      info: "Shirts",
      category: "Women's",
      price: 59,
      countInStock: 5,
      rating: 5,
      slug: "buttons-tweed-blazer",
      newProduct: false,
      img: productImg1,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Furry hooded parka",
      info: "Coats",
      category: "Women's",
      price: 89,
      countInStock: 5,
      rating: 3,
      countInStock: 5,
      slug: "furry-hooded-parka",
      newProduct: false,
      img: shopImg1,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Furry hooded parkas",
      info: "Jeans",
      category: "Women's",
      slug: "furry-hooded-parkas",
      price: 62,
      countInStock: 5,
      newProduct: false,
      rating: 3,
      countInStock: 5,
      img: shopImg2,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Flowy striped skirt",
      info: "Shirts",
      category: "Men's",
      slug: "flowy-striped-skirt",
      price: 62,
      countInStock: 5,
      rating: 3,
      countInStock: 25,
      newProduct: true,
      img: productImg2,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Cotton T-Shirt",
      info: "T-Shirts",
      category: "Cosmetics",
      slug: "cotton-shirt",
      rating: 4,
      countInStock: 5,
      price: 52,
      countInStock: 5,
      newProduct: true,
      img: productImg3,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Croc-effect bag",
      info: "Bag's",
      category: "Women's",
      price: 32,
      countInStock: 5,
      rating: 3,
      slug: "croc-effect-bag",
      newProduct: false,
      img: shopImg3,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Dark wash Xavi jeans",
      info: "Jeans",
      category: "Men's",
      rating: 5,
      price: 49,
      countInStock: 35,
      slug: "dark-wash-xavi-jeans",
      newProduct: false,
      img: shopImg4,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Cotton T-Shirt",
      info: "T-Shirt",
      category: "Accessories",
      rating: 3,
      price: 72,
      countInStock: 55,
      slug: "cotton-shirt-t",
      newProduct: true,
      img: shopImg8,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: true,
    },
    {
      id: uuidv4(),
      title: "Slim striped pocket shirt",
      info: "Shirts",
      category: "Men's",
      price: 56,
      countInStock: 0,
      rating: 3,
      slug: "slim-striped-pocket-shirt",
      newProduct: true,
      img: productImg4,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Fit micro corduroy shirt",
      info: "Shirts",
      category: "Men's",
      price: 56,
      countInStock: 5,
      rating: 4,
      slug: "fit-micro-corduroy-shirt",
      newProduct: false,
      img: productImg6,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Tropical Kimono",
      info: "Shirts",
      category: "Women's",
      price: 56,
      countInStock: 5,
      rating: 3,
      slug: "tropical-kimono",
      newProduct: true,
      img: productImg6,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: true,
    },
    {
      id: uuidv4(),
      title: "Contrasting sunglasses",
      info: "T-Shirts",
      category: "Women's",
      price: 56,
      countInStock: 5,
      slug: "contrasting-sunglasses",
      rating: 5,
      newProduct: true,
      img: productImg7,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Water resistant backpack",
      info: "Shirts",
      category: "Kid's",
      price: 56,
      countInStock: 5,
      slug: "water-resistant-backpack",
      rating: 3,
      newProduct: true,
      img: productImg8,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: false,
    },
    {
      id: uuidv4(),
      title: "Circular pendant earrings",
      info: "Jeans",
      category: "Accessories",
      price: 72,
      countInStock: 5,
      rating: 2,
      countInStock: 5,
      slug: "circular-pendant-earrings",
      newProduct: true,
      img: shopImg7,
      desc: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret. Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.`,
      sale: true,
    },
  ],

  trending: [
    {
      id: uuidv4(),
      title: "Chain bucket bag",
      category: "trend",
      price: 54,
      countInStock: 5,
      img: trendImg1,
    },
    {
      id: uuidv4(),
      title: "Pendant earrings",
      category: "trend",
      price: 79,
      countInStock: 5,
      img: trendImg2,
    },
    {
      id: uuidv4(),
      title: "Cotton T-Shirt",
      category: "trend",
      price: 42,
      countInStock: 5,
      img: trendImg3,
    },
    {
      id: uuidv4(),
      title: "Cotton T-Shirt",
      category: "seller",
      price: 39,
      countInStock: 5,
      img: sellerImg1,
    },
    {
      id: uuidv4(),
      title: "Zip-pockets",
      category: "seller",
      price: 59,
      countInStock: 5,
      img: sellerImg2,
    },
    {
      id: uuidv4(),
      title: "Round leather bag",
      category: "seller",
      price: 59,
      countInStock: 5,
      img: sellerImg3,
    },
    {
      id: uuidv4(),
      title: "Bow wrap skirt",
      category: "feature",
      price: 59,
      countInStock: 5,
      img: featureImg1,
    },
    {
      id: uuidv4(),
      title: "Metallic earrings",
      category: "feature",
      price: 59,
      countInStock: 5,
      img: featureImg2,
    },
    {
      id: uuidv4(),
      title: "Flap cross-body bag",
      category: "feature",
      price: 59,
      countInStock: 5,
      img: featureImg3,
    },
  ],

  sliderProductDetails: [
    {
      img: productSlideImg1,
    },
    {
      img: productSlideImg2,
    },
    {
      img: productSlideImg3,
    },
    {
      img: productSlideImg4,
    },
  ],
};

export default data;
