import React, { useState } from "react";
import useApp from "../../hooks/useApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";

function AddCategory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { categoryStorage, setCategoriesData } = useApp();

  const addCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCategory = {
      name: formData.get("name"),
      type: formData.get("type"),
    };

    const updatedCategories = await categoryStorage.insert(newCategory);
    setCategoriesData(updatedCategories.reverse());
    setIsModalOpen(false);
  };

  return (
    <div className="mb-3">
      <Modal
        title="Add Transaction Category"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <form method="post" onSubmit={addCategory}>
          <div className="p-4 w-full flex justify-center gap-2">
            <input
              type="text"
              name="name"
              placeholder="Enter category name"
              className="grow p-2 border border-gray-300 dark:border-gray-500 dark:bg-gray-700 dark:text-white rounded-md"
              required
            />
            <select
              name="type"
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
              onClick={() => setIsModalOpen(false)}
              className="bg-black dark:bg-red-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-600"
            >
              Close
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
      <button
        className="bg-brand-action hover:bg-[#8b00d1] text-slate-900 hover:text-white rounded-full w-[35px] h-[35px] px-1 focus:outline-none"
        onClick={() => setIsModalOpen(true)}
        title="Add Category"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default AddCategory;
