import React from 'react';
import { Table, Row, Col } from "reactstrap";

class DataTable extends React.Component {
    render() {
        var firstColumn = this.props.y || this.props.labels;
        var secondColumn = this.props.x || this.props.values;

        if (firstColumn.length > 300) {
          firstColumn = firstColumn.slice(firstColumn.length - 301, firstColumn.length -1);
          secondColumn = secondColumn.slice(secondColumn.length - 301, secondColumn.length -1);
        } 

        return (
            <Row>
                <Col style = {{height: "100%", display: "block"}}>
                    <Table hover striped size = "sm" style = {{overflowY: "scroll", height: "440px", display: "block"}}>
                        <tbody>
                                {secondColumn.map((value,index) => {
                                    const first = firstColumn[index];
                                    return(
                                        <tr>
                                            <th style = {{width: "465px"}} scope="column">{first}</th>
                                            <td style = {{width: "465px"}} >{value}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
      }
}

export default DataTable;