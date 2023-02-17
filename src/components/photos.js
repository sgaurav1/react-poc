import React from "react";


export default class Photos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phData: []
        }
    }


    static getDerivedStateFromProps(props, state){
        return {phData: props.data}
    }

    render(){
        return(
            <div className='col-lg-10 mx-auto'>
            <table className='table table-light table-bordered'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Photo</th>
                </tr>
              </thead>
              <tbody>
                {this.state.phData.map((item, i) => (
                  <tr key={item['id']}>
                    <td>{i + 1}</td>
                    <td>{item['title']}</td>
                    <td><img src={item['thumbnailUrl']} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
    }

}