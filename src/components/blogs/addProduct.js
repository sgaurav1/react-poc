import React from "react";
import { useState, useEffect } from "react";
import { bucket } from "../../utilities/comsmic.config";
import Layout from "../../common/layout/layout";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [additional_info, setAdditionalInfo] = useState("");
  const [image ,setimage]=useState("");
  const [users, setUsers] = useState([]);

  useEffect(()=> {
      const response = fetch('https://sandbox-api.invicara.com/passportsvc/api/v1/users/160f140d-ac17-482d-8c3a-945742fce49a', {
        method: 'GET', 
        headers: {
          Authorization: 'Bearer' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nfa2V5X2lkIjoiNjY5NmRlYWMtMWI1My00OTJhLWJmMmEtMWY2OGE5ODZhNThhIiwidXNlcl9uYW1lIjoiOTgzYjhmNjktZDYwYy00OTE3LTg5MzAtZDY3ZjIxOWM4YmIzIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTY4NTU5ODA0NSwiYXBwX2lkIjoiMDNkZjQ3M2EtMTdkNi00MTZhLThkODQtNDJmOGNkMzIyMzlmIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjBkNWJiZTYwLTMyNTUtNDI5Ni04ZTU4LTg5MWJhMjU4OTkyZiIsImNsaWVudF9pZCI6IjAzZGY0NzNhLTE3ZDYtNDE2YS04ZDg0LTQyZjhjZDMyMjM5ZiJ9.fPqwvaOLTFK13AiH4UbbKfTJeeLawS_Mfk673WamEy75XNCtsKdxcvivf384sojcAcKGvFdtM8f4o7E50c_rUTQGNwX7QMntOh0nQMOoGcUAI3vfGS-pVc7d2K_M0cQGsGyAIxmwCwJEUn5g-nzdUC8P08D2T23_LPWkkxenEpwWG_WzF7QkxLxKOxO_GwjzconS6jA2V7J_h1EoAHsfBNZmJlFjBLMX2uaELnpt2aDbBvQwGZQx7jp2107vV1bqErh_GXJ4G4xnKBy16zpdeNMTNIL9GkEk6iGmoN_57T-dKVCi9eL2NogiYMkYWsJKlBdPt9LUAomqEktZktUn0w'
        }
      }).then(res=> res.json());
      response.then((data)=> {
        console.log('twinit data', data);
      })
  })

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
      <div className="formwrp-adduser">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="form-label col-md-2">Product Title</label>
                <input className="col-md-4 form-control"
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

            <input className="col-md-4 form-control"
              id="content"
              name="content"
              placeholder=" enter content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label col-md-2">Price</label>

            <input className="col-md-4 form-control"
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
          
            className="col-md-4 form-control"
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
