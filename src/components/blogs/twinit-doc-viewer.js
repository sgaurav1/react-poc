import IafDocViewer from '@invicara/iaf-doc-viewer';
import React from 'react';


const TwinitComponents = () => {
    const docIds = [
        {
            "_fileId": "da9a12ac-699c-4232-8c06-fc789eb9d6e5"
        },
        {
            "_fileId": "aa51b6b9-8c61-4bea-a5bf-66fd4d423f9e",
            "_fileVersionId": "81266d27-7fb6-4c80-bf3c-77038ffdbfd7"
        }
    ]
    return (
        <>
            <IafDocViewer
                docIds={docIds}
                style={{ height: '100%', width: '100%' }}
            />
        </>
    )
}

export default TwinitComponents;