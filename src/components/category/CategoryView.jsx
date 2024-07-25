import React, { useState } from "react";
import useApp from "../../hooks/useApp";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function CategoryView({ category, isOpen, onClose }) {
  const [name, setName] = useState(category.name);
  const [type, setType] = useState(category.type);
  const { categoryStorage, setCategoriesData } = useApp();

  const updateCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedCategory = {
      name: formData.get("name"),
      type: formData.get("type"),
    };

    const updatedCategories = await categoryStorage.update(
      { id: category.id },
      updatedCategory
    );

    setCategoriesData(updatedCategories.reverse());
    onClose();
  };

  const deleteCategory = async () => {};

  return (
    <Modal title="View Category" isOpen={isOpen} onClose={onClose}>
      <form method="post" onSubmit={updateCategory}>
        <div className="p-4 w-full flex justify-center gap-2">
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Enter category name"
            className="grow p-2 border border-gray-300 dark:border-gray-500 dark:bg-gray-700 dark:text-white rounded-md"
            required
          />
          <select
            name="type"
            defaultValue={type}
            className="flex-auto min-w-[98px] p-2 border border-gray-300 rounded-md dark:border-gray-500 dark:bg-gray-700 dark:text-white"
            required
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={deleteCategory}
            title="Delete Category"
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg mr-2 "
          >
            <FontAwesomeIcon icon={faTrashAlt} /> Delete
          </button>
          <button
            type="submit"
            className="bg-brand-btn hover:bg-brand-btn-hover text-white px-4 py-2 rounded-lg"
          >
            <FontAwesomeIcon icon={faSave} /> Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
