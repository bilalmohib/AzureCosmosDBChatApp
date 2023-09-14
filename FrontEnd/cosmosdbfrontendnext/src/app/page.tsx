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

    // Update the products state with the fetched data
    setProducts(resources);
  };

  const populateData = async () => {
    // Data items
    const items: Product[] = [
      {
        id: Math.random().toString(),
        categoryId: Math.random().toString(),
        categoryName: categoryName,
        sku: sku,
        name: name,
        description: description,
        price: price,
        tags: tagArray,
      },
    ];

    // Create all items
    for (const item of items) {
      const { resource }: any = await container.items.create(item);
      console.log(`'${resource.name}' inserted`);
    }

    // Query all items in the container
    const { resources }: any = await container.items.readAll().fetchAll();

    // Update the products state with the fetched data
    setProducts(resources);
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
          <div className="flex flex-col">
            <label className="mt-4">Category Name</label>
            <input
              type="text"
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <label className="mt-4">SKU</label>
            <input
              type="text"
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setSku(e.target.value)}
            />
            <label className="mt-4">Name</label>
            <input
              type="text"
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="mt-4">Description</label>

            <input
              type="text"
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="mt-4">Price</label>

            <input
              type="number"
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
            <label className="mt-4">Tags</label>

            {/* Store tags as object in array */}
            <input
              type="text"
              className="border-2 border-gray-200 rounded-lg p-4 my-4 shadow-md"
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <button
            onClick={populateData}
            className="my-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Populate Data
          </button>
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
