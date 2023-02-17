import React from "react";
import styles from './messagebox.module.css';


export default class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        console.log('props', props);
    }

    render() {
        return (
            <>
                <div className={'border round shadow-lg d-flex align-items-center justify-content-center py-5'+' ' + styles.MessageBoxStyle}>
                    <div>
                        <h5 className="text-center text-success">{this.props.data.title}</h5>
                        <p className="text-center text-dark">{this.props.data.message}</p>
                    </div>
                </div>
            </>
        )
    }

}
