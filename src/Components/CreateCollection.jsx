import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CreateCollection = () => {
  const [collection, setCollection] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setCollection({ ...collection, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!collection.title || !collection.description) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      const { data, status } = await axios.post(
        "http://localhost:8000/api/collection/add-collection",
        collection
      );
      if (status === 201 && data.success) {
        toast.success(data.message);
        setCollection({
          title: "",
          description: "",
          image: "",
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response.data) {
        toast.error(error.response.data.message, { duration: 2000 });
      } else {
        toast.error(error.message, { duration: 2000 });
      }
    }
  };
  return (
    <>
      <div className="bg-[#F1F1F1] w-full h-screen">
        <div className="w-[62.375rem] ml-auto mr-auto sm:w-full">
          <div className="flex items-center py-6 text-lg font-sans font-bold sm:px-2">
            <Link className="p-1" to="/">
              <FaArrowLeftLong />
            </Link>
            Create Collection
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-3 sm:flex-col sm:items-center">
              <div className="w-full flex flex-col sm:w-[93%]">
                <div className="rounded-xl bg-white shadow-md p-4">
                  <div className="flex flex-col gap-4">
                    <div>
                      <div>
                        <label className="text-sm" htmlFor="">
                          Title
                        </label>
                      </div>
                      <input
                        className="hover:bg-[#FAFAFA] text-[0.8125rem] text-[#303030] w-full border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={collection.title}
                        placeholder="Short sleeve t-shirt"
                      />
                    </div>
                    <div>
                      <div>
                        <label className="text-sm" htmlFor="">
                          Description
                        </label>
                      </div>
                      <input
                        type="text"
                        className="hover:bg-[#FAFAFA] text-[0.8125rem] text-[#303030] w-full border-[0.04125rem] border-[#8a8a8a] font-sans py-[0.375rem] px-[0.75rem] rounded-[0.5rem] caret-[#303030]  font-[450]"
                        name="description"
                        onChange={handleChange}
                        value={collection.description}
                        placeholder="Collection Description"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-xl my-4 bg-white shadow-md p-4">
                  <div className="px-5 pt-5">Media</div>
                  <div className="p-4">
                    <input
                      type="file"
                      // multiple
                      accept="image/*"
                      className="w-full"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-xl flex items-center justify-center  p-4">
                <button
                  type="submit"
                  className="bg-[#1A1A1A] text-[#E3E3E3] text-heading p-3 rounded-lg"
                >
                  Add Collection
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCollection;
