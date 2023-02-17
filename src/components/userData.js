import React from "react";


const UserTabel = () => {
    const data = ['Gaurav', 'Deepak', 'Pranshu', 'Sachin'];
    return (
        <>
            <ul>
                {data.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </>
    )
}

class UserDataFromApi extends React.Component {
    user = [];
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            hasError: false
        }
    }

    

    static getDerivedStateFromProps(state, props) {
        console.log('Data before mount', state.userData);
        return null;
    }


    componentDidMount() {
        console.log('userdata before api calling: ', this.state.userData)
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then((result) => {
            console.log(result);
            this.setState({ userData: result });
            this.user = result;
        })
    }

    // shouldComponentUpdate()
    // sometimes we need to rerender the component when any stae or props have been changed wo we have methods to control that when the component should update , by deault it returns true and if any change will happen the component will re-render but if we need to we can stop by returing false inside the shouldComponentUpdate method
    //it takes two args: nextState, nextProps
    shouldComponentUpdate(nextState, nextProps) {
        console.log('shouldcomponent update called');
        console.log('shouldUpdate', nextState, nextProps);
        if (this.state.userData != nextState.userData) {
            console.log('not updating');
            return true;
        }
        console.log('updating');
        return false;
    }

    updateState(){
        this.setState({userData: [{'id': '1111', 'name': 'gaurav'}]})
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapShotBeforeUpdate is called');
        console.log(prevProps, prevState);
        return null
    }
    // componentDidCatch(error, info){
    //     this.setState({hasError: true})
    //     console.log('erro occurs');
    // }
    render() {
        return (
            <>
                <div className="mx-auto py-4">
                    <button onClick={()=> this.updateState()}>Update Data</button>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.userData.map((item, i) => (
                                <tr key={item['id']}>
                                    <td>{i + 1}</td>
                                    <td>{item['name']}</td>
                                    <td>{item['phone']}</td>
                                    <td>{item['email']}</td>
                                    <td>{item['website']}</td>
                                    {/* <td>{item['username']}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

}

// export default UserTabel;
export default UserDataFromApi;