import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Layout from "../../../common/layout/layout";


const TelemetryCollection = () => {

    const [orcCollection, setOrchCollection] = useState([]);

    useEffect(() => {
        (async () => {
            getTels();
        })();
    }, [])

    const getTels = async () => {
        const telRes = await axios.get('https://sandbox-api.invicara.com/datasourcesvc/api/v1/orchestrators?nsfilter=developertraining_ELkuPuNL', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('twinitAccessToken')
            }
        })
        setOrchCollection(telRes.data._list);
    }

    return (
        <Layout>
            <div className="content-head pt-3 pb-2 borderw-2">
                <h6 className="text-secondary mb-3">Data Sources</h6>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(orcCollection && orcCollection.length > 0) && (
                            orcCollection.map((item, i) => (
                                <tr key={item['_id']}>
                                    <td>{i+1}</td>
                                    <td>{item._name}</td>
                                    <td>{item._class}</td>
                                    <td>{item._description}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

            </div>
        </Layout>
    )

}

export default TelemetryCollection;