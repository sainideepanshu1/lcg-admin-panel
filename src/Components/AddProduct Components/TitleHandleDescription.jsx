import { useContext } from "react";
import { AddProductContext } from "../../Contexts/AddProductContext";
import Editor from "../Editor";
import toast from "react-hot-toast";
import slugify from "slugify";

export default function TitleHandleDescription() {
  const { product, updateProduct, disableHandle, setDisableHandle } =
    useContext(AddProductContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (disableHandle) {
      if (name === "title") {
        const slugifiedTitle = slugify(value, { lower: true });
        updateProduct({ ...product, [name]: value, handle: slugifiedTitle });
      } else {
        updateProduct({ ...product, [name]: value });
      }
    } else {
      updateProduct({ ...product, [name]: value });
    }
  };
  const updateDescription = (newDescription) => {
    updateProduct({ ...product, body_html: newDescription });
  };

  const handleSlugifyChange = (value) => {
    const slugifiedValue = value.replace(/\s+/g, "-").toLowerCase();
    updateProduct({ ...product, handle: slugifiedValue });
  };
  return (
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
            value={product.title}
            placeholder="Short sleeve t-shirt"
          />
        </div>
        <div>
          <div>
            <label className="text-sm" htmlFor="">
              Handle
            </label>
          </div>
          <div
            className={`flex border-[#8a8a8a] border rounded-[0.5rem] items-center ${
              disableHandle ? "bg-[#fafafa]" : "bg-[#fff]"
            } pr-1`}
          >
            <input
              className="focus-within::bg-[#FAFAFA] outline-none text-[0.8125rem] text-[#303030] w-full rounded-[0.5rem] font-sans py-[0.375rem] px-[0.75rem]  caret-[#303030]  font-[450]"
              type="text"
              name="handle"
              onChange={(e) => handleSlugifyChange(e.target.value)}
              value={product.handle}
              disabled={disableHandle}
              placeholder="Short sleeve t-shirt"
            />
            {disableHandle ? (
              <button
                className=" text-heading border border-[#8a8a8a] px-2 rounded-lg"
                onClick={() => setDisableHandle(false)}
              >
                Edit
              </button>
            ) : (
              <button
                className=" text-heading border border-[#8a8a8a] px-2 rounded-lg"
                onClick={() => {
                  if (
                    product.handle.startsWith("-") ||
                    product.handle.endsWith("-")
                  ) {
                    return toast.error('Handle cannot start or end with "-" ');
                  }
                  setDisableHandle(true);
                }}
              >
                Save
              </button>
            )}
          </div>
        </div>
        <div>
          <div>
            <label className="text-sm" htmlFor="">
              Description
            </label>
          </div>
          <Editor
            initialContent={product.body_html}
            updateDescription={updateDescription}
          />
        </div>
      </div>
    </div>
  );
}
