import { Label, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { ErrorType } from "../../types/ErrorType";



const FormComponet = ({ getDataForm }: any) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("phone");
  const [image, setImage] = useState("https://vai.placeholder.com/150");
  const [error, setError] = useState<ErrorType>({
    title: "",
    price: "",
  });

  useEffect(() => {
    if (title.length < 3) {
      setError((prev) => {
        console.log(prev);
        return {
          ...prev,
          title: "Titile must be atleast 3 charater",
        };
      });
    } else {
      setError((prev) => {
        return { ...prev, title: "" };
      });
    }
    if (price < 0) {
      setError((prev) => {
        console.log(prev);
        return { ...prev, price: "price must be greater than 0" };
      });
    } else {
      setError((prev) => {
        console.log(prev);
        return { ...prev, price: "" };
      });
    }
  }, [title, price]);

  useEffect(() => {
    getDataForm({ title, price, description, category,image });
    
  }, [title, price, description, category, image,getDataForm]);

  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Prodcut Title" />
        </div>
        <TextInput
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          type="text"
          placeholder="ipone 14 pro"
          required
        />
      </div>
      {error.title && <p className="text-red-500">{error.title}</p>}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Product Price" />
        </div>
        <TextInput
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          id="price"
          type="number"
          required
        />
      </div>
      {error.price && <p className="text-red-500">{error.price}</p>}

      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Product Description" />
        </div>
        <Textarea
          onChange={(e) => setDescription(e.target.value)}
          id="description"
        />
      </div>
    </form>
  );
};

export default FormComponet;
