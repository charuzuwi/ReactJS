import { useState } from 'react';

export default function Shopping() {
  const categories = [
    {
      name: 'Phone',
      products: [
        {
          name: 'iPhone 14',
          img: 'https://img.freepik.com/premium-vector/smartphone-view-illustration-vector_174496-1035.jpg?w=1480',
          price: 'P35,000.00',
        },
        {
          name: 'Samsung Galaxy S21',
          img: 'https://img.freepik.com/free-photo/new-cell-phone-colorful-background_58702-5061.jpg',
          price: 'P18,000.00',
        },
        {
          name: 'Google Pixel 6',
          img: 'https://img.freepik.com/free-vector/realistic-smartphone-mockup-with-front-back_1017-19783.jpg',
          price: 'P15,000.00',
        },
        {
          name: 'OnePlus 9',
          img: 'https://img.freepik.com/free-photo/new-cell-phone-colorful-background_58702-4824.jpg',
          price: 'P12,000.00',
        },
        {
          name: 'Xiaomi Mi 11',
          img: 'https://img.freepik.com/premium-vector/realistic-vector-illustration-smartphone-front-back_174496-1028.jpg',
          price: 'P19,000.00',
        },
      ],
    },
    {
      name: 'Laptop',
      products: [
        {
          name: 'MacBook Pro',
          img: 'https://img.freepik.com/free-photo/laptop-blank-screen-digital-device_53876-97311.jpg',
          price: 'P70,000.00',
        },
        {
          name: 'Dell XPS 13',
          img: 'https://img.freepik.com/premium-photo/untitled-design-66_1288896-468.jpg',
          price: 'P32,000.00',
        },
        {
          name: 'HP Spectre',
          img: 'https://img.freepik.com/free-photo/laptop-computer-night_1101-415.jpg',
          price: 'P30,000.00',
        },
        {
          name: 'Lenovo ThinkPad',
          img: 'https://img.freepik.com/free-photo/laptop-device-with-minimalist-monochrome-background_23-2150763336.jpg',
          price: 'P25,000.00',
        },
        {
          name: 'Asus ZenBook',
          img: 'https://img.freepik.com/premium-photo/laptop-mockup-3d_1314854-11540.jpg',
          price: 'P35,000.00',
        },
      ],
    },
    {
      name: 'Shoes',
      products: [
        {
          name: 'Nike Air Max',
          img: 'https://img.freepik.com/premium-psd/stylish-red-white-grey-athletic-sneakers-isolated-transparent-background_1198745-7622.jpg',
          price: 'P1,500.00',
        },
        {
          name: 'Adidas Ultraboost',
          img: 'https://img.freepik.com/premium-photo/neon-shoe-with-word-fire-it_853177-13787.jpg',
          price: 'P900.00',
        },
        {
          name: 'Puma RS-X',
          img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/371570/01/sv01/fnd/PNA/fmt/png',
          price: 'P1,200.00',
        },
        {
          name: 'Reebok Classic',
          img: 'https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-2952.jpg',
          price: 'P800.00',
        },
        {
          name: 'Vans Old Skool',
          img: 'https://img.freepik.com/free-photo/view-skateboard-with-retro-memorabilia_23-2150583927.jpg',
          price: 'P600.00',
        },
      ],
    },
    {
      name: 'Books',
      products: [
        {
          name: '1984 by Orwell',
          img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327144697i/3744438.jpg',
          price: 'P500.00',
        },
        {
          name: 'To Kill a Mockingbird',
          img: 'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg',
          price: 'P600.00',
        },
        {
          name: 'The Great Gatsby',
          img: 'https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SX320_BO1,204,203,200_.jpg',
          price: 'P300.00',
        },
        {
          name: 'Moby Dick',
          img: 'https://cdn1.bookmanager.com/i/m?b=rBSsMLeAZlbH_8bDoVHfdA&cb=1736567719',
          price: 'P400.00',
        },
        {
          name: 'War and Peace',
          img: 'https://cdn.kobo.com/book-images/8a9359fd-f4cb-4ecd-98c2-b90cf94e9e35/1200/1200/False/war-and-peace-37.jpg',
          price: 'P500.00',
        },
      ],
    },
    {
      name: 'Accessories',
      products: [
        {
          name: 'Apple Watch',
          img: 'https://powermaccenter.com/cdn/shop/files/Apple_Watch_Series_10_46mm_GPS_Jet_Black_Aluminum_Sport_Band_Black_PDP_Image_Position_1__en-US_da130d3a-97c7-4611-9182-45f84b01188a.jpg?v=1727185714',
          price: 'P3,000.00',
        },
        {
          name: 'Samsung Galaxy Buds',
          img: 'https://images-na.ssl-images-amazon.com/images/I/61qyt0unbUL.jpg',
          price: 'P1,500.00',
        },
        {
          name: 'Fossil Wallet',
          img: 'https://fossil.scene7.com/is/image/FossilPartners/ML4684210_1?$sfcc_fos_large$',
          price: 'P500.00',
        },
        {
          name: 'Ray-Ban Sunglasses',
          img: 'https://i5.walmartimages.com/seo/Ray-Ban-Rb2140-Original-Wayfarer-Sunglasses_8446e89d-e4ff-4953-8cd8-5d507c373f97.2374f67bdecda9d879c390bdaa6e33f1.jpeg',
          price: 'P800.00',
        },
        {
          name: 'Sony Headphones',
          img: 'https://www.sony.com.ph/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
          price: 'P2,000.00',
        },
      ],
    },
  ];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const productsToShow = categories[selectedCategoryIndex].products;

  const handleBuy = (productName) => {
    alert(`You bought: ${productName}`);
  };

  return (
    <div
      style={{
        maxWidth: 1500,
        margin: '40px auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#2e3a59',
        padding: '0 20px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: 30,
          fontWeight: '900',
          fontSize: '2.5rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#3b5998',
          textShadow: '1px 1px 2px #a0aec0',
        }}
      >
        Shop by Category
      </h2>

      {/* Category Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '18px',
          marginBottom: '40px',
          flexWrap: 'wrap',
        }}
      >
        {categories.map((category, index) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategoryIndex(index)}
            style={{
              backgroundColor: index === selectedCategoryIndex ? '#3b5998' : '#f0f4f8',
              color: index === selectedCategoryIndex ? '#fff' : '#3b5998',
              border: '2px solid #3b5998',
              borderRadius: '30px',
              padding: '12px 28px',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow:
                index === selectedCategoryIndex
                  ? '0 6px 15px rgba(59, 89, 152, 0.4)'
                  : 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (index !== selectedCategoryIndex) e.currentTarget.style.backgroundColor = '#dbe6fb';
            }}
            onMouseLeave={(e) => {
              if (index !== selectedCategoryIndex) e.currentTarget.style.backgroundColor = '#f0f4f8';
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          paddingBottom: '10px',
        }}
      >
        {productsToShow.map(({ name, img, price }, idx) => (
          <div
            key={idx}
            style={{
              background: 'linear-gradient(145deg, #e0e7ff, #c5cffa)',
              borderRadius: '16px',
              boxShadow: '8px 8px 16px #a3b1ff, -8px -8px 16px #ffffff',
              width: 160,
              height: 260,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: '700',
              fontSize: '1.1rem',
              color: '#2e3a59',
              textAlign: 'center',
              padding: '15px',
              cursor: 'default',
              userSelect: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.07)';
              e.currentTarget.style.boxShadow = '12px 12px 20px #7c88e3, -12px -12px 20px #f2f4ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '8px 8px 16px #a3b1ff, -8px -8px 16px #ffffff';
            }}
          >
            <img
              src={img}
              alt={name}
              style={{
                width: '100%',
                height: 120,
                objectFit: 'contain',
                marginBottom: 10,
                borderRadius: '12px',
              }}
            />
            <div>{name}</div>
            <div
              style={{
                color: '#3b5998',
                fontWeight: '800',
                fontSize: '1rem',
                marginTop: 4,
              }}
            >
              {price}
            </div>
            <button
              onClick={() => handleBuy(name)}
              style={{
                backgroundColor: '#3b5998',
                border: 'none',
                color: '#fff',
                padding: '8px 12px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '0.9rem',
                transition: 'background-color 0.3s ease',
                marginTop: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2d4373';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3b5998';
              }}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
