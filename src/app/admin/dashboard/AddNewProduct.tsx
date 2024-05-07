"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useAddProductMutation } from "@/redux/api/adminApi";
import { ProductSchema } from "@/schema/schema";
import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [images, setImages] = useState<FileList>();
  const [category, setCategory] = useState([""]);
  const [description, setDescription] = useState("");
  const [color, setColor] = useState<string[]>([]);

  const handlecolor = (id: string) => {
    const checkBox = document.getElementById(id);
    if (checkBox?.checked == true) {
      setColor([...color, id]);
    } else {
      setColor(color.filter((cId) => cId != id));
    }
  };
  const [addNewProduct, { isSuccess, isLoading, isError, data }] =
    useAddProductMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const productToAdd: ProductSchema = {
      pid: 123,
      productName: name,
      category: category,
      images: [],
      price: price,
      qtyavailable: quantity,
      colors: color,
      description: description,
    };
    // const teemp = new FileList();
    addNewProduct({
      productInfo: productToAdd,
      images: images ? images : null,
    });
    if (isSuccess) {
      toast({
        title: "Success: Add Product",
        description: "Sucessfully added a Product",
        variant: "default",
        duration: 2000,
      });
    }
    if (isError) {
      toast({
        title: "Error: Add Product",
        description: "Error in Adding new product.",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) setImages(files);
  };
  return (
    <div className="bg-slate-500">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div>Productname:</div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <div>category:</div>
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={(e) => {
            setCategory([`${e.target.value}`]);
          }}
        />
        <br />
        <div>Description:</div>
        <textarea
          rows={4}
          cols={30}
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <br />
        <div>Images:</div>
        <input
          type="file"
          accept="image/*"
          name="images[]"
          multiple
          onChange={handleImageChange}
        />
        <br />
        <div>Price:</div>
        <input
          type="number"
          step="0.01"
          min="0"
          name="price"
          onChange={(e) => {
            setPrice(e.target.valueAsNumber);
          }}
        />
        <br />
        <div>QuantityAvailable:</div>
        <input
          type="number"
          name="quantity_available"
          onChange={(e) => {
            setQuantity(e.target.valueAsNumber);
          }}
        />
        <br />
        <div>Colors:</div>
        <input
          type="checkbox"
          id="black"
          name="black"
          value="#121212"
          onClick={() => {
            handlecolor("black");
          }}
        />
        <label htmlFor="black"> Black</label>
        <input
          type="checkbox"
          id="red"
          name="red"
          value="#ff0000"
          onClick={() => {
            handlecolor("red");
          }}
        />
        <label htmlFor="red"> Red</label>
        <input
          type="checkbox"
          id="blue"
          name="blue"
          value="#000dff"
          onClick={() => {
            handlecolor("blue");
          }}
        />
        <label htmlFor="blue"> Blue</label>
        <input
          type="checkbox"
          id="green"
          name="green"
          value="#faf600"
          onClick={() => {
            handlecolor("green");
          }}
        />
        <label htmlFor="green"> Green</label>

        <Button type="submit">Add Product</Button>
      </form>

      
    </div>
  );
};

export default AddProduct;
