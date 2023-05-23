import React from "react";
import { useState } from "react";
import { bucket } from "../../utilities/comsmic.config";
import Layout from "../../common/layout/layout";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [additional_info, setAdditionalInfo] = useState("");
  const [image ,setimage]=useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    // metafields
    const metafields = [
      {
        title: "Price",
        type: "number",
        key: "price",
        value: Number(price),
      },
      {
        title: "Additional Info",
        type: "textarea",
        key: "additional_info",
        value: additional_info,
      },
      {
        title: "image",
        type: "file",
        key: "image",
        value: image,
      },
    ];

    try {
      // Add Object "products" Object Type
      const data = await bucket.objects.insertOne({
        title,
        type: "products",
        content,
        metafields,
      });
      console.log("Success!", data);
    } catch (err) {
      console.log("Error!", err);
    }

    setTitle("");
    setContent("");
    setPrice("");
    setAdditionalInfo("");
    setimage("");
  };

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="form-label col-md-2">Product Title</label>
                <input className="col-md-4"
              id="title"
              name="title"
              type="text"
              placeholder=" enter Product title"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label col-md-2">Content</label>

            <input className="col-md-4"
              id="content"
              name="content"
              placeholder=" enter content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label col-md-2">Price</label>

            <input className="col-md-4"
              id="price"
              name="price"
              type="number"
              value={price}
              placeholder=" enter price"
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label col-md-2">Additional Info</label>

            <textarea
          
            className="col-md-4"
              id="additional_info"
              name="additional_info"
              placeholder="enter addition info"
              value={additional_info}
              onChange={(event) => setAdditionalInfo(event.target.value)}
            />
          </div>
          <div className="form-group mb-3">
          <label className="form-label col-md-2">product Image:</label>

              <input type="file"
       id="image" name="image" value={image}
       onChange={(event) => setimage(event.target.value)}
       accept="image/png, image/jpeg"/>
          </div>
       
        <div className="p-2">
        <button type="submit" className="btn btn-primary m-2">
            ADD
          </button>
          <button type="button" className="btn btn-danger">
          cancel
          </button>
        </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddProducts;
