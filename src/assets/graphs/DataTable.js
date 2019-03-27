import React from 'react';
import { Table } from "reactstrap";

class DataTable extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <Table striped size = "sm">
                <tbody>
                    {this.props.x.map((value,index) => {
                        const y = this.props.y[index];
                        return(
                            <tr>
                                <th style = {{width: "60%"}} scope="column">{y}</th>
                                <td style = {{width: "40%"}} >{value}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
          </div>
        );
      }
}

export default DataTable;