import React, { Fragment, useState } from "react";
import useApp from "../../hooks/useApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import CategoryView from "./CategoryView";

function CategoryList() {
  const { categoriesData } = useApp();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryViewOpen, setIsCategoryViewOpen] = useState(false);

  const isCategoriesAvailable = categoriesData && categoriesData.length > 0;

  const openCategoryView = (category) => {
    setSelectedCategory(category);
    setIsCategoryViewOpen(true);
  };

  const closeCategoryView = () => {
    setSelectedCategory(null);
    setIsCategoryViewOpen(false);
  };

  return (
    <Fragment>
      {!isCategoriesAvailable && (
        <div className="flex justify-center items-center w-full h-full">
          <p>No transaction categories available</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isCategoriesAvailable &&
          categoriesData.map((category) => (
            <div
              key={category.id}
              className={`${
                category.type === "Income"
                  ? "bg-brand-primary hover:bg-brand-primary-deep"
                  : "bg-orange-500 hover:bg-orange-600"
              } text-white rounded-lg shadow-lg p-3 cursor-pointer`}
              onClick={() => openCategoryView(category)}
            >
              <div className="flex justify-between">
                <div className="font-semibold">{category.name}</div>
                <div>
                  {category.type === "Income" ? (
                    <FontAwesomeIcon icon={faPlusSquare} />
                  ) : (
                    <FontAwesomeIcon icon={faMinusSquare} />
                  )}
                  &nbsp;{category.type}
                </div>
              </div>
            </div>
          ))}
      </div>
      {selectedCategory && (
        <CategoryView
          category={selectedCategory}
          isOpen={isCategoryViewOpen}
          onClose={closeCategoryView}
        />
      )}
    </Fragment>
  );
}

export default CategoryList;
