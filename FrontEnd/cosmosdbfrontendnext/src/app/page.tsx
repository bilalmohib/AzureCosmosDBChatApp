"use client";
import { useEffect, useState } from "react";
import { CosmosClient } from "@azure/cosmos";
import { NextPage } from "next";

// Define your configuration values here
const endpoint = "https://mlsa2023.documents.azure.com:443/";
const key =
  "gSSJFs4KU9o90TjKBFdtGab7VGHR9FblA25bdLS8NxLt7e3kZRIprDXcWLTlhdqE5SassUchZCgAACDb6QgH3w==";
const databaseName = "checkdb";
const containerName = "checkcontainer";

interface Product {
  id: string;
  categoryId: string;
  categoryName: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  tags: { _id: string; name: string }[];
}

const Home: NextPage = () => {
  // const [products, setProducts] = useState<Product[]>([]);

  // // To post the data these states are used
  // const [categoryName, setCategoryName] = useState("");
  // const [sku, setSku] = useState("");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState(0);
  // const [tags, setTags] = useState("");
  // const [tagArray, setTagArray] = useState([]);

  // const createDatabase = async () => {
  //   const cosmosClient = new CosmosClient({ endpoint, key });

  //   // Create database if it doesn't exist
  //   const { database } = await cosmosClient.databases.createIfNotExists({
  //     id: databaseName,
  //   });
  //   console.log(`${database.id} database ready`);

  //   // Create container if it doesn't exist
  //   const { container } = await database.containers.createIfNotExists({
  //     id: containerName,
  //   });
  //   console.log(`${container.id} container ready`);
  // };

  // const cosmosClient = new CosmosClient({ endpoint, key });
  // const database = cosmosClient.database(databaseName);
  // const container = database.container(containerName);

  // const fetchProducts = async () => {
  //   // Query all items in the container
  //   const { resources }: any = await container.items.readAll().fetchAll();

  //   // Reverse the order of the items
  //   const new_data = resources.reverse();

  //   // Update the products state with the fetched data
  //   setProducts(new_data);
  // };

  // const populateData = async () => {
  //   // Split the tags string into an array
  //   const tagArray = tags.split(",").map((tag) => {
  //     return { _id: Math.random().toString(), name: tag };
  //   });

  //   // Data items
  //   const item = {
  //     id: Math.random().toString(),
  //     categoryId: Math.random().toString(),
  //     categoryName: categoryName,
  //     sku: sku,
  //     name: name,
  //     description: description,
  //     price: price,
  //     tags: tagArray,
  //   };

  //   // Create all items
  //   const { resources }: any = await container.items.create(item);
  //   console.log(`'${resources}' inserted`);

  //   // Update the products state with the fetched data
  //   setProducts(
  //     products.concat({
  //       id: item.id,
  //       categoryId: item.categoryId,
  //       categoryName: item.categoryName,
  //       sku: item.sku,
  //       name: item.name,
  //       description: item.description,
  //       price: item.price,
  //       tags: item.tags,
  //     })
  //   );

  //   // Reset the form
  //   setCategoryName("");
  //   setSku("");
  //   setName("");
  //   setDescription("");
  //   setPrice(0);
  //   setTags("");
  //   setTagArray([]);

  //   alert("Data inserted successfully");
  // };

  // useEffect(() => {
  //   createDatabase();
  //   fetchProducts();
  // }, []);

  return (
    <main>
      <div className="rounded-none min-h-screen">
        <div className="bg-primary-50 w-full h-14"></div>
        <div className="border-2 border-red-500 border-dotted w-full h-[calc(100vh-56px)] flex">
          <div className="w-72 bg-[#f0f0f0] border-green-400 border-dotted border-4 h-full">
            Left Side
          </div>
          <div className="shadow-2xl w-[calc(100vw-288px)] bg-[#f5f5f5] border-green-400 border-solid border-4 h-full">
            Right Side
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
