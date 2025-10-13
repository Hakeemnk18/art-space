import ShopProductCard from "./ShopProductsCard";
import SortAndFilterBar from "./SortAndFilter";

import { products } from "../../../data/product";
import type { IProduct } from "../../../data/product";
import { useEffect, useState } from "react";
import SortOptions from "./SortAndFilter";
import SortModal from "./SortAndFilter";
import { toSortedProduct } from "../../../helpers/sort";
import { toFilteredProduct } from "../../../helpers/filter";

const FeaturedProducts = () => {
  const [productData, setProductData] = useState<IProduct[]>(products);
  const [isSortModal, setIsSortModal] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [isFilterModal, setIsfilterModal] = useState<boolean>(false)
  const [selectedFilter, setSelectedFilter] = useState<string>("All")
  const [staticData, setStaticData] = useState<IProduct[]>(products);

  const sortOptions = [
    "Price - Low to High",
    "Price - High to Low",
    "A - Z",
    "Z - A",
  ];

  const filterOptions = [
    "All",
    "Bouquets",
    "Tot Bag",
    "Embroidery"
  ]

  

  const handleFilter = () => {
    setIsSortModal(false)
    setIsfilterModal(true)
  }

  const handleSort = () => {
    setIsfilterModal(false)
    setIsSortModal(true);
    
  };

  const onOptionSelect = (option: string) => {
    setSelectedSort(option);
    setIsSortModal(false)
  };

  const onFilterSelect = (option: string) => {
    setSelectedFilter(option);
    setIsfilterModal(false)
  };
  const handleFilterAndSort = ()=>{
    const filtered: IProduct[] = toFilteredProduct(selectedFilter, staticData)
    const sorted: IProduct[] = toSortedProduct(selectedSort, filtered)
    setProductData(sorted)
  }
  useEffect(() => {
    handleFilterAndSort()
  }, [selectedSort, selectedFilter]);

  return (
    <div className="relative pb-20 md:pb-0">
      <section className=" py-16 sm:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          {/* Section Header */}

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.map((product) => (
              <ShopProductCard
                key={product.id}
                price={product.showPrice}
                imageUrl={product.imageUrl}
                title={product.title}
                url={product.url}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] ">
        <div className="flex h-14">
          {/* Sort Button */}
          <button
            onClick={handleSort}
            className="flex-1 flex items-center justify-center gap-2 border-r border-gray-200"
          >
            {/* Sort Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            <span className="font-medium text-gray-800">Sort</span>
          </button>

          {/* Filter Button */}
          <button
            onClick={handleFilter}
            className="flex-1 flex items-center justify-center gap-2"
          >
            {/* Filter Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <span className="font-medium text-gray-800">Categories</span>
          </button>
        </div>
      </div>

      {isSortModal && (
        <SortModal
          title="SORT BY"
          isOpen={isSortModal}
          onClose={() => {
            setIsSortModal(false);
          }}
          options={sortOptions}
          selectedOption={selectedSort}
          onOptionSelect={onOptionSelect}
        />
      )}
      {isFilterModal && (
        <SortModal
          title="FILTER BY"
          isOpen={isFilterModal}
          onClose={() => {
            setIsfilterModal(false);
          }}
          options={filterOptions}
          selectedOption={selectedFilter}
          onOptionSelect={onFilterSelect}
        />
      )}
    </div>
  );
};

export default FeaturedProducts;
