import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const apiValue = createContext();

function AllData({ children }) {
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios
      .get("/js/Api.json")
      .then((res) => {
        let fixedData = res.data.products.map((item, i) => {
          // عدد الصور 
          const totalImages = 10;
          const imgIndex = (i % totalImages) + 1; // يعيد الاستخدام لو خلصوا

          return {
            ...item,
            title: `Premium Product ${i + 1}`, //  تعديل الاسم
            category: "High-quality product designed with attention to detail, crafted to fit your lifestyle.", // 👈 تعديل الوصف
            thumbnail: `/img/products/${imgIndex}.jpeg`,
            images: [`/img/products/${imgIndex}.jpeg`],
          };
        });
        setApi(fixedData);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <apiValue.Provider value={api}>
      {children}
    </apiValue.Provider>
  );
}

export { AllData, apiValue };

