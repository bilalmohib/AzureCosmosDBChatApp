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
  const [products, setProducts] = useState<Product[]>([]);

  // To post the data these states are used
  const [categoryName, setCategoryName] = useState("");
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState("");
  const [tagArray, setTagArray] = useState([]);

  const createDatabase = async () => {
    const cosmosClient = new CosmosClient({ endpoint, key });

    // Create database if it doesn't exist
    const { database } = await cosmosClient.databases.createIfNotExists({
      id: databaseName,
    });
    console.log(`${database.id} database ready`);

    // Create container if it doesn't exist
    const { container } = await database.containers.createIfNotExists({
      id: containerName,
    });
    console.log(`${container.id} container ready`);
  };

  const cosmosClient = new CosmosClient({ endpoint, key });
  const database = cosmosClient.database(databaseName);
  const container = database.container(containerName);

  const fetchProducts = async () => {
    // Query all items in the container
    const { resources }: any = await container.items.readAll().fetchAll();

    // Reverse the order of the items
    const new_data= resources.reverse();  

    // Update the products state with the fetched data
    setProducts(new_data);
  };

  const populateData = async () => {
    // Split the tags string into an array
    const tagArray = tags.split(",").map((tag) => {
      return { _id: Math.random().toString(), name: tag };
    });

    // Data items
    const item = {
      id: Math.random().toString(),
      categoryId: Math.random().toString(),
      categoryName: categoryName,
      sku: sku,
      name: name,
      description: description,
      price: price,
      tags: tagArray,
    };

    // Create all items
    const { resources }: any = await container.items.create(item);
    console.log(`'${resources}' inserted`);

    // Update the products state with the fetched data
    setProducts(
      products.concat({
        id: item.id,
        categoryId: item.categoryId,
        categoryName: item.categoryName,
        sku: item.sku,
        name: item.name,
        description: item.description,
        price: item.price,
        tags: item.tags,
      })
    );

    // Reset the form
    setCategoryName("");
    setSku("");
    setName("");
    setDescription("");
    setPrice(0);
    setTags("");
    setTagArray([]);

    alert("Data inserted successfully");
  };

  useEffect(() => {
    createDatabase();
    fetchProducts();
  }, []);

  return (
    <main className="p-8">
      <div className="shadow-2xl rounded-lg min-h-[90vh] pt-4 px-8 py-5">
        <h1 className="text-center text-3xl text-blue-800 font-semibold underline">
          Azure Cosmos DB CRUD
        </h1>
        <div>
          <h2 className="text-2xl mt-4 font-normal font-mono italic">
            Products
          </h2>

          <form
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              populateData();
            }}
          >
            <label className="mt-4">Category Name</label>
            <input
              type="text"
              required
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <label className="mt-4">SKU</label>
            <input
              type="text"
              required
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setSku(e.target.value)}
            />
            <label className="mt-4">Name</label>
            <input
              type="text"
              required
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="mt-4">Description</label>

            <input
              type="text"
              required
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="mt-4">Price</label>

            <input
              type="number"
              required
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
            <label className="mt-4">Tags</label>

            {/* Store tags as object in array */}
            <input
              type="text"
              required
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setTags(e.target.value)}
            />
            <button
              className="my-4 bg-blue-500 text-white py-2 px-4 rounded"
              type="submit"
            >
              Populate Data
            </button>
          </form>

          <ul>
            {products.map((product) => (
              <li
                key={product.id}
                className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              >
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>Category: {product.categoryName}</p>
                <p>Tags: {product.tags.map((tag) => tag.name).join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
