import React from 'react';
import { Table } from "reactstrap";

class DataTable extends React.Component {

    createDataTable () {
        if (this.props.x !== undefined){
            return (
                <Table hover striped size = "sm">
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
            );
        }
        else {
            return (
                <Table hover striped>
                    <tbody>
                            {this.props.values.map((value,index) => {
                                const labels = this.props.labels[index];
                                return(
                                    <tr>
                                        <th style = {{width: "60%"}} scope="column">{labels}</th>
                                        <td style = {{width: "40%"}} >{value}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            );
        }
    }

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                {this.createDataTable()}
          </div>
        );
      }
}

export default DataTable;