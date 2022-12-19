import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./LearnMultiplication.css";

// interface for each number block
export interface BlockofNumbersPropsI {
  value: number;
  isMultiple: boolean;
}

// Predefined set of numbers
const numbers: BlockofNumbersPropsI[] = [];
for (let i = 1; i <= 144; i++) {
  numbers.push({
    value: i,
    isMultiple: false,
  });
}

const LearnMultiplication = () => {
  const [blockofNumbers, setBlockofNumbers] =
    useState<BlockofNumbersPropsI[]>(numbers);

  const calculateMultiples = (selectedNumber: number) => {
    // copy of setofnumbers with new array so component can rerender
    let numbersCopy = [...blockofNumbers];

    // check if number is multiple of selected number then set the flag
    numbersCopy?.forEach((n) => {
      if (selectedNumber && n.value % selectedNumber === 0) {
        n.isMultiple = true;
      } else {
        n.isMultiple = false;
      }
    });
    setBlockofNumbers(numbersCopy);
  };

  return (
    <Container className="main-container">
      <Row>
        <Col md={10}>
          <h3>Select a number to find it's multiples</h3>
        </Col>
        <Col md={2}>
          <Button type="reset" onClick={() => calculateMultiples(0)}>
            Reset
          </Button>
        </Col>
      </Row>
      <Row className="main" lg={3} md={2} sm={1} xs={1}>
        {blockofNumbers &&
          blockofNumbers.map((number: BlockofNumbersPropsI) => {
            return (
              <Col
                className={`block ${number.isMultiple ? "highlight" : ""}`}
                onClick={() => calculateMultiples(number.value)}
                key={number.value}
              >
                <Button
                  variant={number.isMultiple ? "success" : "secondary"}
                  type="button"
                  className={number.isMultiple ? "btn-outline-light" : ""}
                >
                  {number.value}
                </Button>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default LearnMultiplication;
