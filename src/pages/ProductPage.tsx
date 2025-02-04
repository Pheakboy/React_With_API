import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import CardComponet from "../components/product/CardComponet";
import { Spinner } from "flowbite-react";
import FormComponet from "../components/product/FormComponet";
import { Product } from "../types/ProductType";
import { Status } from "../types/StatusType";


const ProductPage = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>("free");
  const [openModal, setOpenModal] = useState(false);
  const [dataForm, setDataForm] = useState({});
  useEffect(() => {
    setStatus("lording");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
      });
  }, []);

  if (status === "lording") {
    return (
      <div className="h-screen grid place-content-center ">
        <h2 className="text-6xl text-cyan-600">Loading</h2>
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  function getDataForm(product: any) {
    setDataForm(product);
  }

  const createProduct = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User Created");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
      setOpenModal(false);
  };

  return (
    <div className=" p-5">
      <div className="flex justify-center items-center my-6">
        <Button onClick={() => setOpenModal(true)}>Add Product</Button>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Product</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <FormComponet getDataForm={getDataForm} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => createProduct()}>Create</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>
      <hr />
      <div className="grid grid-flow-row grid-cols-4 gap-4 my-5">
        {product.map((product) => (
          <CardComponet
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
