import React from "react";


export default class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments : []
        }
    }

static getDerivedStateFromProps(props, state){
    return {comments: props.data}
}

render(){
    return(
        <div className='col-lg-10 mx-auto'>
            <table className='table table-light table-bordered'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Body</th>
                  {/* <th>Email</th>
                  <th>Address</th>
                  <th>Features</th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.comments.map((item, i) => (
                  <tr key={item['id']}>
                    <td>{i + 1}</td>
                    <td>{item['name']}</td>
                    <td>{item['email']}</td>
                    <td>{item['body']}</td>
                    {/* <td>{item['email']}</td>
                    <td>{item['address']['city']}</td>
                    <td>
                      <button className='btn btn-info'>Posts</button>
                      <button className='btn btn-success'>Comments</button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    )
}


}